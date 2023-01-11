import React, {useState, useEffect} from "react";
import {View, Text, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import { styles } from "./styles";
import { Header } from "../../components/header";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/task";
import { Loading } from "../../components/loading";
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { randomKey } from "../../../Util/randomKeys";

export function Home(){
    const [newTaskIsVisible, setNewTaskIsVisible] = useState (false);
    const [finishedTasks, setFinishedTasks] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [downloadingTasks, setdownloadingTasks] = useState(true)

    const userUid = auth().currentUser.uid;

    function addNewTask(content){
        const taskObject = {
            id: randomKey(),
            content: content,
            isFinished: false,
            date: firebase.firestore.FieldValue.serverTimestamp()
        };
        firestore().collection(userUid).add(taskObject)
        .then(()=>{
            setTasks([taskObject, ...tasks])
        })

    };

        function taskCompleted(id){
            setTasks(tasks.filter(item => item.id !== id));

            const taskCompleted = tasks.filter(item => item.id === id);
            let newFinishedTasks = finishedTasks;

            const taskObject = {
                id: randomKey(),
                content: taskCompleted[0].content,
                isFinished: true,
                date: taskCompleted[0].date
            };
            firestore().collection(userUid).where('content', '==', taskObject.content).get()
            .then(({docs}) => {
                firestore().collection(userUid).doc(docs[0].id).update(taskObject)
                .then(() => setFinishedTasks([taskObject, ...newFinishedTasks]))
            }) 
        };

        function deleteTask(id){
            const filter = finishedTasks.filter(item => item.id !== id);
            const taskFiltered = finishedTasks.filter(item => item.id === id);

            firestore().collection(userUid).where('content', '==', taskFiltered[0].content).get()
            .then(({docs}) => {
                firestore().collection(userUid).doc(docs[0].id).delete()
                .then(()=> setFinishedTasks(filter));
            })
        };

        useEffect(() => {
            function getTasksInFirestore() {
              const tasks = firestore().collection(userUid).where('isFinished', '==', false).get()
              .then(({docs}) => {
                let tasksResponse = [];
                docs.map(item => tasksResponse.push(item.data()));
                setTasks(tasksResponse);
              });
              const tasksFinished = firestore().collection(userUid).where('isFinished', '==', true).get()
              .then(({docs}) => {
                let tasksFinishedResponse = [];
                docs.map(item => tasksFinishedResponse.push(item.data()));
                setFinishedTasks(tasksFinishedResponse);
              });
              setdownloadingTasks(false);
            };
            getTasksInFirestore();
          }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Header newTaskIsVisible={newTaskIsVisible} setNewTaskIsVisible={setNewTaskIsVisible}/>
            { newTaskIsVisible && <NewTask addNewTask={addNewTask}/>}
            {downloadingTasks 
                ? <Loading text="Buscando tarefas..."/>
                : (
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 50}}>
            {tasks.map((item) => (<Task key={item.id} data={item} action={(id)=>taskCompleted(id)}/>))}
            {finishedTasks.length !== 0 && (
              <>
                <View style={styles.containerDivision}>
                  <View style={styles.finishedLine}/>
                  <Text style={styles.finishedText}>finalizadas</Text>
                  <View style={styles.finishedLine}/>
                </View>
                {finishedTasks.map((item) => (
                  <Task key={item.id} data={item} action={(id) => deleteTask(id)} />
                ))}
              </>
            )}
            </ScrollView>
                )}
        </View>
        </TouchableWithoutFeedback>
    )
};



