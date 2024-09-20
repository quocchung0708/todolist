import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function TodoList() {
    const [list, setList] = useState<string[]>([]);
    const [text, setText] = useState<string>("");

    const handleAdd = () => {
        const newData = [...list, text];
        setList(newData);
        setText("");
    }
    const handleDelete = (index: any) => {
        const data = list.filter((_, i) => i !== index);
        setList(data);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Todolist</Text>
            <View style={styles.form}>
                <TextInput placeholder="Add new todo" 
                    style={styles.input} 
                    value={text}
                    onChangeText={setText}
                />
                <Button title="Add" onPress={handleAdd}/>
            </View>
            <FlatList 
                data={list}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <View>
                        <Text>{item}</Text>
                        <Button title="Delete" onPress={() => handleDelete(index)}/>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    form: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginRight: 10
    }
})