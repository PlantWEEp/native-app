import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { Colors, Images, CustomFonts, OnBoardingContent } from '../constants/Index';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Display } from '../utils/Index';
import OnboardingScreen from '../components/OnboardingScreen';
import Separator from '../components/Separator';

const pageStyle = (isActive: boolean) =>
  isActive
    ? styles.page
    : { ...styles.page, backgroundColor: Colors.DEFAULT_GREY };

const Pagination = ({ index }) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(OnBoardingContent.OnBoardingContent.length).keys()].map((_, i) =>
        i === index ? (
          <View style={pageStyle(true)} key={i} />
        ) : (
          <View style={pageStyle(false)} key={i} />
        )
      )}
    </View>
  );
};

const WelcomeScreen = ({navigation}) => {
  const [onboardingIndex, setOnboardingIndex] = useState(0);
  const onboardingScreenRef = useRef();
  const onViewRef = useRef(({ changed }) => {
    setOnboardingIndex(changed[0].index);
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const pageScroll = () => {
    onboardingScreenRef.current.scrollToIndex({
      index: onboardingIndex < 2 ? onboardingIndex + 1 : onboardingIndex,
      animated: true,
    });
  };




  function navigate(arg0: string): void {
    throw  nav;
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={Colors.DEFAULT_WHITE}
      />
      <Separator height={StatusBar.currentHeight} width={undefined} />
      <Separator height={Display.setHeight(10)} width={undefined} />
      <View style={styles.welcomeListContainer}>
        <FlatList
          ref={onboardingScreenRef}
          data={OnBoardingContent.OnBoardingContent}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          renderItem={({ item }) => <OnboardingScreen {...item} />}
        />
      </View>
      <Separator height={Display.setHeight(5)} width={undefined} />
      <Pagination index={onboardingIndex} />
      <Separator height={Display.setHeight(10)} width={undefined} />
      <View style={styles.buttonWrapper}>
        {onboardingIndex === 2 ? (
          <TouchableOpacity
            style={styles.gettingStartedButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Login")}>
            <Text style={styles.gettingStartedButtonText}>Get Started</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => onboardingScreenRef.current.scrollToEnd()}>
              <Text style={styles.buttonSkipText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNext} onPress={() => pageScroll()}>
              <Text style={styles.buttonNextText}>Next</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
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
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: 8,
    width: 15,
    marginHorizontal: 5,
    borderRadius: 30,
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  welcomeListContainer: {
    height: Display.setHeight(60),
  },
  buttonNext: {},
  buttonSkipText: {
    fontSize: RFPercentage(3),
    fontFamily: CustomFonts.Lato,
  },
  buttonNextText: {
    fontSize: RFPercentage(3),
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Display.setWidth(90),
  },
  gettingStartedButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: Display.setWidth(90),
  },
  gettingStartedButtonText: {
    fontSize: 20,
    textAlign:"center",
    color: Colors.DEFAULT_WHITE,
    lineHeight: 20 * 1.4,
    fontFamily: CustomFonts.Lato,
  },
});

export default WelcomeScreen;
