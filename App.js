import React, {Component} from "react" ;
import {View, Text, Image, Button} from 'react-native'; 
//import {useFonts} from "@expo-google-fonts/inter/userFonts";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: ""
    };
    this.entrar = this.entrar.bind(this);
  }
    entrar(nome) {
      this.setState({
        nome: nome
      })
    }

  render () {
    return(
      <View> 
        <Text style={{color:'#4B0082', fontSize:25, margin: 10}}>Aplicação Inicial</Text>
        <Text>Primeiro Projeto - Padrão</Text>
        <Button title="entrar"onPress={() => this.entrar('Seja bem vindo a aplicação')}/>
        <Text style={{fontSize:12,color:'green', textAlign:'center'}}></Text>
        <Image
        source={{uri:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgLDCbDVccC4UCsMqxfs8mjN2gSp0NYDYJyX_U1awTi8uJRqicl-zml0EC_15iAQlxP0RIkIr66nd5XJ7vnvX_euXrQnukpC5iYPLzqgKRRraHFgw1AYfZhqtoi01Ar9VFqDszDQGzX3oN/s1600/003+Two+Kittens+(2)-705492.jpg'}}
        style={{width:300, height:300}}
        />

        <Jobs
          largura={200} altura={300}
        />
      </View>
    );
  }
}
export default App;

class Jobs extends Component {
  
  render() {
  let img = 'https://i.guim.co.uk/img/media/43352be36da0eb156e8551d775a57fadba8ae6d7/0_0_1440_864/master/1440.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=184376f73721b565014f1d24e5bf645c';
    return(
      <View>
        <Image
          source={{uri: img}}
          style={{width:this.props.largura, height:this.props.altura}}
        />
        <Text style={{textAlign: 'center'}}>Imagem da Natureza</Text>
      </View>
    );
  }
}