import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './src/components/Home';
import Flower from './src/components/Flower';
import Chat from './src/components/Chat';
import Profile from './src/components/Profile';
import Kode from './src/components/Kode';


const App = () => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const Tab = createBottomTabNavigator();

  return (
    
    <View style={{flex: 1,  backgroundColor: '#FAFAFA'}}>
      <StatusBar backgroundColor={'#FAFAFA'} barStyle="dark-content" />
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
          paddingVertical: 10,
          borderTopWidth: 1,
          borderTopColor: '#bdbdbd',
        }}>
        <TouchableOpacity
        onPress={() => setActiveMenu('Home')}
          style={{flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Home' ? '#B0C4DE' : '#FFFFFF',
            elevation: activeMenu == 'Home' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,}}>
          <Icon name="home" size={22} color="#6e6b72" />
          <Text style={{color: '#6e6b72'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => setActiveMenu('Flower')}
          style={{flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 12,
            borderRadius: 9,
            backgroundColor: activeMenu == 'Flower' ? '#B0C4DE' : '#FFFFFF',
            elevation: activeMenu == 'Flower' ? 2 : 0,}}>
          <Icon name="boxes" size={22} color="#6e6b72" />
          <Text style={{color: activeMenu == 'Flower' ? '#FFFFFF' : '#9ea3b0'}}>
            Flower 
          </Text>
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <TouchableOpacity
          onPress={() => setActiveMenu('Kode')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#B0C4DE',
              position: 'absolute',
              zIndex: 1,
              bottom: 10,
              elevation: 3,
              borderWidth: 3,
              borderColor: '#FFFFFF',
            }}>
            <Icon name="qrcode" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
        onPress={() => setActiveMenu('Chat')}
          style={{flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: activeMenu == 'Chat' ? '#B0C4DE' : '#FFFFFF',
            elevation: activeMenu == 'Chat' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,}}>
          <Icon name="comments" size={22} color="#6e6b72" />
          <Text
            style={{color: activeMenu == 'Chat' ? '#FFFFFF' : '#9ea3b0'}}>
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => setActiveMenu('Profile')}
          style={{flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: activeMenu == 'Profile' ? '#B0C4DE' : '#FFFFFF',
            elevation: activeMenu == 'Profile' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
            }}>
          <Icon name="user-circle" size={22} color="#6e6b72" />
          <Text style={{color: activeMenu == 'Profile' ? '#FFFFFF' : '#9ea3b0'}}>
            Profile 
          </Text>
        </TouchableOpacity>
      </View>
      {activeMenu == 'Home' && <Home />}
      {activeMenu == 'Flower' && <Flower />}
      {activeMenu == 'Chat' && <Chat />}
      {activeMenu == 'Profile' && <Profile />}
      {activeMenu == 'Kode' && <Kode />}
    </View>
  );
};

export default App;