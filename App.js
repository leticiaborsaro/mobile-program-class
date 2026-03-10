import React, {Component} from "react" ;
import {View, Text, TextInput, Image, Button, StyleSheet} from 'react-native'; 
//import {useFonts} from "@expo-google-fonts/inter/userFonts";

const Card = ({title, description}) => {
  return(
    <View style={styles.card}>
      <Text style={styles.title}> {title}</Text>
      <Text style={styles.description}> {description} </Text>
    </View>
  );
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: "",
      input:''
    };
    this.entradaNome= this.entradaNome.bind(this);
  }
    entradaNome(texto) {
    if(texto.length > 0) {
      this.setState({nome: 'seja bem vindo a aplicação:' + texto});
    } else {
      this.setState({nome: ''});
    }
    }

  render () {
    return(
      <View style={styles.container}> 
        <TextInput
        style = {styles.input}
        placeholder="Digite o seu nome: "
        underlineColorAndroid="transparent"
        onChangeText={this.entradaNome}        
        />

        <Text style={styles.texto}> {this.state.nome}</Text>
        
        <Text style={{color:'#4B0082', fontSize:25, margin: 10}}>Aplicação Inicial</Text>
        <Text>Primeiro Projeto - Padrão</Text>
        <Button title="entrar"onPress={() => this.entrar('Seja bem vindo a aplicação')}/>
        <Text style={{fontSize:12,color:'green', textAlign:'center'}}></Text>
        <Image
        source={{uri:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgLDCbDVccC4UCsMqxfs8mjN2gSp0NYDYJyX_U1awTi8uJRqicl-zml0EC_15iAQlxP0RIkIr66nd5XJ7vnvX_euXrQnukpC5iYPLzqgKRRraHFgw1AYfZhqtoi01Ar9VFqDszDQGzX3oN/s1600/003+Two+Kittens+(2)-705492.jpg'}}
        style={{width:300, height:300}}
        />

        <Card title='Título' description='Este é um exemplo de card'/>

        <Jobs
          largura={200} altura={300}
        />
      </View>
    );
}
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#C8A2C8',
  },

  title: {
    fontSize: 16,
    margin: 8,
  },
  description: {
    fontSize: 11, 
    color: 'green',
  },
  Card:{
    width: 300,
    height: 200,
    padding: 20,
    borderRadius: 10, 
  },
  input: {
    borderWidth: 1,
    borderColor: 'purple',
    margin: 12,
    fontSize: 20,
    padding: 10
  },
  texto: {
    fontSize: 18,
    textAlign: 'center'
  },
});

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