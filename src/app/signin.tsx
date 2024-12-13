import { Text, View, TextInput, Image,TouchableOpacity, Alert } from 'react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const [inputType, setInputType] = useState('email');
  const [inputValue, setInputValue] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputsRef = useRef([]);
  const navigation = useNavigation();

  const handleInputTypeChange = (type) => {
    setInputType(type);
    setInputValue('');
    setIsOtpSent(false);
    setOtp(new Array(6).fill(''));
  };

  const handleOtpChange = (text, index) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (index < otp.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    } else if (text === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleOtpKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSendOtp = () => {
    if (inputType === 'email' && !/^\S+@\S+\.\S+$/.test(inputValue)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
    if (inputType === 'phone' && !/^\d{10}$/.test(inputValue)) {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number.');
      return;
    }
    setIsOtpSent(true);
    Alert.alert('OTP Sent', `An OTP has been sent to your ${inputType === 'email' ? 'email' : 'phone number'}.`);
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== otp.length) {
      Alert.alert('Error', 'Please enter the complete OTP.');
    } else {
      Alert.alert('Success', `OTP Verified: ${enteredOtp}`);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 justify-center px-6">
        <Image source={require('../assets/logo.png')} className="w-212 h-92" />
        <View className="my-4">
        <Text className="text-lg font-bold text-center text-[#113b64]">Hurry Up!!</Text>
        <Text className="text-center">Order your food before you actually leave</Text>
        <Text className="text-center">and enjoy the taste on time.....</Text>
      </View>

      <View className="flex-row justify-center mb-6">
        <TouchableOpacity
          className={`px-6 py-3 rounded-full shadow-md ${inputType === 'email' ? 'bg-blue-500' : 'bg-gray-200'}`}
          onPress={() => handleInputTypeChange('email')}
        >
          <Text className={`font-bold ${inputType === 'email' ? 'text-white' : 'text-gray-700'}`}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`ml-4 px-6 py-3 rounded-full shadow-md ${inputType === 'phone' ? 'bg-blue-500' : 'bg-gray-200'}`}
          onPress={() => handleInputTypeChange('phone')}
        >
          <Text className={`font-bold ${inputType === 'phone' ? 'text-white' : 'text-gray-700'}`}>Phone</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-lg font-medium text-gray-700 mb-2">
        {inputType === 'email' ? 'Email Address' : 'Phone Number'}
      </Text>
      <TextInput
        placeholder={inputType === 'email' ? 'Enter your email' : 'Enter your phone number'}
        keyboardType={inputType === 'email' ? 'email-address' : 'phone-pad'}
        value={inputValue}
        onChangeText={setInputValue}
        className="w-full border border-gray-300 rounded-lg shadow-sm py-4 px-4 bg-white text-gray-800 mb-4"
      />


      <TouchableOpacity
        className="bg-red-600 rounded-lg py-4 shadow-md"
        onPress={handleSendOtp}
      >
        <Text className="text-white font-semibold text-center">Send OTP</Text>
      </TouchableOpacity>

      {isOtpSent && (
        <View className="mt-8">
          <Text className="text-lg font-medium text-gray-700 mb-4 text-center">Enter OTP</Text>
          <View className="flex-row justify-center mb-6">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputsRef.current[index] = ref)}
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(e) => handleOtpKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl shadow-sm mx-1 bg-white"
              />
            ))}
          </View>
          <TouchableOpacity
            className="bg-blue-500 rounded-lg py-4 shadow-md"
            onPress={verifyOtp}
          >
            <Text className="text-white font-semibold text-center">Verify OTP</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        className="mt-6"
        onPress={() => console.log('Create an account')}
      >
        <Text className="text-blue-500 font-semibold text-center">Create an account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;
