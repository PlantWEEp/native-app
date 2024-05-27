import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native';
import {Colors, Images, Fonts, OnBoardingContent} from '../constants/Index';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Display} from '../utils/Index';
import OnboardingScreen from '../components/OnboardingScreen';
import {RefObject, useRef, useState} from 'react';

function Pagination() {
  return (
    <View style = {styles.pageContainer}>
      <View style = {styles.pagination} />
      <View style = {styles.pagination} />
      <View style = {styles.pagination} />
    </View>
  );
}

const WelcomeScreen = () => {
  const [onboardingScreenIndex, SetOnboardingScreenIndex] = useState(0);
  const onboardingScreenRef: RefObject<FlatList<any>> =
    useRef<FlatList<any>>(null);
  console.log('onboardingScreenRef valuw', onboardingScreenRef);

  

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={Colors.DEFAULT_WHITE}
      />
      <View>
        <FlatList
          ref={onboardingScreenRef}
          data={OnBoardingContent.OnBoardingContent}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({item}) => <OnboardingScreen {...item} />}
        />
      </View>
      <Pagination/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  pageContainer:{
    flexDirection:'row'
  },
  pagination:{
    height:8,
    width:15,
    backgroundColor: Colors.DEFAULT_GREEN
  }
});

export default WelcomeScreen;
