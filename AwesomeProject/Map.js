import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, StatusBar} from 'react-native';
import { MapView, Marker, Callout }  from 'expo';
import { StackNavigator, DrawerNavigator, SafeAreaView } from 'react-navigation';
import axios from 'axios';


export default class MapClass extends React.Component {
  constructor () {
    super()
  }
  render() {
    console.log('inside render')
    return (
        <MapView
        style={styles.map}
        initialRegion={this.props.region}
        onRegionChange={this.props.onRegionChange}
        followsUserLocation= {true}
        showsUserLocation= {true}>
          {this.props.marker.map(marker => (
            <MapView.Marker
              coordinate={marker}
              title={marker.address}
              key= {marker.id}
              ref={marker.id}
              style={styles.marker}
              // onPress={e => console.log('onpress', e.nativeEvent)}
              >
              <Image source={require('./ASSETS/Poop_Emoji.png')} style={{ width: 40, height: 40 }} />
              <MapView.Callout style={{zIndex: 4}}tooltip= {false} style= {{width: 120,  borderRadius: 10 }} onPress={ (index) => {
    let calloutRef = `callout-${index}`
    let item = this.refs[calloutRef]
    this.setState({ selectedCalloutIndex: index })}
  }>
                <Text style={{fontWeight: 'bold'}}> Name: </Text>
                <Text >{marker.name}</Text>
                <Text style={{fontWeight: 'bold'}}> Address: </Text>
                <Text>{marker.address}</Text>
                <Button onPress={() => this.props.openModal(marker.id)} title="More Info"></Button>
              </MapView.Callout >
            </MapView.Marker>
          )
        )
      }
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
