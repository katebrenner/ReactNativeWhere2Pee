import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, StatusBar} from 'react-native';
import { MapView, Marker, Callout }  from 'expo';
import { StackNavigator, DrawerNavigator, SafeAreaView } from 'react-navigation';
import axios from 'axios';


export default class MapClass extends React.Component {
  constructor () {
    super()
}
  //on componentDidMount, set the state to the array of locations for marker
  //start it as blanck array
  render() {
    console.log('inside render')
    return (
        <MapView
        style={styles.map}
        initialRegion={this.props.region}
        onRegionChange={this.props.onRegionChange}
      >

        {this.props.marker.map(marker => (
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
        <Text>WHERE 2 PEE NYC</Text>

<Button style={{position: 'absolute', left: 20, top: 100}} title="List View" onPress={()=> alert('test')}> </Button>
            </MapView>

    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
