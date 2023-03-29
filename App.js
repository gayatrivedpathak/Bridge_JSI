import React, {useEffect, useState} from 'react';

import {Button, Text, TextInput, View} from 'react-native';
import {NativeModules} from 'react-native';
import generateText from './TextGenerator';
const StringFormat = NativeModules.StringFormat;

// const calculatePercentile = ([...data]) => {
//   const count = data.length;
// };

const App = () => {
  const [text, setText] = useState('Enter Text');
  const [responseTime, setResponseTime] = useState('');
  const responcesTimeTaken = [];

  useEffect(() => {
    setText(generateText(50000));
  }, []);

  const capitaliseText = async () => {
    let foo;
    // const startTime = new Date().getTime();
    for (let i = 0; i < 50; i++) {
      const startTime = new Date().getTime();
      foo = await StringFormat.capitalise(text); // is the understanding correct ?
      const endTime = new Date().getTime();
      responcesTimeTaken.push(endTime - startTime);
    }
    const endTime = new Date().getTime();
    console.log(responcesTimeTaken.length);
    setResponseTime(responcesTimeTaken.toString());

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
      </View>
    </View>
  );
};

export default App;
