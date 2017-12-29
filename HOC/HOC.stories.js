// @flow
/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, array, text, boolean, number } from '@storybook/addon-knobs';
import {
  Text,
} from 'react-native';

import HOC from './HOC';

storiesOf('Components / HOC', module)
  .add('entry', () => (
    <Text>HOC</Text>
  ))
