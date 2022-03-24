import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState(0);
  const [melhor, setMelhor] = useState();


  function calcular(){
    setResultado(parseFloat(valor1) / parseFloat(valor2));

    if(resultado <= 0.70){
      setMelhor("recomendo você abastecer com álcool");
    }
    else{
      setMelhor("recomendo você abastecer com gasolina");
    }
  }

 


 

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Boa Noite!</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxngjQKJEcUzaHNNcuGvA6FDNfOOuxV3J1A&usqp=CAU',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor do Álcool Litro</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor da gasolina Litro</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={calcular}
        >
            <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>
      </View>
     

      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Resultado: {resultado} {melhor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBloco:{
    fontSize:20,
  },
  texto:{
    color:'#000',
    fontSize:30
  },
  input:{
    borderColor:'#000',
    borderWidth:2,
    fontSize:30,
    width:'70%'
  },
  bloco:{
    width:'80%',
    alignItems:'center',
    borderRadius: 30,
    marginTop:20
    
  },
  botao:{
    backgroundColor:'#c3d',
    width:'40%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:25
  }, 
  logo:{
    width:50,
    height:50
  }
  
});