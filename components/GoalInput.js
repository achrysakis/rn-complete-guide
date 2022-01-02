import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (text) => {
    setEnteredGoal(text)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    resetInput();
  }

  const cancelGoalHandler = () => {
    props.onCancel();
    resetInput();
  }
  
  const resetInput = () => {
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.form}>
        <TextInput 
          placeholder='Course goal' 
          style={styles.textInput} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <View style={styles.buttonInput} >
          <Button 
            title="Add" 
            style={styles.buttonInputText} 
            onPress={addGoalHandler}
          />
          <Button 
            title="Cancel" 
            color="red"
            style={styles.buttonInputText} 
            onPress={cancelGoalHandler}
          />          
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    padding: 5,
    borderColor: 'black',
    borderRightWidth: 0,
    borderWidth: 1,
    marginBottom: 10
  },
  buttonInput: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 1,
    color: 'white',
  },
  buttonInputText: {
    color: 'white'
  },
});


export default GoalInput;