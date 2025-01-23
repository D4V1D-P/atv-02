import{SafeAreaView,Text, StyleSheet, View, ScrollView} from 'react-native';
 
export default function App(){
  return(
  <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Cidades Brasileiras</Text>

    <ScrollView>

<View style={styles.fundoCidades}>
      <Text style={styles.cidades}> Sao Paulo</Text>
      <Text style={styles.pontoTuristicos}>Pontos Turisticos</Text>
      <ScrollView horizontal>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Parque do Ibirapuera</Text>
      </View>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}>Pinacoteca</Text>
      </View>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}>Museu da Lingua Portuguesa</Text>
      </View>
      </ScrollView>
</View>

<View style={styles.fundoCidades}>
      <Text style={styles.cidades}> Salvador </Text>
      <Text style={styles.pontoTuristicos}>Pontos Turisticos</Text>
      <ScrollView horizontal>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Pelourinho </Text>
      </View>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Igreja do Bonfim </Text>
      </View>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Praia da Barra </Text>
      </View>
      </ScrollView>
</View>

<View style={styles.fundoCidades}>
      <Text style={styles.cidades}> Rio de Janeiro </Text>
      <Text style={styles.pontoTuristicos}>Pontos Turisticos</Text>
      <ScrollView horizontal>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Cristo Redentor </Text>
      </View>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Pão de Açúcar </Text>
      </View>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Copacabana e Ipanema </Text>
      </View>
      </ScrollView>
</View>

<View style={styles.fundoCidades}>
      <Text style={styles.cidades}> Foz do Iguaçu </Text>
      <Text style={styles.pontoTuristicos}>Pontos Turisticos</Text>
      <ScrollView horizontal>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Cataratas do Iguaçu </Text>
      </View>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Parque das Aves </Text>
      </View>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Usina de Itaipu </Text>
      </View>
       </ScrollView>
</View>

<View style={styles.fundoCidades}>
      <Text style={styles.cidades}> Florianópolis </Text>
      <Text style={styles.pontoTuristicos}>Pontos Turisticos</Text>
      <ScrollView horizontal>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Praia da Joaquina </Text>
      </View>
       <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Lagoa da Conceição </Text>
      </View>
       <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Centro Histórico </Text>
      </View>
      </ScrollView>
</View>

<View style={styles.fundoCidades}>
      <Text style={styles.cidades}> Bonito </Text>
      <Text style={styles.pontoTuristicos}>Pontos Turisticos</Text>
      <ScrollView horizontal>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Gruta do Lago Azul </Text>
      </View>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Rio da Prata </Text>
      </View>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Abismo Anhumas </Text>
      </View>
      </ScrollView>
</View>

<View style={styles.fundoCidades}>
      <Text style={styles.cidades}> Manaus </Text>
      <Text style={styles.pontoTuristicos}>Pontos Turisticos</Text>
      <ScrollView horizontal>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Teatro Amazonas </Text>
       </View>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Encontro das Águas </Text>
       </View>
      <View style={styles.itensTuristicos}>
      <Text style={styles.itens}> Museu do Seringal </Text>
       </View>
      </ScrollView>
</View>

    </ScrollView>
  </SafeAreaView>
  )
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor: '#52be77',
    padiding: 8,

  },
  paragraph:{
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    margin:24
      
  },
   cidades:{
     fontSize: 35,
     color: '#0000FF'
    },
  fundoCidades:{
    backgroundColor:'#8c835a',
    marginTop: 20,
    borderRadius:25,
    padding:10,
  },
  itens:{
    fontSize:20,
    color:'black'
  },
  pontoTuristicos:{
    fontSize:20,
    color: '#800000'
  },
  itensTuristicos:{
    backgroundColor:'#1790be',
    fontSize:20,
    height:50,
    margin:5,
    padding:11,
    borderRadius:15,


  }
  

 
});