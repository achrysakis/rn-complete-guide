import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput placeholder='Course goal' style={styles.textInput} />
        <View style={styles.buttonInput} >
          <Button title="Add" style={styles.buttonInputText} />
        </View>
      </View>
      <View></View>
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
