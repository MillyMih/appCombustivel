import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [valor1 = setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState(0);

  
  function calcular(){
    setResultado(parseFloat(valor1) / parseFloat(valor2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Boa Noite!</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://e7.pngegg.com/pngimages/814/85/png-clipart-computer-icons-calculator-icon-design-calculator-electronics-text.png',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor da Gasolina</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor do Alcool</Text>
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
        <Text style={styles.textoBloco}>Resultado: {resultado}</Text>
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
    width:'80%'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#c3d',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  }, 
  logo:{
    width:50,
    height:50
  }
  
});