import React from 'react';
import { SafeAreaView } from 'react-native';
import {Layout, Button, TopNavigation, Divider } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {

    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    return(
        <SafeAreaView style={{flex: 1}}>
            <TopNavigation title='Home' alignment='center'/>
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button onPress={navigateDetails}>OPEN DETAILS</Button>
            </Layout>
        </SafeAreaView>
    );
}

export default HomeScreen;