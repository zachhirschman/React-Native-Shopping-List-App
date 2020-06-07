import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Button, TextInput} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';


const App = () =>{
  let [items, setItems] = useState([
    {id:1,text:'Milk'},
    {id:2,text:'Eggs'},
    {id:3,text:'Bread'},
    {id:4,text:'Juice'},
  ]);

  let [showForm,setShowForm] = useState(false);
  let [newProduct,setNewProduct] = useState('');
  let [lastID, setLastID] = useState(5);

  const deleteItem = (id) =>{
    setItems(prevItems =>{
      return prevItems.filter((item) =>item.id !== id);
    })
  }

  const addItem = ()=>{
    let newItem = {
      id:lastID,
      text:newProduct
    }
    setItems([...items, newItem]);
    let newID = lastID + 1;
    setLastID(newID);
    setShowForm(false)
  }


  return(
    <View style={styles.container}>
      <Header/>
      <FlatList data ={items} renderItem={({item})=>
        <ListItem item={item} deleteItem = {deleteItem} key={item.id}/>
      }/>
      {showForm ? 
        <View style = {styles.newProdForm}>
            <Text style={styles.text}>New Product:</Text>
            <TextInput style={styles.textInput} onChangeText={(text)=> setNewProduct(text)}></TextInput>
            <Button title='Done' onPress={()=> addItem()}></Button>
        </View>
        :
        null
      }
      <Button title='New Product' onPress={()=> setShowForm(true)}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:2
  },
  newProdForm:{
    height:'30%',
    elevation:3
  },
  textInput:{
    padding:15,
    backgroundColor:"#f8f8f8"
  },
  text:{
    color:'#708090',
    textAlign:'center',
    fontSize:24
}
})

export default App;