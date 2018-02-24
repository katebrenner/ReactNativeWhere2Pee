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
        <View style= {styles.view}>
        <Text style={styles.header} > {this.props.info.name} </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}> {this.props.info.address} </Text>
        <Text style= {{fontSize: 20, fontWeight: 'bold'}}> Hours: </Text>
        <Text style={{fontSize: 20}}>Mon: {this.props.info.hoursMon}</Text>
        <Text style={{fontSize: 20}}>Tue: {this.props.info.HoursTues}</Text>
        <Text style={{fontSize: 20}}>Wed: {this.props.info.hoursWed}</Text>
        <Text style={{fontSize: 20}}>Thu: {this.props.info.hoursThurs}</Text>
        <Text style={{fontSize: 20}}>Fri: {this.props.info.hoursFri}</Text>
        <Text style={{fontSize: 20}}>Sat: {this.props.info.hoursSat}</Text>
        <Text style={{fontSize: 20}}>Sun: {this.props.info.hoursSun}</Text>
        <Text style={styles.reviews}>"Cleanest bathroom in NYC! -Kate B."</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rating: <Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} /><Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} /><Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} /><Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} /> <Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} />{"\n"}</Text>
        <Text style={styles.reviews}>"walk in with a purpose and they dont question you -Kate B."</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rating: <Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} /><Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} />{"\n"}</Text>
        <Text style={styles.reviews}>"This bathroom is a little gross, but they have hand sanitizer so just bath in that after and you'll be fine -Kristin D"</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rating: <Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} /><Image source={require('./ASSETS/Star_Emoji.png')} style={styles.image} />{"\n"}</Text>
        <Button
            onPress={() => this.props.closeModal()}
            title="Back to Map"
        />
        </View>
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
