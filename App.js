import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (text) => {
    setEnteredGoal(text)
  }

  const addGoalHandler = () => {
    setGoals(currentGoals => [...goals, enteredGoal]);
  }

  return (
    <View style={styles.container}>
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
        </View>
      </View>

      <View>
        {goals.map((goal, index) => <Text key={index}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
  },
  textInput: {
    padding: 5,
    borderColor: 'black',
    borderRightWidth: 0,
    borderWidth: 1,
    width: '60%',
  },
  buttonInput: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 1,
    color: 'white',
  },
  buttonInputText: {
    color: 'white'
  }
});
