import React from 'react';
import { View } from 'react-native';
import InputButtonRow from './InputButtonRow';

import Styles from './Styles'

const InputButtonSet = ({rows, onButtonClick}) => (
  <View style={Styles.buttons}>
    {rows.map((row, index) =>
      <InputButtonRow key={index} buttons={row} onButtonClick={onButtonClick} />
    )}
  </View>
);

export default InputButtonSet;
