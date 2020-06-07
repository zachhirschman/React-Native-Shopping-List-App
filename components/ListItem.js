import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Delete from '../assets/delete.png';


const ListItem = ({item,deleteItem}) =>{

  return(
    <TouchableOpacity style={styles.listItem} onPress={()=> deleteItem(item.id)}>
      <View style={styles.listItemView}>
          <Text style={styles.listItemText}>
            {item.text}
          </Text>
          <Image source = {Delete}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem:{
      padding:15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth:1,
      borderColor:'#eee',
  },
  listItemView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  },
  listItemText:{
      fontSize:18
  }
})

export default ListItem;