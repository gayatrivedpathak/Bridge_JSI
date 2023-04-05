import React, {useEffect, useState} from 'react';
import {Button, NativeModules, Text, TextInput, View} from 'react-native';
import generateText from './TextGenerator';
const StringFormat = NativeModules.StringFormat;

const calculatePercentile = ([...data]) => {
  return data.sort()[46];
};

const App = () => {
  const [text, setText] = useState('Enter Text');
  const [responseTime, setResponseTime] = useState('');
  const responsesTimeTaken = [];
  const [ninetyFivePercentile, setNinetyFivePercentile] = useState(0);

  useEffect(() => {
    setText(generateText(500000));
  }, []);

  const capitaliseText = async () => {
    let foo;
    for (let i = 0; i < 50; i++) {
      const startTime = new Date().getTime();
      foo = await StringFormat.capitalise(text); // is the understanding correct ?
      const endTime = new Date().getTime();
      responsesTimeTaken.push(endTime - startTime);
    }
    console.log(responsesTimeTaken.length);
    setResponseTime(responsesTimeTaken.toString());
    setNinetyFivePercentile(calculatePercentile(responsesTimeTaken));
    console.log(responseTime);
    return foo;
  };
  return (
    <View>
      <TextInput onChangeText={setText}>{text}</TextInput>
      <Button
        title="Capitalise"
        onPress={async () => setText(await capitaliseText())}
      />
      <View>
        <Text>Time Taken</Text>
        <Text>{responseTime} ms</Text>
        <Text>{ninetyFivePercentile} ms Ninety Five Percentile</Text>
      </View>
    </View>
  );
};

export default App;
