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
<View>
<View style= {styles.view}>
  <Text style={styles.header}> {marker.name} </Text>
  <Text> {marker.address} </Text>
  <Text> {marker.hoursMon} </Text>
  <Text> {marker.HoursTues} </Text>
  <Text> {marker.hoursWed} </Text>
  <Text> {marker.hoursThurs} </Text>

  </View>
  <Button onPress={this.props.changeView} title='Back to Map'/>
</View>

   )
  )
)


}
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold'
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default ListView;
