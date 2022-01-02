import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (text) => {
    setEnteredGoal(text)
  }

  return (
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
          onPress={props.onAddGoal.bind(this, enteredGoal)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  textInput: {
    padding: 5,
    borderColor: 'black',
    borderRightWidth: 0,
    borderWidth: 1,
    width: '80%'
  },
  buttonInput: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 1,
    color: 'white',
    width: '20%'
  },
  buttonInputText: {
    color: 'white'
  },
});


export default GoalInput;