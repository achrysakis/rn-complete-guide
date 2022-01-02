import React, { useState } from 'react'
import { StyleSheet, Button, View,  FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = goalTitle => {
    setGoals(currentGoals => [
      ...goals, 
      { 
        id: Math.random().toString(), 
        value: goalTitle
      }
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });    
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }  

  return (
    <View style={styles.container}>
      <Button 
        title="Add new goal" 
        onPress={() => setIsAddMode(true)} 
      />
      
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler} 
        onCancel={cancelGoalAdditionHandler} 
      />

      <FlatList 
        style={styles.goals} 
        data={goals} 
        renderItem={
          itemData => <GoalItem 
                        id={itemData.item.id}
                        onDelete={removeGoalHandler} 
                        title={itemData.item.value} 
                      />
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
    marginTop: 10
  },
});
