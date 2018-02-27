# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.



### Personal Final Project

|  Day | Deliverable |
|---|---|
|Day 1: Friday 2/16 | Wireframes, Priority Matrix, Schedule, Time Estimates |
|Day 2: Sunday 2/18 | Reading React Native Docs, React Native Maps Docs |
|Day 3: Tuesday 2/20 | Create the ReadMe (a little late- whoops) Start using Firebase|
|Day 4: Wednesday 2/21 | Collect info for database |
|Day 5: Thursday 2/22 | finalize database and firebase |
|Day 6: Friday 2/23 | finish all components |
|Day 7: Mon 2/26 | Working Prototype with full commit to master |
|Day 8: Tue 2/27 | Final edits |
|Day 9: Wed 2/28 | Project Presentations |

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Wireframes

Include links to the images of your wireframes.

![](https://i.imgur.com/YUcYGjH.jpg)

## Priority Matrix

Include a link to your full the `Time\Priority` Matix.  


![](https://i.imgur.com/8u3xSHn.jpg)
## MVP

Include a bulleted list of the features that will be part of your MVP

* Use react native maps to render a map on the screen
* Create a backend that includes a database of all bathrooms
* Render all bathroom locations as both markers on the map
* also have a list component so the user can switch between map view or list view

## POST MVP

Include a bulleted list of the features that will be part of POST MVP

* Make app compatible for laptop as well- not sure how
* Contact form for user to submit suggestions
* launch to app store


## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusability.  Once a function has been defined it can then be incorporated into a class as a method.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evaluate game possibilities based on time needed and the actual time you have before game must be submitted.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Render Map | H | 10hrs| 8hrs | 8hrs |
| Set Up Backend | H | 10hrs| 10hrs | 10hrs |
| Create Bathrooms DB | H | 12hrs| 4hrs | 4hrs |
| Render Markers | H | 5hrs| 5hrs | 5hrs |
| Figuring out proper state | H | 5hrs| 8hrs | 8hrs |
| Components | H | 10hrs| 12hrs | 12hrs |
| Render responsive List View | H | 10hrs| 10hrs | 10hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description |
| --- | :---: |  
| .map | maping through data to create an array|

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project.
 * react is a javascript library
 * react-native was built off of react and uses the same design as react, but is used for mobile development
 * react-native-maps is a react native module used to render the map and markers
 * react-native-elements is a front end library that was used for the email button and rating stars
 * axios is used to make HTTP request and render JSON data

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

The below code is the main component of the app.  The first part defines a function that is called later in the component to alter the font size of the header based on the size of the screen.  After testing the app on a smaller screen, the text began to wrap around the screen, which was not the intended effect.  The main component is right below it, and displays all the stat and all the functions that alter state and are passed down as props.


```const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

export function changesize() {
return  SCREEN_WIDTH / 12
}

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
          <Text style={{fontFamily: 'Avenir',fontWeight: 'bold', position: 'absolute', top: 30, zIndex: 6, fontSize: changesize()}}> <Image source={require('./ASSETS/toilet_emoji_left.png')} style={{ width: 30, height: 30 }} />
          WHERE 2 PEE NYC<Image source={require('./ASSETS/toilet_emoji_right.png')} style={{ width: 30, height: 30}} />
          </Text>
          <MapClass openModal={this.openModal} style={styles.map} marker={this.state.viewAll} region={this.state.region} onRegionChange={this.onRegionChange} viewOne={this.viewOne} onMarkerPress={this.onMarkerPress} onRegionChange={this.onRegionChange}/>
        </View>
    );
  }
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
* after getting frustrated with firebase, I set up a rails server, will go back and try to use firebase, but was concerned about timing.
* spent hours trying to import maps form google maps, after hours, finally realized I could import from expo, and have the map be the apple map, not google maps
* running on expo instead of running on xcode.  I found expo to be much more straight forward and less confusing
* instead of list view, I opted for a modal that renders additional information specifically about that location, instead of all locations.  This is a better experience for the user as it does not take the user out of the flow.

## Issues and Resolutions
Use this section to list of all major issues encountered and their resolution.
Lots of new errors with react native and expo
**Element type not valid** This error occurs when the component is not recognized.  Component needs to be imported either from another file, or from react-native.  All react native componenets need to be imported
**Undefined is not an object** This error occured when trying to access certain elements of state that were objects. When receiving undefined, it means that the desired object is not being accessed properly.
**Can't find variable** CSS properties such as 'center' or 'black' must be in quotes
**Could not connect to development server** this error occurs when react server isn't running (need to be running both rails backend server and react server)
**Rails Error** When linking a second table, and linking it to the bathrooms table, the column had to be called "bathroom_id", and it had acciddentally been called "locations_id"


#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
