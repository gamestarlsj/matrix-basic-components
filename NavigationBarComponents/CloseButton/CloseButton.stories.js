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

import CloseButton from './CloseButton';

storiesOf('Components / NavigationBarComponents / CloseButton', module)
  .add('entry', () => (
    <CloseButton onPress={action('onPress')} />
  ));
