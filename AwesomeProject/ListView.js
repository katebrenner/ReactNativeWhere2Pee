import React from 'react';
import { Header, StyleSheet, Text, View, Image, ScrollView, Button, StatusBar} from 'react-native';

class ListView extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log( 'list props' + JSON.stringify(this.props))
  }
  render() {
    return (
      this.props.marker.map(marker => (
        <View key={marker.id} style= {{borderColor: 'black', borderWidth: 0.5}}>
        <View style= {styles.view}>
        <Text style={styles.header} > {marker.name} </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}> {marker.address} </Text>
        <Text style={styles.reviews}>"Cleanest bathroom in NYC! -Kate B."</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rating: <Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} /><Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} /><Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} /><Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} /> <Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} />{"\n"}</Text>
        <Text style={styles.reviews}>"walk in with a purpose and they dont question you -Kate B."</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rating: <Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} /><Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} />{"\n"}</Text>
        <Text style={styles.reviews}>"This bathroom is a little gross, but they have hand sanitizer so just bath in that after and you'll be fine -Kristin D"</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rating: <Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} /><Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} />{"\n"}</Text>
        <Button onPress={this.props.changeView} title='Back to Map'/>
        </View>
        </View>
      )
    )
  )
}
}

const styles = StyleSheet.create({
  image:{
  width: 20,
  height: 20
},
reviews: {
  fontSize: 15,
  fontStyle: 'italic',
  textAlign: 'center'
},
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  view: {
    margin: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default ListView;
