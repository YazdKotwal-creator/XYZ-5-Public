import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen';
import MembersScreen from './screens/MembersScreen';

export default class App extends React.Component {
  render(){
    return (

        <AppContainer/>

    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Members: {screen: MembersScreen},
  Home: {screen: HomeScreen},
  Seniors: {screen: SeniorsScreen},
  Volunteers: {screen: VolunteersScreen},
  AA: {screen: AAScreen},
  Themes: {screen: ThemesScreen},
  PP: {screen: PPScreen},
  XI: {screen: XIScreen},
  Runner: {screen: Robot-runScreen},
  BB: {screen: BBScreen},
  CS: {screen: CSScreen},
  DD: {screen: DDScreen},
  JG: {screen: JGScreen},
  KC: {screen: KCScreen},
  NK: {screen: NKScreen},
  RR: {screen: RRScreen},
  TT: {screen: TTScreen},
  Contact: {screen: ContactUs}
  
 //About us sidebar thing
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Members"){
        return(
          <Image
          style={{width:40, height:40}}
        />
        )
      }
      else if(routeName === "Search"){
        return(
          <Image
          style={{width:40, height:40}}
        />)

      }
    }
  })
}
);

const switchNavigator = createSwitchNavigator({
LoginScreen:{screen: LoginScreen},
TabNavigator:{screen: TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});