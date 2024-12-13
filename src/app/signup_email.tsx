import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const EmailVerification = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputsRef = useRef([]);

  const handleEmailInputFocus = () => setIsFocused(true);
  const handleEmailInputBlur = () => setIsFocused(false);

  const handleOtpChange = (text, index) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (index < otp.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    } else if (text === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleOtpKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSendOtp = () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
    setIsOtpSent(true);
    Alert.alert('OTP Sent', `An OTP has been sent to ${email}.`);
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
        <Text className="mb-2">Email</Text>
        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          className={`w-full border ${isFocused ? 'border-blue-500' : 'border-gray-200'} rounded-lg py-3 px-4`}
          onFocus={handleEmailInputFocus}
          onBlur={handleEmailInputBlur}
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

export default EmailVerification;
