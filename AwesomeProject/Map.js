import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, StatusBar} from 'react-native';
import { MapView, Marker, Callout }  from 'expo';
import { StackNavigator, DrawerNavigator, SafeAreaView } from 'react-navigation';
import axios from 'axios';


export default class MapClass extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      region: {
          latitude: 40.78,
          longitude: -73.97,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        marker: [],
        loading: true
    }
    this.onRegionChange = this.onRegionChange.bind(this)
  }
  onRegionChange(region) {
    this.setState({ region });
    console.log(region)
  }
  componentDidMount(){
    console.log('mounted')
  axios({
    method: 'GET',
      //school
//  url: 'http://173.3.1.207:3000/api/bathrooms'
//home
   url: 'http://192.168.0.6:3000/api/bathrooms'
  })
    .then( (response) => {
      this.setState ({
        marker: response.data,
        loading: false
    })
  })
      .catch(function(err){
        console.log(err)
      })
  }
  //on componentDidMount, set the state to the array of locations for marker
  //start it as blanck array
  render() {
    console.log('inside render')
    return (
      this.state.contentLoaded ?
      <Text>Loading</Text>:

        <MapView
        style={styles.map}
        initialRegion={this.state.region}
        onRegionChange={this.onRegionChange}
      >

        {this.state.marker.map(marker => (
          <MapView.Marker
            coordinate={marker}
            title={marker.address}
            key= {marker.id}
            onPress={e => console.log('onpress', e.nativeEvent)}
          >
          <Image source={{uri:'https://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png?v=1480481059'}} style={{ width: 40, height: 40 }} />
          <MapView.Callout tooltip= {false} style= {{width: 120,  borderRadius: 10 }}>
          <Text style={{fontWeight: 'bold'}}> Name: </Text>
          <Text>{marker.name}</Text>
          <Text> Address: {marker.address}</Text>
          <Text style={{fontWeight: 'bold'}}> Hours: </Text>
          <Text>M:{marker.hoursMon}</Text>
          <Text>T:{marker.HoursTues}</Text>
          <Text>W:{marker.hoursWed}</Text>
          <Text>Th:{marker.hoursThurs}</Text>
          <Text>F:{marker.hoursFri}</Text>
          <Text>S:{marker.hoursSat}</Text>
          <Text>S:{marker.hoursSun}</Text>
          </MapView.Callout >
          </MapView.Marker>


        ))}

<Text style={{position: 'absolute', left: 20, top: 100}}> HI </Text>
            </MapView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
