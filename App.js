import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from 'react-native';


// HOME SCREEN
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <MapView
          style={styles.container}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsMyLocationButton={false}
          zoomEnabled={true}
          initialRegion={{
            latitude: 27.7172,
            longitude: 85.3240,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    );
  }
}

// EVENT SCREEN
class EventScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textInputEventName: "",
      textInputStartPoint: "",
      textInputEndPoint: "",
      isModalVisible: false,
    }
  }
  GetName = () => {

    const { textInputEventName } = this.state;
    const { textInputStartPoint } = this.state;
    Alert.alert(textInputEventName + " " + textInputStartPoint);
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={styles.view}>

        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder="Enter Event Name....."
          onChangeText={textInputEventName => this.setState({ textInputEventName })}
        />
        <View style={styles.showMap}>
          <Icon.Button name="map" backgroundColor="#13B5C7" onPress={this._toggleModal}>
            Map
            </Icon.Button>
        </View>
        <Modal
          style={styles.modal}
          isVisible={this.state.isModalVisible}>
          <View style={styles.hideMap}>
            <Icon.Button name="map" color="#13B5C7" backgroundColor="#00000000">
              Map
            </Icon.Button>

            <Icon.Button name="close" style={styles.textClose} color="#E5003B" backgroundColor="#00000000" onPress={this._toggleModal}>
              Close
            </Icon.Button>
          </View>
          <MapView
            style={styles.container}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            showsMyLocationButton={false}
            zoomEnabled={true}
            initialRegion={{
              latitude: 27.7172,
              longitude: 85.3240,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          </MapView>
        </Modal>

        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder="Enter Start Point....."
          onChangeText={textInputStartPoint => this.setState({ textInputStartPoint })}
        />

        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder="Enter End Point....."
          onChangeText={textInputEndPoint => this.setState({ textInputEndPoint })}
        />


        <Button
          title="Create"
          onPress={this.GetName}
        />

      </View>
    )
  }
}

// SETTING SCREEN
class GroupScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      textInputGroupName: "",
      isModalVisible: false,
    }
  }
  GetName = () => {

    const { textInputGroupName } = this.state;
    Alert.alert(textInputGroupName);
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={styles.view}>

        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder="Enter Group Name....."
          onChangeText={textInputGroupName => this.setState({ textInputGroupName })}
        />
        <View style={styles.button}>
          <Button
            title="Create"
            color="#841584"
            onPress={this.GetName}
          />
        </View>


      </View>
    );
  }
}


export default createMaterialTopTabNavigator({
  Home: { screen: HomeScreen },
  Event: { screen: EventScreen },
  Group: { screen: GroupScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 50,
    borderWidth: 0.8,
    borderRadius: 3,
    margin: 5,
    paddingLeft: 15,
    borderColor: "#3b5998",
  },
  button: {
    //width: 300,
    //alighItems:"center"
  },
  view: {
    flex: 1,
  },
  modal: {
    backgroundColor: "#D3D3D3",
    padding: 5,
  },
  inputWrap: {
    flex: 1,
    width: 50,
  },
  row: {
    flexDirection: "row",
  },
  showMap: {
    marginLeft: 5,
    width: 100,
  },
  hideMap: {
    flexDirection: "row",
  },
  textClose: {
    marginLeft: 160,
  }

});