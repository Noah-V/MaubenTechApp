/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Easing,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {}  from 'react-native-reanimated';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import  { SelectList } from 'react-native-dropdown-select-list';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }): JSX.Element => {


  const [category, setCategory] = React.useState('');
  // const categories = [
  //   { key: 'El', Value: 'Electronic' },
  //   { key: 'gr', Value: 'Atomobile' },
  //   { key: 'Ee', Value: 'Ele' },
  // ];
  const categories = [
    { id: 1, value: 'Proprietor' },
    { id: 2, value: 'Admin' },
    { id: 3, value: 'Teacher' },
    { id: 4, value: 'Student' },
    { id: 5, value: 'Parent'},
  ];

  const [disabled, setDisabled] = React.useState(true);
  const [nameValid, setNameValid] = React.useState(false);
  const [passwordValid, setPasswordValid] = React.useState(false);
  const [roleValid, setRoleValid] = React.useState(false);

  const handleContinueBtn = () => {
    if (nameValid)
      console.log("Name is valid!");
    if (passwordValid)
      console.log("Password is valid!");
    if (roleValid)
      console.log("Role is valid!");
    
    if (nameValid && passwordValid && roleValid) {
      console.log("Everything is valid!");
      setDisabled(false);
    }
  };

  return (
    <View>
      <View style={styles.loginContainer}>
        <Text style={styles.login}>Log in</Text>
        <Text style={styles.loginText}>Enter your Email to Log in to Mauben app</Text>
        <View>
          <TextInput
            style={styles.input}
            keyboardType={'email-address'}
            placeholder={'Email'}
            onChangeText={(text) => {
              if (text.length > 3) {
                setNameValid(true);
              }

              handleContinueBtn();
            }}
          />

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            // maxLength={4}
            placeholder={'Password'}
            onChangeText={(text) => {
              if (text.length > 3) {
                setPasswordValid(true);
              }

              handleContinueBtn();
            }}
          />

          <View style={styles.dropDownContainer}>
            <SelectList
              disabledItemStyles={styles.disabledDropdownItems}
              boxStyles={styles.dropDown}
              dropdownStyles={styles.dropDownBox}
              search={false}
              setSelected={setCategory}
              data={categories}
              placeholder={'Select Category'}
              onSelect={() => {
                console.log("Selected!");
                setRoleValid(true);
                handleContinueBtn();
              }}
              // defaultOption={{ id: 3, value: 'Student' }}
            />
          </View>

          <TouchableOpacity
            disabled={disabled}
            style={[styles.input, styles.continueBtn, disabled ? styles.btnDisabled : styles.btnEnabled]}
          >
            <Text style={styles.continueBtnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  login: {
    marginTop: 90,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },
  loginText: {
    marginTop: 6,
  },
  input: {
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: 'white',
    paddingLeft: 15,
  },
  dropDownContainer: {
    marginTop: 15,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 20,
  },
  dropDown: {
    borderColor: 'white',
    borderRadius: 20,
  },
  dropDownBox: {
    borderColor: 'white',
  },
  disabledDropdownItems: {
    marginBottom: 10,
  },
  continueBtn: {
    padding: 10
  },
  btnDisabled: {
    backgroundColor: '#B6B6B6',
    color: '#919191',
  },
  btnEnabled: {
    backgroundColor: '#D39B3F',
  },
  continueBtnText: {
    color: '#000',
    // fontWeight: 'bold',
    textAlign: 'center',

  },
});

export default LoginScreen;
