// @flow
/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';
import VerticalImageLabel from './VerticalImageLabel';
import { batteryIcon } from '../images/index';

storiesOf('Components / VerticalImageLabel', module)
   .add('entry', () => (
     <VerticalImageLabel
       source={batteryIcon}
       description="距离(千米)"
     />
  ));
