
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas </Text>
      <View style={styles.containerInput}>
        <TextInput placeholder="Digite sua tarefa" style={styles.input} />
        
        <TouchableOpacity style={styles.buttonAdd}>
            <FontAwesome name="plus" size={24} color='#fff'/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22272e",
  },
  title: {
    fontWeight:'bold',
    fontSize: 24,
    color: '#fff',
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 14, 


  }
});
