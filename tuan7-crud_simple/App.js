import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  FlatList,
  View,
} from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ToDo = ({ title, content }) => {
  return (
    <View style={styles.itemToDo}>
      <Text style={styles.titleToDo}>{title}</Text>
      <Text style={styles.contentToDo}>{content}</Text>
    </View>
  );
};

const Display = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return <ToDo title={item.title} content={item.content} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

var toDosNew = {
  id: 20,
  title: 'New',
  content: 'New',
};

var updateTodo = {
  id: 6,
  title: 'Programing',
  content: 'React Native',
};

const add = async () => {
  try {
    const res = await axios.post(
      'https://66fc8f65c3a184a84d174ff9.mockapi.io/todos',
      toDosNew
    );
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};

const del = async () => {
  try {
    const res = await axios.delete(
      'https://66fc8f65c3a184a84d174ff9.mockapi.io/todos/' + 5
    );
  } catch (error) {
    console.log(error);
  }
};

const edit = async () => {
  try {
    const res = await axios.put(
      'https://66fc8f65c3a184a84d174ff9.mockapi.io/todos/' + 6, updateTodo
    );
  } catch (error) {
    console.log(error);
  }
};

export default function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://66fc8f65c3a184a84d174ff9.mockapi.io/todos'
        );
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Add" onPress={add} />
          <Button title="Edit" onPress={edit}/>
          <Button title="Delete" onPress={del}/>
        </View>
        <View style={{ flex: 1 }}>
          <Display data={Data} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  itemToDo: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 3,
  },
  titleToDo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
