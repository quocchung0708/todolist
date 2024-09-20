import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import TodoList from './page/todoList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TodoList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
