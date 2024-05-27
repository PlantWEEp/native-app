import React from 'react';
import {View} from 'react-native';

interface SeparatorProps {
  height : number
  width :number
}

const Separator: React.FC<SeparatorProps>  = ({height, width, ...extraProps}) => (
  <View style={{height, width, ...extraProps}} />
);

Separator.defaultProps = {
  height: 0,
  width: 0,
};

export default Separator;