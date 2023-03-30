import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, SearchBar} from 'react-native';
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
        <Text style={styles.title}>
          Acme Shopping List
        </Text>
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
    left: 0,
    right: 0,
    top: deviceHeight/5,
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
    top: deviceHeight/7,
    //justifyContent: 'space-between',
    alignItems: 'center',
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
      height: deviceHeight / 18,
     
      borderRadius: 30,
      backgroundColor: '#F5F5DC',
      
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
  },
  labelText: {
    fontSize: 20,
    color: '#285238',
    alignItems: 'center',
  },
  searchbarText: {
    color: '#374B4A',
    fontSize: 20,
  }
});
