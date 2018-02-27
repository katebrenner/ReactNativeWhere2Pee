import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import axios from 'axios';
import MapClass from './Map';
import ModalView from './Modal';
import NavigationBar from 'react-native-navbar';


export default class MyComponent extends Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false,
      region: {
        latitude: 40.75,
        longitude: -73.98,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      loading: true,
      viewAll: [],
      viewOne: null
    }
    this.openModal= this.openModal.bind(this)
    this.closeModal= this.closeModal.bind(this)
    this.onRegionChange= this.onRegionChange.bind(this)
  }

  openModal(id) {
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
           modalVisible:true
         })
  })
}
  closeModal() {
    this.setState({modalVisible:false});
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

  render() {
    console.log(this.state.region)
    return (
      this.state.loading ? <Text style={{fontSize: 50, textAlign: 'center'}}>Loading</Text> :
        <View style={styles.container}>
          <Modal
              transparent= {true}
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}>
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <ModalView info={this.state.viewOne} closeModal={this.closeModal} />
              </View>
            </View>
          </Modal>
          <Text style={{fontFamily: 'Avenir',fontWeight: 'bold', position: 'absolute', top: 30, zIndex: 6, fontSize: 30}}> <Image source={require('./ASSETS/toilet_emoji_left.png')} style={{ width: 30, height: 30 }} />
          WHERE 2 PEE NYC<Image source={require('./ASSETS/toilet_emoji_right.png')} style={{ width: 30, height: 30}} />
          </Text>
          <MapClass openModal={this.openModal} style={styles.map} marker={this.state.viewAll} region={this.state.region} onRegionChange={this.onRegionChange} viewOne={this.viewOne} onMarkerPress={this.onMarkerPress} onRegionChange={this.onRegionChange}/>
        </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
