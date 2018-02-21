import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
// import MapView from 'react-native-maps';
import { MapView, Marker, Callout}  from 'expo';
import axios from 'axios';

export default class App extends React.Component {
  constructor () {
    super()
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
    url: 'http://173.3.1.207:3000/api/bathrooms'
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
        style={{ flex: 2 }}
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

      </MapView>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  }

});


// <MapView.Marker coordinate= {this.state.marker.first} >
// <Image source={{uri:'https://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png?v=1480481059'}} style={{ width: 40, height: 40 }} />
// <MapView.Callout tooltip= {false} style= {{width: 100,  borderRadius: 10 }}>
// <Text style={{fontWeight: 'bold'}}> Name: </Text>
// <Text>{this.state.marker.first.Name}</Text>
// <Text> Address: {this.state.marker.first.Address}</Text>
// </MapView.Callout >
// </MapView.Marker>
// <MapView.Marker coordinate= {this.state.marker.second} >
// <Image source={{uri:'https://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png?v=1480481059'}} style={{ width: 40, height: 40 }} />
// <MapView.Callout tooltip= {false} style= {{width: 100,  borderRadius: 10 }}>
// <Text style={{fontWeight: 'bold'}}> Name: </Text>
// <Text>{this.state.marker.second.Name}</Text>
// <Text> Address: {this.state.marker.second.Address}</Text>
// </MapView.Callout >
// </MapView.Marker>
