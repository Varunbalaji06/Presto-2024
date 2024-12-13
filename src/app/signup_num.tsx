import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';

const SignupNum = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputsRef = useRef([]);

  const handlePhoneInputFocus = () => setIsFocused(true);
  const handlePhoneInputBlur = () => setIsFocused(false);

  const handlePhoneChange = (text) => {
    // Allow only numbers and limit to 10 digits
    if (/^\d*$/.test(text) && text.length <= 10) {
      setPhone(text);
    }
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
    if (!phone || phone.length !== 10) {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number.');
      return;
    }
    setIsOtpSent(true);
    Alert.alert('OTP Sent', 'Please check your phone for the OTP.');
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
    <SafeAreaView className="flex-1 justify-center items-center p-4">
      <Image source={require('../assets/logo.png')} className="w-212 h-92" />
      <View className="my-4">
        <Text className="text-lg font-bold text-center text-[#113b64]">Hurry Up!!</Text>
        <Text className="text-center">Order your food before you actually leave</Text>
        <Text className="text-center">and enjoy the taste on time.....</Text>
      </View>

      <View className="w-full">
        <Text className="mb-2">Phone</Text>
        <TextInput
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={handlePhoneChange}
          className={`w-full border ${isFocused ? 'border-blue-500' : 'border-gray-200'} rounded-lg py-3 px-4`}
          onFocus={handlePhoneInputFocus}
          onBlur={handlePhoneInputBlur}
        />

        <TouchableOpacity
          className="mt-4 bg-red-700 border border-red-600 rounded-xl py-3 px-6"
          onPress={handleSendOtp}
        >
          <Text className="text-white font-bold text-center">Send OTP</Text>
        </TouchableOpacity>

        {isOtpSent && (
          <View className="mt-6">
            <Text className="mb-2">Enter OTP</Text>
            <View className="flex-row justify-between mb-4">
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputsRef.current[index] = ref)}
                  value={digit}
                  onChangeText={(text) => handleOtpChange(text, index)}
                  onKeyPress={(e) => handleOtpKeyPress(e, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  className="w-12 h-12 border border-gray-200 rounded-lg text-center text-lg"
                />
              ))}
            </View>
            <TouchableOpacity
              className="bg-blue-500 border border-blue-400 rounded-xl py-3 px-6"
              onPress={verifyOtp}
            >
              <Text className="text-white font-bold text-center">Verify OTP</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SignupNum;
