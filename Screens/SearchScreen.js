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
      <View style={styles.pinkButtonContainer}>
        <TouchableOpacity 
        style={styles.pinkButton} onPress={() => navigation.navigate('MainList')}>
          <Image
            source={require('/workspaces/GrocerMate/assets/Icons/gold-back-sign.png')}
            style={styles.largeIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.pinkButton} onPress={() => navigation.navigate('homescreen')}
        >
          <Image
          // /workspaces/GrocerMate/assets/Icons/house-icon-gold.png
            source={require('/workspaces/GrocerMate/assets/Icons/house-icon-gold.png')}
            style={styles.largeIcon}
          />
        </TouchableOpacity>
      </View>






      

    



      <TouchableOpacity
        onPress={() => navigation.navigate('homescreen')}
        style={styles.homeButton}>
        <Image
          source={require('/workspaces/GrocerMate/assets/Icons/house-icon-gold.png')}
          style={styles.smallIcon}
        />
      </TouchableOpacity>

      <NameInput></NameInput>


      

      <View style={styles.buttonContainer}>

        <Text style={styles.labelText}>SEARCH SCREEN</Text>
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
          placeholder="Search Products"
          onChangeText={(text) => this.setState({ text })}
        />
      <Image
            source={require('/workspaces/GrocerMate/assets/Icons/gold-pencil.png')}
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
  pinkButtonContainer: {
    height: deviceHeight/15,
    width: deviceWidth/.5,
    //justifyContent: 'space-between',
    backgroundColor: '#285238',
    justifyContent: 'space-evenly',
    alignItems:'center',
    top: -deviceHeight/6,
    flexDirection: 'row'   
  },
  pinkButton: {
    borderRadius: 15,
    backgroundColor: '#F1785D',
    height: deviceHeight/15,
    width: deviceWidth/8,
     
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //right: -deviceWidth/2.5,
    //top: -deviceHeight/4.5,
  },
  //deviceHeight: 728.9
  //deviceWidth: 392.72
  largeIcon: {
    height: deviceHeight/19,
    width: deviceWidth/15,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  smallIcon: {
    height: deviceHeight/20,
    width: deviceWidth/20,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  textInputBox: {
    height: deviceHeight/15,
    width: deviceHeight/2.5,
    //backgroundColor: '#285238',
    backgroundColor: '#F5F5DC',
    fontSize: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat_400Regular',

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

  
  
});
