import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const GoalItem = props => {
  return (
    <TouchableOpacity 
      onPress={props.onDelete.bind(this, props.id)} 
      activeOpacity="0.5">
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: "#cccccc"
  }
});

export default GoalItem;