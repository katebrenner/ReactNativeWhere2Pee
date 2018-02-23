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
        onRegionChange={this.props.onRegionChange}>

        {this.props.marker.map(marker => (
          <MapView.Marker
            coordinate={marker}
            title={marker.address}
            key= {marker.id}
            onPress={e => console.log('onpress', e.nativeEvent)}
          >
          <Image source={require('./ASSETS/Poop_Emoji.png')} style={{ width: 40, height: 40 }} />
          <MapView.Callout tooltip= {false} style= {{width: 120,  borderRadius: 10 }}>
          <Text style={{fontWeight: 'bold'}}> Name: </Text>
          <Text onPress={() => this.props.viewOne(marker.id)}>{marker.name}</Text>
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
  map: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
  },
});


        // <Text onPress={renderOne(marker.id)}>{marker.name}</Text>
