import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class ContactScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
            
            <View>
           <a href="https://www.xyzfoundation.net/xyz-registration-form.html"><img src="C:\Users\yazdk\Documents\XYZ\XYZ Application\XYZ_application\assets\form.png"/></a>
           <a href=""><img src=""/></a>
            </View>
            </View>
        )
    }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });