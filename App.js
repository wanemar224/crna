import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider,  IconRegistry, Layout, Spinner  } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor } from './src/store/configStore.js';

import { AppNavigator } from './src/navigation/Navigation.component.js';
import { default as theme } from './my-theme.json';

export default function App() {
  const renderLoading = () => {
    return (
        <Layout>                
            <Spinner size='large' />
        </Layout>        
    );    
  };

  return (
    
    <Provider store= { store }>
      <PersistGate loading={renderLoading} persistor={persistor}/>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <AppNavigator/>
      </ApplicationProvider>
    </Provider>
   
  );
}
