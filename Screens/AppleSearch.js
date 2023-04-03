import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
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
        style={styles.pinkButton} onPress={() => navigation.navigate('SearchScreen')}>
          <Image
            source={require('./assets/Icons/gold-back-sign.png')}
            style={styles.largeIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.pinkButton} onPress={() => navigation.navigate('homescreen')}
        >
          <Image
          // /workspaces/GrocerMate/assets/Icons/house-icon-gold.png
            source={require('./assets/Icons/house-icon-gold.png')}
            style={styles.largeIcon}
          />
        </TouchableOpacity>
      </View>
      

      <NameInput></NameInput>

      <View style = {styles.filterContainer}>
        <Text style ={styles.filterText}>
          Sort By:
        </Text>
        <TouchableOpacity 
          style={styles.filterButton} onPress={() => Alert("placeholder")}
          >
            <Text style={styles.filterText}>
              Price
            </Text>
            <Image
            // /workspaces/GrocerMate/assets/Icons/house-icon-gold.png
              source={require('./assets/Icons/pink-arrow.png')}
              style={styles.tinyIcon}
            />
          </TouchableOpacity>
      </View>
      
        
      
      <View style={styles.buttonContainer}>
        <View style={styles.columnContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Checkout")} style={styles.button} 
          activeOpacity={0.5}>
            <Image source={require('./assets/Icons/Apples/red-delicious1.png')}
                  style={styles.image}
            />
                <Text style={styles.buttonText}>Red Delicious</Text>
                <Text style={styles.buttonText}>$1.92</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CreateNewList")} style={styles.button} 
          activeOpacity={0.5}>
            <Image source={require('./assets/Icons/Apples/granny-smith2.png')}
                  style={styles.image}
            />
                <Text style={styles.buttonText}>Granny Smith</Text>
                <Text style={styles.buttonText}>$2.42</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CreateNewList")} style={styles.button} 
          activeOpacity={0.5}>
            <Image source={require('./assets/Icons/Apples/macintosh3.png')}
                  style={styles.image}
            />
                <Text style={styles.buttonText}>Macintosh</Text>
                <Text style={styles.buttonText}>$2.54</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ApplePopUp")} style={styles.button} 
          activeOpacity={0.5}>
            <Image source={require('./assets/Icons/Apples/honey-crisp4.png')}
                  style={styles.image}
            />
                <Text style={styles.buttonText}>Honey Crisp</Text>
                <Text style={styles.buttonText}>$2.31</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CreateNewList")} style={styles.button} 
          activeOpacity={0.5}>
            <Image source={require('./assets/Icons/Apples/pink-lady5.png')}
                  style={styles.image}
            />
                <Text style={styles.buttonText}>Pink Lady</Text>
                <Text style={styles.buttonText}>$2.53</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CreateNewList")} style={styles.button} 
          activeOpacity={0.5}>
            <Image source={require('./assets/Icons/Apples/gala6.png')}
                  style={styles.image}
            />
                <Text style={styles.buttonText}>Gala</Text>
                <Text style={styles.buttonText}>$2.61</Text>
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
          placeholder="Apples"
          onChangeText={(text) => this.setState({ text })}
        />
      <Image
            source={require('./assets/Icons/gold-search.png')}
            style={styles.largeIcon}
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
    width: deviceWidth,
    //justifyContent: 'space-between',
    //backgroundColor: '#285238',
    justifyContent: 'space-between',
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
  },
  tinyIcon: {
    height: deviceHeight/25,
    width: deviceWidth/25,
    resizeMode: 'contain',
  },
  image: {
    height: deviceHeight/9,
    width:deviceWidth/4,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -deviceHeight/20,
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

    top: -deviceHeight/7,
    flexDirection: 'row',
  },
  textInput: {
    fontSize: 25,
    height: deviceHeight/15,
    width: deviceWidth/1.75,
    //textAlign: 'center',
    justifyContent:'flex-start',
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
    //backgroundColor: '#285238',
  },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: deviceWidth/2.5,
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
  filterButton: {
    backgroundColor: "#F8D677",
    width: deviceWidth/3.5,
    height: deviceHeight/20,
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems:'center',
    flexDirection:'row',
    marginRight:20,
    padding: 5,
  },
  filterText: {
    fontSize: 20,
    fontFamily: 'Montserrat_400Regular',
    marginRight:10,
  },
  filterContainer: {
    flexDirection: 'row',
    width: deviceWidth,
    height: deviceHeight/25,
    alignItems:'center',
    justifyContent: 'flex-end',
    //backgroundColor: '#285238',
    top: -deviceHeight/9,
  }, 

});
