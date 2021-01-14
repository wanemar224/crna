import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider,  IconRegistry  } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


import { AppNavigator } from './src/navigation/Navigation.component.js';
import { default as theme } from './my-theme.json';

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <AppNavigator/>
      </ApplicationProvider>
    </>
  );
}
