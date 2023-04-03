import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput
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
      <TouchableOpacity style={styles.locationBar}>
        <Image
        // /workspaces/GrocerMate/assets/Icons/house-icon-gold.png
          source={require('./assets/Icons/pink-map.png')}
          style={styles.tinyIcon}
        />

        <Text style={styles.paragraph}>Acme</Text>

        <Image
          source={require('./assets/Icons/gold-search.png')}
          style={styles.tinyIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('homescreen')}
        style={styles.homeButton}>
        <Image
          source={require('./assets/Icons/house-icon-gold.png')}
          style={styles.smallIcon}
        />
      </TouchableOpacity>

      <NameInput></NameInput>


      

      <View style={styles.buttonContainer}>

        <Text style={styles.labelText}>Your list is currently empty!</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('SearchScreen')}
          style={styles.button}>
          <Text style={styles.buttonText}>Add Items</Text>
          <Image
            source={require('./assets/Icons/gold-add.png')}
            style={styles.smallIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.grandTotalContainer}>
        <Text style={styles.grandText}>
          Grand Total:
        </Text>
        <Text style={styles.grandTextBold}>
          $0.00
        </Text>
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
          placeholder="New List 1"
          onChangeText={(text) => this.setState({ text })}
        />
      <Image
            source={require('./assets/Icons/gold-pencil.png')}
            style={styles.smallIcon}
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
    height: deviceHeight/15,
    width: deviceHeight/2.5,
    //backgroundColor: '#285238',
    backgroundColor: '#F5F5DC',
    fontSize: 20,
    borderRadius: 30,
    //padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat_400Regular',
    //left: 0,
    //right: 0,
    top: -deviceHeight/5,
    flexDirection: 'row',
  },
  textInput: {
    fontSize: 30,
    height: deviceHeight/15,
    width: deviceWidth/1.75,
    textAlign: 'center',
    fontFamily: 'Montserrat_400Regular',
    color: '#374B4A',
    //backgroundColor: '#285238',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B4CC9B',
  },
  paragraph: {
    fontSize: 18,
    color: '#374B4A',
    fontFamily: 'Montserrat_400Regular',
    paddingLeft: 5,
    paddingRight: 15,
  },
  buttonContainer: {
    height: deviceHeight / 2.5,
    left: 0,
    right: 0,
    top: -deviceHeight / 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: deviceWidth / 2,
    height: deviceHeight / 6,

    borderRadius: 30,
    backgroundColor: '#F1785D',

    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 30,
    color: '#F8D677',
    padding: 10,
  },
  labelText: {
    fontSize: 20,
    color: '#F5F5DC',
    marginBottom: 10,
  },
  //deviceHeight: 728.9
  //deviceWidth: 392.72
  smallIcon: {
    height: deviceHeight/19,
    width: deviceWidth/15,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  tinyIcon: {
    height: deviceHeight/20,
    width: deviceWidth/20,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  homeButton: {
    borderRadius: 15,
    backgroundColor: '#F1785D',
    height: deviceHeight/15,
    width: deviceWidth/6.5,
    //top: -deviceHeight/10,
    //height: 40,
    //width: 40,
   
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    right: -deviceWidth/2.5,
    top: -deviceHeight/4.5,
  },
  locationBar: {
    height: deviceHeight/25,
    width: deviceWidth/3,
    backgroundColor: '#F5F5DC',
    borderRadius: 30,
    left: -deviceWidth/3.5,
    top: -deviceHeight/6.5,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    justifyContent: 'center',
  },
  grandTotalContainer: {
    height: deviceHeight/15,
    width: deviceHeight/3,
    //backgroundColor: '#285238',
    backgroundColor: '#F5F5DC',
    fontSize: 20,
    borderRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    top: deviceHeight/10,
    flexDirection: 'row',
    padding:5,
  },
  grandText: {
    fontSize: 18,

    textAlign: 'center',
    fontFamily: 'Montserrat_400Regular',
    color: '#374B4A',
    //backgroundColor: '#285238',
  },
  grandTextBold: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold',
    color: '#374B4A',
    //backgroundColor: '#285238',
  },
});
