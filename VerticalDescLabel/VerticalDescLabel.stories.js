// @flow
/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import VerticalDescLabel from './VerticalDescLabel';

storiesOf('Components / VerticalDescLabel', module)
   .add('entry', () => (
     <VerticalDescLabel
       value={number('value', '123')}
       description={text('description', '距离(千米)')}
     />
  ));
