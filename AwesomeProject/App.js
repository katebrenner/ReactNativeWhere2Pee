import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, StatusBar} from 'react-native';
// import MapView from 'react-native-maps';
// import { MapView, Marker, Callout }  from 'expo';
import axios from 'axios';
import MapClass from './Map';
import ListView from './ListView';

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      region: {
          latitude: 40.75,
          longitude: -73.98,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        loading: true,
        viewAll: null,
        viewOne: null
    }
    this.onRegionChange = this.onRegionChange.bind(this)
    this.viewOne = this.viewOne.bind(this)
    this.back = this.back.bind(this)
  }
  onRegionChange(region) {
    this.setState({ region });
    console.log(region)
  }
  viewOne(id){
    axios({
      method: 'GET',
        //school
    url: `http://173.3.1.207:3000/api/bathrooms/${id}`
  //home
     // url: `http://192.168.0.6:3000/api/bathrooms/${id}`
   }).then((response) => {
     console.log(response.data);
     this.setState({
       viewOne: response.data,
       viewAll: false
     })
   })
     .catch(function(err){
       console.log(err)
     })

  }
  back() {
    console.log('inside back')
    axios({
      method: 'GET',
        //school
         url: 'http://173.3.1.207:3000/api/bathrooms'

    //home
     // url: 'http://192.168.0.6:3000/api/bathrooms'
    })
      .then( (response) => {
        this.setState ({
          viewAll: response.data,
          loading: false,
      })
    }).catch(function(err){
          console.log(err)
        })
      }

  componentDidMount(){
    console.log('mounted')
  axios({
    method: 'GET',
      //school
       url: 'http://173.3.1.207:3000/api/bathrooms'

  //home
   // url: 'http://192.168.0.6:3000/api/bathrooms'
  })
    .then( (response) => {
      this.setState ({
        viewAll: response.data,
        veiewOne: false,
        loading: false
    })
  }).catch(function(err){
        console.log(err)
      })
    }

  //     navigator.geolocation.getCurrentPosition(
  //      position => {
  //        this.setState({
  //          region: {
  //            latitude: position.coords.latitude,
  //            longitude: position.coords.longitude,
  //            latitudeDelta: 0.0922,
  //            longitudeDelta: 0.0421,
  //          }
  //        });
  //      },
  //    (error) => console.log(error.message),
  //    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  //    );
  //    this.watchID = navigator.geolocation.watchPosition(
  //      position => {
  //        this.setState({
  //          region: {
  //            latitude: position.coords.latitude,
  //            longitude: position.coords.longitude,
  //            latitudeDelta: 0.0922,
  //            longitudeDelta: 0.0421,
  //          }
  //        });
  //      }
  //    );
  // }
render() {
  if (this.state.loading) {
    return(
      <Text style={{fontSize: 100}}> Loading </Text>  )}
      else if (!this.state.loading && !this.state.viewAll) {
        return(
          <ScrollView>
          <ListView info={this.state.viewOne} back={this.back} />
          </ScrollView>
        )

     }else {
       return(
        <View style={styles.container} >
        <Text style={{fontFamily: 'Avenir', position: 'absolute', top: 30, zIndex: 6, fontSize: 30}}> <Image source={require('./ASSETS/toilet_emoji_left.png')} style={{ width: 30, height: 30 }} />
        WHERE 2 PEE NYC<Image source={require('./ASSETS/toilet_emoji_right.png')} style={{ width: 30, height: 30}} />
        </Text>
        <Text style={{position: 'absolute', top: 70, zIndex: 5, borderColor: 'black', borderWidth: 0.5, borderRadius: 5}} onPress={this.changeView}> List View </Text>
        <MapClass style={styles.map} marker={this.state.viewAll} region={this.state.region} onRegionChange={this.onRegionChange} viewOne={this.viewOne} />
        </View>
      )
     }
   }
 }


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9bbff4',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
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

// map.js

// import React from 'react';
// import { StyleSheet, Text, View, Image, ScrollView, Button, StatusBar} from 'react-native';
// import { MapView, Marker, Callout }  from 'expo';
// import { StackNavigator, DrawerNavigator, SafeAreaView } from 'react-navigation';
// import axios from 'axios';
//
//
