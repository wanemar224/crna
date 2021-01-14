import React from 'react';
import { SafeAreaView } from 'react-native';
import {Layout, Text, Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

import {BackIcon} from '../module/Icons.js';

const DetailsScreen = ({navigation}) => {

    const navigateBack = () => {
        navigation.goBack();
    };
    
    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    return(
        <SafeAreaView>
            <TopNavigation title='Details' alignment='center' accessoryLeft={BackAction}/>
            <Divider/>
            <Layout>
                <Text category="h1"> Details screen </ Text>
            </Layout>
        </SafeAreaView>
    );
}

export default DetailsScreen;