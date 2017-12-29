// @flow
/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {
  withKnobs,
  array,
  text,
  boolean,
  number,
} from '@storybook/addon-knobs';

import goBackButton from './goBackButton';

storiesOf('Components / NavigationBarComponents / goBackButton', module)
  .add('entry', () => (
    <goBackButton onPress={action('onPress')} />
  ));
