import React, {useState} from 'react';

import {Button, TextInput, View} from 'react-native';
import {NativeModules} from 'react-native';
const StringFormat = NativeModules.StringFormat;

const App = () => {
  const [text, setText] = useState('Enter Text');
  const capitaliseText = async () => {
    const foo = await StringFormat.capitalise(text);
    return foo;
  };
  return (
    <View>
      <TextInput onChangeText={setText}>{text}</TextInput>
      <Button
        title="Capitalise"
        onPress={async () => setText(await capitaliseText())}
      />
    </View>
  );
};

export default App;
