import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';


const Header = (props) =>{
  const {title} = props;
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

Header.defaultProps = {
    title:'Shopping List'
}

const styles = StyleSheet.create({
  container:{
    height:60,
    padding:15,
    backgroundColor:'#708090'
  },
  text:{
      color:'#ffff',
      textAlign:'center',
      fontSize:24
  }
})

export default Header;