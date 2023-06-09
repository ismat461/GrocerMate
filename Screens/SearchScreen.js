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

export default function SearchScreen({ navigation }) {
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

      
        <NameInput></NameInput>
        <View style={styles.smallIcon}>
        <TouchableOpacity onPress={() => navigation.navigate("AppleSearch")} style={styles.smallIcon}
          activeOpacity={0.5}
          >
            <Image
                  source={require('/workspaces/GrocerMate/assets/Icons/gold-search.png')}
                  style={styles.smallIcon}
            />
        </TouchableOpacity>
      </View>
      


      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Search By Category
        </Text>
      </View>

      

      <View style={styles.buttonContainer}>
        <View style={styles.columnContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("CreateNewList")} style={styles.button} 
          activeOpacity={0.5}>
            <Image source={require('/workspaces/GrocerMate/assets/Icons/fruits-and-vegetables.png')}
                  style={styles.image}
            />
                <Text style={styles.buttonText}>Fruits & Vegetables</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CreateNewList")} style={styles.button} 
          activeOpacity={0.5}>
            <Image source={require('/workspaces/GrocerMate/assets/Icons/paper-goods.png')}
                  style={styles.image}
            />
                <Text style={styles.buttonText}>Paper Goods</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CreateNewList")} style={styles.button} 
          activeOpacity={0.5}>
            <Image source={require('/workspaces/GrocerMate/assets/Icons/chips.png')}
                  style={styles.image}
            />
                <Text style={styles.buttonText}>Snacks & Candy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("CreateNewList")} style={styles.button} 
          activeOpacity={0.5}>
            <Image source={require('/workspaces/GrocerMate/assets/Icons/meat-and-seafood.png')}
                  style={styles.image}
            />
                <Text style={styles.buttonText}>Meat & Seafood</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CreateNewList")} style={styles.button} 
          activeOpacity={0.5}>
            <Image source={require('/workspaces/GrocerMate/assets/Icons/milk-and-cheese.png')}
                  style={styles.image}
            />
                <Text style={styles.buttonText}>Dairy & Eggs</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CreateNewList")} style={styles.button} 
          activeOpacity={0.5}>
            <Image source={require('/workspaces/GrocerMate/assets/Icons/bread-and-bakery.png')}
                  style={styles.image}
            />
                <Text style={styles.buttonText}>Bread & Bakery</Text>
          </TouchableOpacity>
        </View>
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
    //backgroundColor: '#285238',
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
  },
  smallIcon: {
    height: deviceHeight/20,
    width: deviceWidth/20,
    resizeMode: 'contain',
    top: -deviceHeight/16.5,
    right: -deviceWidth/10,
  },
  image: {
    height: deviceHeight/6,
    width:deviceWidth/3,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -deviceHeight/9,
    //backgroundColor: '#285238',
  },
  titleText: {
    fontSize: 24,
    fontFamily: "Montserrat_400Regular"
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

    top: -deviceHeight/8,
    flexDirection: 'row',
  },
  textInput: {
    fontSize: 25,
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
    height: deviceHeight/2,
    width: deviceWidth,
    top: -deviceHeight / 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //alignItems: 'center',
    //backgroundColor: '#285238',
  },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    //top: deviceHeight/20,
    //height: deviceHeight/2,
    width: deviceWidth/2.5,
    //backgroundColor: "#F8D677",
  },
  button: {
    width:deviceWidth / 2.5,
    height: deviceHeight / 4.5,
     
    borderRadius: 30,
    backgroundColor: '#F5F5DC',
      
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },

  buttonText: {
    fontSize: 15,
    fontFamily: 'Montserrat_400Regular',
    //paddingBottom: 2,

  },

  
  
});
