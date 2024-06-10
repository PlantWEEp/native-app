import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Display from '../utils/Display';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../constants/Color';
import Separator from '../components/Separator';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginScreen = () => {

  const SignupSchema = Yup.object().shape({
    phonenumber: Yup.number()
      .required('Phone number is required')
      .integer('Phone number must be an integer')
      .typeError('Invalid phone number')
      .max(9999999999, 'Phone number must be 10 digits or less'),
    password: Yup.string().required('Password is required'),
  });
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Separator height={Display.setHeight(2)} width={undefined} />
          <View style={styles.header}>
            <Text style={styles.text}>Sign In</Text>
          </View>
          <View style={styles.wrapperSignin}>
            <View>
              <Text style={styles.Welcome}>Welcome to</Text>
              <Text style={styles.subText}>
                Enter your phonenumber and password to login. Enjoy your food.
              </Text>
            </View>
            <Formik
              initialValues={{ phonenumber: '', password: '' }}
              validationSchema={SignupSchema}
              onSubmit={(values) => console.log(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View>
                  <TextInput
                    onChangeText={handleChange('phonenumber')}
                    onBlur={handleBlur('phonenumber')}
                    value={values.phonenumber}
                    style={styles.userinput}
                    placeholder="Enter your phone number"
                    keyboardType="number-pad"
                  />
                  {touched.phonenumber && errors.phonenumber && (
                    <Text style={styles.errors}>{errors.phonenumber}</Text>
                  )}
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={styles.userinput}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                  />
                  {touched.password && errors.password && (
                    <Text style={styles.errors}>{errors.password}</Text>
                  )}
                  <View style={styles.bottomWrapper}>
                    <TouchableOpacity activeOpacity={0.5}>
                      <Text style={styles.forgetPassword}>Forgot Password</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.signInButton}
                    onPress={handleSubmit}>
                    <Text style={styles.gettingStartedButton}>Sign in</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  userinput: {
    height: 40,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY2,
    padding: 10,
    borderRadius: 8,
    backgroundColor: Colors.LIGHT_GREY2,
  },
  wrapperSignin: {
    justifyContent: 'center',
    paddingVertical: 100,
    width: Display.setWidth(90),
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    marginLeft: 10,
  },
  Welcome: {
    fontSize: RFPercentage(5.3),
    color: Colors.DEFAULT_BLACK,
  },
  subText: {
    color: Colors.DEFAULT_BLACK,
    paddingVertical: 10,
  },
  gettingStartedButton: {
    textAlign: 'center',
    fontSize: RFPercentage(2.5),
    color: Colors.DEFAULT_WHITE,
  },
  signInButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: Display.setWidth(90),
    marginTop: 10,
  },
  bottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  forgetPassword: {
    paddingVertical: 10,
    color: Colors.DEFAULT_GREEN,
    fontWeight: 'bold',
  },
  errors: {
    color: 'red',
    marginTop: 5,
  },
});

export default LoginScreen;
