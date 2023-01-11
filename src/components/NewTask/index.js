import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'

export function NewTask({addNewTask}){
    const [task, setTask] = useState('');

    function AddTaskAction(){
        if (task == '') return;
        addNewTask(task);
        setTask('');
    };

    function deleLetter(){
        const taskTextReduced = task.substring(0, task.length -1);
        setTask(taskTextReduced);
    }

    return(
        <View style={styles.container}>
            <TextInput value={task}
                        onChangeText={value => setTask(value)}
                        style={styles.input}
                        placeholder="Qual sua tarefa?"
                        placeholderTextColor="#14212B"/>
            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.buttonClearTask} onPress={deleLetter}>
                    <Feather name="delete" size={30} color="#3B5368"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonAddTask} onPress={AddTaskAction}>
                    <Text style={styles.buttonAddText}>ADICIONAR</Text>

                </TouchableOpacity>
            
            </View>            
        </View>
    )
}