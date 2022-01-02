import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setGoals(currentGoals => [
      ...goals, 
      { id: Math.random().toString(), value: goalTitle}
    ]);
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />

      <FlatList 
        style={styles.goals} 
        data={goals} 
        renderItem={
          itemData => <GoalItem title={itemData.item.value} />
        } 
      />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  goals: {
    width: '100%'
  },
});
