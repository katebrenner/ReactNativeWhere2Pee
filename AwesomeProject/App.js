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
        marker: [],
        loading: true,
        mapView: true,
        viewOne: []
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
    // url: `http://173.3.1.207:3000/api/bathrooms/${id}`
  //home
     url: `http://192.168.0.6:3000/api/bathrooms/${id}`
   }).then((response) => {
     console.log(response.data);
     this.setState({
       viewOne: response.data,
       mapView: false
     })
   })
     .catch(function(err){
       console.log(err)
     })

  }
  back() {
    this.setState({
      mapView: true,
      viewOne:false
    })

  }

  componentDidMount(){
    console.log('mounted')
  axios({
    method: 'GET',
      //school
       // url: 'http://173.3.1.207:3000/api/bathrooms'

  //home
   url: 'http://192.168.0.6:3000/api/bathrooms'
  })
    .then( (response) => {
      this.setState ({
        marker: response.data,
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
      else if (!this.state.loading && this.state.mapView) {
        return(
         <View style={styles.container} >
         <Text style={{fontFamily: 'Avenir', position: 'absolute', top: 30, zIndex: 6, fontSize: 30}}> <Image source={require('./ASSETS/toilet_emoji_left.png')} style={{ width: 30, height: 30 }} />
         WHERE 2 PEE NYC<Image source={require('./ASSETS/toilet_emoji_right.png')} style={{ width: 30, height: 30}} />
         </Text>
         <Text style={{position: 'absolute', top: 70, zIndex: 5, borderColor: 'black', borderWidth: 0.5, borderRadius: 5}} onPress={this.changeView}> List View </Text>
         <MapClass style={styles.map} marker={this.state.marker} region={this.state.region} onRegionChange={this.onRegionChange} viewOne={this.viewOne} />
         </View>
       )
     }else {
       return(
         <ScrollView>
         <ListView info={this.state.viewOne} />
         </ScrollView>
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
// export default class MapClass extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       region: {
//           latitude: 40.78,
//           longitude: -73.97,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         },
//         marker: [],
//         loading: true
//     }
//     this.onRegionChange = this.onRegionChange.bind(this)
//   }
//   onRegionChange(region) {
//     this.setState({ region });
//     console.log(region)
//   }
//   componentDidMount(){
//     console.log('mounted')
//   axios({
//     method: 'GET',
//       //school
// //  url: 'http://173.3.1.207:3000/api/bathrooms'
// //home
//    url: 'http://192.168.0.6:3000/api/bathrooms'
//   })
//     .then( (response) => {
//       this.setState ({
//         marker: response.data,
//         loading: false
//     })
//   })
//       .catch(function(err){
//         console.log(err)
//       })
//   }
//   //on componentDidMount, set the state to the array of locations for marker
//   //start it as blanck array
//   render() {
//     console.log('inside render')
//     return (
//       this.state.contentLoaded ?
//       <Text>Loading</Text>:
//
//         <MapView
//         style={styles.map}
//         initialRegion={this.state.region}
//         onRegionChange={this.onRegionChange}
//       >
//
//         {this.state.marker.map(marker => (
//           <MapView.Marker
//             coordinate={marker}
//             title={marker.address}
//             key= {marker.id}
//             onPress={e => console.log('onpress', e.nativeEvent)}
//           >
//           <Image source={{uri:'https://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png?v=1480481059'}} style={{ width: 40, height: 40 }} />
//           <MapView.Callout tooltip= {false} style= {{width: 120,  borderRadius: 10 }}>
//           <Text style={{fontWeight: 'bold'}}> Name: </Text>
//           <Text>{marker.name}</Text>
//           <Text> Address: {marker.address}</Text>
//           <Text style={{fontWeight: 'bold'}}> Hours: </Text>
//           <Text>M:{marker.hoursMon}</Text>
//           <Text>T:{marker.HoursTues}</Text>
//           <Text>W:{marker.hoursWed}</Text>
//           <Text>Th:{marker.hoursThurs}</Text>
//           <Text>F:{marker.hoursFri}</Text>
//           <Text>S:{marker.hoursSat}</Text>
//           <Text>S:{marker.hoursSun}</Text>
//           </MapView.Callout >
//           </MapView.Marker>
//
//
//         ))}
//
// <Text style={{position: 'absolute', left: 20, top: 100}}> HI </Text>
//             </MapView>
//
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });
