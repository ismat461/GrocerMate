import * as React from 'react';
import { CheckBox } from 'react-native-web';
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

export default function Checkout({ navigation }) {
  const [isChecked, setChecked] = React.useState(false)

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

      <View style = {styles.cart}>
        <View style={styles.colContainer1}>
          <View style={styles.rowContainer1}>
            <Text style={styles.categoryText}>
              Fruits & Vegetables
            </Text>
            <Image
              source={require('./assets/Icons/pink-arrow.png')}
              style={styles.tinyIcon}
            />
          </View>
          <View style={styles.rowContainer4}>
             <CheckBox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#B4CC9B' : undefined}
            />
            
            <View style={styles.colContainer1}>
              <View style={styles.rowContainer2}>
                <Text style={styles.itemText}>
                    Honey Crisp
                </Text>
                <Image
                  source={require('./assets/Icons/Apples/honey-crisp4.png')}
                  style={styles.image}
                />
              </View>
              <View style={styles.rowContainer3}>
                  <View style={styles.colContainer2}>
                    <Text style={styles.qtyText}>
                      QTY
                    </Text>
                    <Text style={styles.amountText}>
                      1
                    </Text>
                  </View>
                  <Text style={styles.priceText}>
                    $2.31
                  </Text>
              </View>
            </View>
            <Image
              source={require('./assets/Icons/gold-garbage.png')}
              style={styles.smallIcon}
            />  
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
          onPress={() => navigation.navigate('SearchScreen')}
          style={styles.button}>
          <Text style={styles.buttonText}>Add Items</Text>
          <Image
            source={require('./assets/Icons/gold-add.png')}
            style={styles.largerIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.grandTotalContainer}>
        <Text style={styles.grandText}>
          Grand Total:
        </Text>
        <Text style={styles.grandTextBold}>
          $2.31
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
  paragraph: {
    fontSize: 18,
    color: '#374B4A',
    fontFamily: 'Montserrat_400Regular',
    paddingLeft: 5,
    paddingRight: 15,
  },
  checkbox: {
    margin: 8,
    width:deviceWidth/17,
    height: deviceHeight/40,

    //alignSelf:'center',
  },
  locationBar: {
    //backgroundColor: '#285238',
    height: deviceHeight/25,
    width: deviceWidth/3,
    backgroundColor: '#F5F5DC',
    borderRadius: 30,
    //left: -deviceWidth/10,
    //top: -deviceHeight/6.5,
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
    padding:10,
    //backgroundColor: '#285238',
  },
  pinkButtonContainer: {
    height: deviceHeight/15,
    width: deviceWidth,
    //justifyContent: 'space-between',
    //backgroundColor: '#285238',
    justifyContent: 'space-between',
    alignItems:'center',
    top: -deviceHeight/10,
    flexDirection: 'row', 
    padding: 20
  },
  pinkButton: {
    borderRadius: 15,
    backgroundColor: '#F1785D',
    height: deviceHeight/15,
    width: deviceWidth/6.5,
     
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //right: -deviceWidth/2.5,
    //top: -deviceHeight/4.5,
  },
  //deviceHeight: 728.9
  //deviceWidth: 392.72
  largerIcon: {
    height: deviceHeight/13,
    width: deviceWidth/7,
    resizeMode: 'contain',
  },
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
    height: deviceHeight/11,
    width:deviceWidth/8,
    resizeMode: 'contain',
  },

  itemText: {
    fontSize: 19,
    fontFamily: "Montserrat_400Regular"
  },
  qtyText: {
    fontSize: 10,
    fontFamily: "Montserrat_400Regular"
  },
  amountText: {
    fontSize: 19,
    fontFamily: "Montserrat_400Regular"
  },
  priceText: {
    fontSize: 25,
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

    top: -deviceHeight/15,
    //marginTop: 10,
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
  button: {
    width:deviceWidth / 1.5,
    height: deviceHeight / 7,
     
    borderRadius: 30,
    backgroundColor: '#F1785D',
      
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  buttonText: {
    fontSize: 30,
    fontFamily: 'Montserrat_400Regular',
    color: '#F8D677',
    //paddingBottom: 2,

  },
  buttonContainer: {
    height: deviceHeight / 2.5,
    left: 0,
    right: 0,
    top: -deviceHeight / 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cart: {
    width:deviceWidth / 1.10,
    height: deviceHeight / 6,
     
    borderRadius: 30,
    backgroundColor: '#F5F5DC',
      
    //alignItems: 'center',
    justifyContent: 'center',
    top: -deviceHeight / 25,
    //marginTop: 25,
    padding: 10,
  },
  rowContainer1: {
    flexDirection:'row',
    //backgroundColor: '#285238',
    width:deviceWidth / 1.20,
    height: deviceHeight/13,
    justifyContent: 'space-around',
    padding: 5,
    alignItems: "center",
  },
    rowContainer2: {
    flexDirection:'row',
    //backgroundColor: '#F1785D',
    width:deviceWidth / 2,
    height: deviceHeight/21,
    alignItems: "center",
    //justifyContent:'space-around',
    //padding:3,
  },
  rowContainer3: {
    flexDirection:'row',
    //backgroundColor: '#F1785D',
    width:deviceWidth / 3,
    left: -deviceWidth/11,
    alignItems: "center",
    justifyContent:'space-around',
    //padding:10,
  },
  rowContainer4: {
    flexDirection:'row',
    //backgroundColor: '#374B4A',
    width:deviceWidth / 1.20,
    height: deviceHeight/10,
    alignItems: "center",
    justifyContent:'space-between',
    top: -deviceHeight/40,
    //padding:10,
  },
  colContainer1: {
    flexDirection: 'column',
    //backgroundColor: '#F8D677',

    //width: deviceWidth/1.25,
    //height: deviceHeight/20,
    justifyContent: 'center',
    alignItems:'center',
  },
  colContainer2: {
    flexDirection: 'column',
   // backgroundColor: '#374B4A',

    //width: deviceWidth/1.25,
    //height: deviceHeight/20,
    justifyContent: 'center',
    alignItems:'center',
  },
  categoryText: {
    fontFamily: 'Montserrat_700Bold',
    
    color: "#F1785D",
    fontSize:20,

  },
});
