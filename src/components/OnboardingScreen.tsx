import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native'; 
import {Display} from '../utils/Index';
import { RFPercentage } from "react-native-responsive-fontsize";
import {CustomFonts , Images} from '../constants/Index';

interface OnboardingScreenProps {
  image: string | ImageSourcePropType;
  title: string;
  content: string;
  id:number;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ image, title, content }) => {

  return (
    <View style={styles.container}>
      <Image source={Images[image]} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: Display.setWidth(100), 
  },
  image: {
    width: Display.setWidth(60),
    height: Display.setHeight(30),
    marginBottom: 20,
  },
  title: {
    fontSize: RFPercentage(4),
    fontFamily :CustomFonts.Black,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OnboardingScreen;
