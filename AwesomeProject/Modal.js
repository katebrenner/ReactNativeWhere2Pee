import React from 'react';
import { Header, StyleSheet, Text, View, Image, ScrollView, Button, StatusBar} from 'react-native';
import { Rating } from 'react-native-elements';

class ModalView extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log( 'list props' + JSON.stringify(this.props))
  }

  render() {
    return (
        <ScrollView>
        <View style={styles.view} >
        <Text style={styles.header} > {this.props.info.bathrooms.name} </Text>
        <Button
            onPress={() => this.props.closeModal()}
            title="Back to Map" />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}> {this.props.info.bathrooms.address} </Text>
        <Text style= {{fontSize: 20, fontWeight: 'bold'}}> Hours: </Text>
        <Text style={{fontSize: 20}}>Mon: {this.props.info.bathrooms.hoursMon}</Text>
        <Text style={{fontSize: 20}}>Tue: {this.props.info.bathrooms.HoursTues}</Text>
        <Text style={{fontSize: 20}}>Wed: {this.props.info.bathrooms.hoursWed}</Text>
        <Text style={{fontSize: 20}}>Thu: {this.props.info.bathrooms.hoursThurs}</Text>
        <Text style={{fontSize: 20}}>Fri: {this.props.info.bathrooms.hoursFri}</Text>
        <Text style={{fontSize: 20}}>Sat: {this.props.info.bathrooms.hoursSat}</Text>
        <Text style={{fontSize: 20}}>Sun: {this.props.info.bathrooms.hoursSun}</Text>
        {this.props.info.reviews.map(review => (
          <View key = {review.id} style= {styles.view}>
        <Text style={styles.reviews}>{review.reviews}</Text>
        <Rating
          type="star"
          fractions={1}
          startingValue={review.rating}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
        />
         </View>
      )
      )}
        <Text style={styles.reviews}>"walk in with a purpose and they dont question you -Kate B."</Text>
        <Rating
          type="star"
          fractions={1}
          startingValue={5}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
        />
        <Text style={styles.reviews}>"This bathroom is a little gross, but they have hand sanitizer so just bath in that after and you'll be fine -Kristin D"</Text>
        <Rating
          type="star"
          fractions={1}
          startingValue={2}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
        />
        <Text style={styles.reviews}>"walk in with a purpose and they dont question you -Kate B."</Text>
        <Rating
          type="star"
          fractions={1}
          startingValue={3}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
        />
        <Text style={styles.reviews}>"This bathroom is a little gross, but they have hand sanitizer so just bath in that after and you'll be fine -Kristin D"</Text>
        <Rating
          type="star"
          fractions={1}
          startingValue={4}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
        />
        <Text style={styles.reviews}>"walk in with a purpose and they dont question you -Kate B."</Text>

          <Rating
          type="star"
          fractions={1}
          startingValue={4}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
        />
        </View>
        </ScrollView>
      )
    }
  }

const styles = StyleSheet.create({
  image:{
  width: 20,
  height: 20
},
reviews: {
  fontSize: 15,
  fontStyle: 'italic',
  textAlign: 'center'
},
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  view: {
    margin: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default ModalView;
