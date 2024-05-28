import React from 'react';
import {View} from 'react-native';

interface SeparatorProps {
  height : number | undefined
  width :number | undefined
}

const Separator: React.FC<SeparatorProps>  = ({height, width, ...extraProps}) => (
  <View style={{height, width, ...extraProps}} />
);

export default Separator;