/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Easing,
  TouchableOpacity,
} from 'react-native';
import {Circle, G, Svg} from 'react-native-svg';
import {
  faCircleArrowRight,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {MotiView} from 'moti';
import Animated, {
  runOnJS,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
// import React from 'react';
// import React, {useEffect}
import {ParamListBase, useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const {width, height} = Dimensions.get('window');

const FirstScreen = (): JSX.Element => {
  // const navigation = useNavigation();
  // const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  // };

  const radius = 28;
  const circumference = radius * (Math.PI * 2);
  const strokeWidth = 3;
  const halfCircle = radius + strokeWidth;
  const diameter = halfCircle * 2;

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  const progressValue = useSharedValue(1);
  const rotation = useSharedValue(1);

  useEffect(() => {
    StartAnimation();
  });

  const StartAnimation = () => {
    // progressValue.value = withTiming(1.5, {duration: 2000});
    progressValue.value = withRepeat(
      withSequence(
        withTiming(1.5, {duration: 900}),
        withTiming(2.5, {duration: 3000}),
      ),
      -1,
      true,
    );

    rotation.value = withRepeat(withTiming(360, {duration: 900}), -1, false);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: rotation.value + 'deg'}],
  }));

  const aniamtedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: circumference / progressValue.value,
    };
  }, [progressValue.value]);

  function navigate(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.background}>
      <Image
        source={require('../../resource/new/firstImage.jpeg')}
        style={styles.backgroundImage}
        resizeMethod="resize"
        resizeMode="cover"
      />
      <View style={styles.welcomeText}>
        <View style={styles.text}>
          <Text style={styles.textOne}>Get Closer To Your Peeers</Text>
          <Text style={styles.textTwo}>Online Like Never Before</Text>
        </View>
        <View style={styles.skipLinks}>
          <View>
            <Text style={styles.skip}>SKIP</Text>
          </View>
          <View style={styles.space}>
            <View style={styles.activePage} />
            <View style={styles.inactivePageOne} />
            <View style={styles.inactivePageTwo} />
          </View>
          <View style={styles.goToNextPage}>
            <View style={styles.progressRing}>
              <Animated.View style={animatedStyle}>
                <Svg
                  width={diameter}
                  height={diameter}
                  viewBox={`0 0 ${diameter} ${diameter}`}>
                  <G origin={`${halfCircle}, ${halfCircle}`} rotation={'-90'}>
                    <AnimatedCircle
                      animatedProps={aniamtedProps}
                      fill={'transparent'}
                      stroke={'black'}
                      r={radius}
                      cx={'50%'}
                      cy={'50%'}
                      strokeWidth={strokeWidth}
                      strokeDasharray={circumference}
                    />
                    <Circle
                      fill={'transparent'}
                      stroke={'black'}
                      r={radius}
                      cx={'50%'}
                      cy={'50%'}
                      strokeWidth={strokeWidth}
                      strokeOpacity={0.3}
                    />
                  </G>
                </Svg>
              </Animated.View>
            </View>
            <TouchableOpacity
            onPress={() => navigate('SecondScreen')}
            >
              <FontAwesomeIcon
              style={styles.nextPageArrow}
              icon={faCircleArrowRight}
              size={40}
            />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
  },

  backgroundImage: {
    flex: 2,
    flexDirection: 'column',
    width: 415,
    height: 490,
    position: 'absolute',
  },

  welcomeText: {
    flex: 1,
    alignItems: 'center',
    marginTop: (50 / 100) * height,
    borderRadius: 55,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  text: {
    paddingTop: 50,
  },

  textOne: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },

  textTwo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },

  skipLinks: {
    flexDirection: 'row',
    width,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: (5 / 100) * width,
    paddingRight: (5 / 100) * width,
  },

  space: {
    flexDirection: 'row',
    gap: 2,
  },

  skip: {
    color: 'gold',
    fontSize: 20,
  },

  activePage: {
    width: 40,
    borderWidth: 9,
    borderRadius: 100,
    height: 0,
  },

  inactivePageOne: {
    borderWidth: 9,
    borderRadius: 100,
    borderColor: 'gray',
    height: 0,
  },

  inactivePageTwo: {
    borderWidth: 9,
    borderRadius: 100,
    borderColor: 'gray',
    color: 'white',
    height: 0,
  },
  goToNextPage: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: (45 / 100) * height,
  },

  progressRing: {
    position: 'absolute',
    right: -10,
  },

  nextPageArrow: {
    top: 0,
  },
});

export default FirstScreen;
