import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, StatusBar} from 'react-native';
import { MapView, Marker, Callout }  from 'expo';
import axios from 'axios';
import email from 'react-native-email';
import { Icon } from 'react-native-elements';

export default class MapClass extends React.Component {
  constructor () {
    super()
  }
  //handle email method opens up user's email on their device. cc and bcc not currently being utilized
  handleEmail = () => {
      const to = ['kbrenner101@gmail.com'] // string or array of email addresses
      email(to, {
          // Optional additional arguments
          // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
          // bcc: 'mee@mee.com', // string or array of email addresses
          subject: 'WHERE 2 PEE Feeedback',
          body: 'Thank you for your email!  Please provide your feedback in quotes, and how many stars (out of 5) that you would rank this restroom.  Please also indicate if you would prefer your comment to be anonymous.  Your feedback is greatly appreciated. '
      }).catch(console.error)
  }
  //render method
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
              <MapView.Callout style={styles.callout}tooltip= {false} >
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
       <Icon
  raised
  name='mail-outline'
  type='material-design'
  color='black'
  containerStyle={{position: 'absolute', left: '75%', top: '85%'}}
  onPress={this.handleEmail}  />
      </MapView>
    );
  }
}

//stylesheet for this component
const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  callout: {
    zIndex: 4,
    width: 150,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center'
  }
});
