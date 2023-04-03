import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { useFonts, 
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,} 
    from '@expo-google-fonts/montserrat';

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
      <TouchableOpacity
          onPress={() => navigation.navigate('homescreen')}
          style={styles.homeButton}>
          <Image
            source={require('./assets/Icons/house-icon-gold.png')}
            style={styles.smallIcon}
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          My Lists
        </Text>
      </View>

      <View style={styles.buttonContainer}>

      <TouchableOpacity style={styles.searchbar}
      onPress={() => navigation.navigate('Checkout')}
      >
          <Text style={styles.textInput}>
            New List 1
          </Text>
          <Image
            source={require('./assets/Icons/gold-pencil.png')}
            style={styles.smallIcon}
          />
          <Image
            source={require('./assets/Icons/gold-garbage.png')}
            style={styles.tinyIcon}
          />
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.searchbar}>
          <Text style={styles.textInput}>
            Trader Joes
          </Text>
          <Image
            source={require('./assets/Icons/gold-pencil.png')}
            style={styles.smallIcon}
          />
          <Image
            source={require('./assets/Icons/gold-garbage.png')}
            style={styles.tinyIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchbar}>
          <Text style={styles.textInput}>
            Aldi - 3/24
          </Text>
          <Image
            source={require('./assets/Icons/gold-pencil.png')}
            style={styles.smallIcon}
          />
          <Image
            source={require('./assets/Icons/gold-garbage.png')}
            style={styles.tinyIcon}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
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
  textInput: {
    fontSize: 30,
    height: deviceHeight/15,
    width: deviceWidth/1.75,
    textAlign: 'left',
    fontFamily: 'Montserrat_400Regular',
    color: '#374B4A',
    //backgroundColor: '#285238',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#B4CC9B',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 50,
    color: '#285238',
    textAlign: 'center'
  },
  headContainer: {
    height: deviceHeight/9,
    justifyContent:"center",
    position: 'absolute',
    left: 0,
    right: 0,
    top: deviceHeight/12,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#000000',
    position: 'absolute',
    height: deviceHeight/4,
    width : deviceWidth,
  },
  imageIcon: {
    height: deviceHeight/10,
    width: deviceWidth/5,
    resizeMode: 'contain',
  },
  buttonContainer: {
    height: deviceHeight/2.5,
    width: deviceWidth/3,
    //backgroundColor: '#000000',
    left: 0,
    right: 0,
    //justifyContent: 'space-between',
    alignItems: 'center',
  },
  tinyIcon: {
    height: deviceHeight/20,
    width: deviceWidth/20,
    resizeMode: 'contain',
    justifyContent: 'center',
    margin: 15,
  },
  button: {
      width:deviceWidth / 2.5,
      height: deviceHeight / 5.5,
     
      borderRadius: 30,
      backgroundColor: '#F5F5DC',
      
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
  },
  buttonText: {
      fontSize: 20,
      color: '#F1785D'
  },
  searchbar: {
      width:deviceWidth - 20,
      height: deviceHeight / 13,
     
      borderRadius: 30,
      backgroundColor: '#F5F5DC',
      
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      flexDirection: 'row',
  },
  labelText: {
    fontSize: 20,
    color: '#285238',
    alignItems: 'center',
  },
  searchbarText: {
    color: '#374B4A',
    fontSize: 20,
  },
  smallIcon: {
    height: deviceHeight/19,
    width: deviceWidth/15,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  homeButton: {
    borderRadius: 15,
    backgroundColor: '#F1785D',
    height: deviceHeight/15,
    width: deviceWidth/8,
    //height: 40,
    //width: 40,
   
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    right: -250,
    top: 0,
  },
});
