import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Time: React.FC = () => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [isStartTime, setIsStartTime] = useState<boolean>(true); // Track which time is being set

  const showTimePicker = (isStart: boolean) => {
    setIsStartTime(isStart);
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (time: Date) => {
    if (isStartTime) {
      setStartTime(time);
    } else {
      setEndTime(time);
    }
    hideTimePicker();
  };

  // Function to format time to 12-hour format with AM/PM
  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12; // Convert to 12-hour format
    hours = hours ? hours : 12; // Handle the case for 12:00 PM/AM
    const minutesFormatted = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutesFormatted} ${ampm}`; // Fixed template literal
  };

  return (
    <View className="flex-row justify-between p-4">
      <View className="flex-1 mr-2">
        <TouchableOpacity
          onPress={() => showTimePicker(true)}
          className="bg-[#EDEDF0] p-3 rounded-2xl"
        >
          <Text className="text-center font-bold">{formatTime(startTime)}</Text>
        </TouchableOpacity>
      </View>
      <Text className="font-bold text-xl pt-1">-</Text>
      <View className="flex-1 ml-2">
        <TouchableOpacity
          onPress={() => showTimePicker(false)}
          className="bg-[#EDEDF0] p-3 rounded-2xl"
        >
          <Text className="text-center font-bold">{formatTime(endTime)}</Text>
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

export default Time;
