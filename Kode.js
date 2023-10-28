import React, {useState, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';

const Kode = () => {
  return (
    <View style={{flex: 1,backgroundColor: '#B0C4DE'}}>
      <Text style={{fontSize: 22,color: '#000000'}}>scan code</Text>
      <Text></Text>
    </View>
  );
};

export default Kode;
