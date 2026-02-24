import React, {Component} from "react" ;
import {View, Text, Image} from 'react-native'; 
import {useFonts} from "@expo-google-fonts/inter/userFonts";

class App extends Component {
  render () {
    return(
      <View>
        <Text style={{color:'#4B0082', fontSize:25, margin: 10}}>Aplicação Inicial</Text>
        <Text>Primeiro Projeto - Padrão</Text>
        <Image
        source={{uri:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgLDCbDVccC4UCsMqxfs8mjN2gSp0NYDYJyX_U1awTi8uJRqicl-zml0EC_15iAQlxP0RIkIr66nd5XJ7vnvX_euXrQnukpC5iYPLzqgKRRraHFgw1AYfZhqtoi01Ar9VFqDszDQGzX3oN/s1600/003+Two+Kittens+(2)-705492.jpg'}}
        style={{width:300, height:300}}
        />
      </View>
    );
  }
}
export default App;