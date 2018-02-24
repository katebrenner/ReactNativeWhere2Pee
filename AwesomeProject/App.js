import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import axios from 'axios';
import MapClass from './Map';
import ListView from './ListView';

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
    return (
        <View style={styles.container}>
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                            <ListView info={this.state.viewOne} closeModal={this.closeModal} />
              </View>
            </View>
          </Modal>
          <Text style={{fontFamily: 'Avenir', position: 'absolute', top: 30, zIndex: 6, fontSize: 30}}> <Image source={require('./ASSETS/toilet_emoji_left.png')} style={{ width: 30, height: 30 }} />
            WHERE 2 PEE NYC<Image source={require('./ASSETS/toilet_emoji_right.png')} style={{ width: 30, height: 30}} />
                  </Text>
          <MapClass openModal={this.openModal} style={styles.map} marker={this.state.viewAll} region={this.state.region} onRegionChange={this.onRegionChange} viewOne={this.viewOne} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9bbff4',
    alignItems: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
