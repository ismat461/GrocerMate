import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  AppRegistry,
} from 'react-native';
import Constants from 'expo-constants';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';
import { Component } from 'react';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function NewList({ navigation }) {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.title}>Create List</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.labelText}>Name:</Text>
        <NameInput></NameInput>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.labelText}>Location:</Text>
        <LocationInput></LocationInput>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('homescreen')}
          style={styles.orangeButton}>
          <Image
          // /workspaces/GrocerMate/assets/Icons/meat-and-seafood.png
            source={require('./assets/Icons/gold-x.png')}
            style={styles.smallIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('MainList')}
          style={styles.orangeButton}>
          <Image
            source={require('./assets/Icons/gold-check.png')}
            style={styles.smallIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

class NameInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.textInputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter List Name"
          onChangeText={(text) => this.setState({ text })}
        />
      </View>
    );
  }
}

class LocationInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.textInputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Store Name"
          onChangeText={(text) => this.setState({ text })}
        />
      </View>
    );
  }
}


/*
blue: #374B4A
dark green: #285238
light green: #B4CC9B
white-cream: #F5F5DC
orange: #F8D677
pink-salmon: #F1785D
*/
const styles = StyleSheet.create({
  textInputBox: {
    height: deviceHeight/10,
    width: deviceWidth - 15,
    backgroundColor: '#F5F5DC',
    fontSize: 20,
    borderRadius: 30,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat_400Regular',

  },
  textInput: {
    opacity: 0.5,
    fontSize: 30,
    width: deviceWidth - 15,
    fontFamily: 'Montserrat_400Regular',
    paddingLeft:10,
    textAlign: 'center'

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#B4CC9B',
    padding: 8,
  },
  title: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 50,
    color: '#285238',
    textAlign: 'center',
  },
  headContainer: {
    height: deviceHeight / 9,
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: deviceHeight / 12,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#000000',
    position: 'absolute',
    height: deviceHeight / 4,
    width: deviceWidth,
    left: 0,
    right: 0,
    top: deviceHeight / 5,
  },
  imageIcon: {
    height: deviceHeight / 10,
    width: deviceWidth / 5,
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignItems: 'center',
    margin: 10,
  },
  button: {
    width: deviceWidth / 2.5,
    height: deviceHeight / 5.5,

    borderRadius: 30,
    backgroundColor: '#F5F5DC',

    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#F1785D',
  },
  orangeButton: {
    borderRadius: 15,
    backgroundColor: '#F1785D',
    height: 40,
    width: 40,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  smallIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 20,
    color: '#285238',
    alignItems: 'center',
    padding: 5,
    fontFamily: 'Montserrat_400Regular',

  },
});
