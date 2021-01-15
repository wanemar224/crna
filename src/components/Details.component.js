import React from 'react';
import { SafeAreaView, StyleSheet,  StatusBar } from 'react-native';
import {Layout, Text, Divider, TopNavigation, TopNavigationAction, Button } from '@ui-kitten/components';

import {FavoriteIcon, FavoriteIconOutline,  BackIcon} from '../module/Icons.js';
import { connect } from 'react-redux';

const DetailsScreen = ({navigation, route, dispatch, favorites}) => {

    const { idItem } = route.params;

    const navigateBack = () => {
        navigation.goBack();
    };
    
    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );
        
    const toggleFavorite= (itemId) => {
        const action = { type: "TOGGLE_FAVORITE", value: itemId }
        dispatch(action);
    }
    
    return(
        <SafeAreaView style={style.container}>
            <TopNavigation title='Details' alignment='center' accessoryLeft={BackAction}/>
            <Divider/>
            <Layout style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
                <Text category="h2">{idItem.title}</Text>
                <Text category="h5">{idItem.description}</Text>
                {
                    favorites.findIndex(item => item.title === idItem.title) !== -1 ?
                    (
                        <Button appearance="ghost" status='primary' accessoryLeft={FavoriteIcon} onPress={()=>toggleFavorite(idItem)}/>
                    ):
                    (
                        <Button appearance="ghost" status='basic' accessoryLeft={FavoriteIconOutline} onPress={()=>toggleFavorite(idItem)}/>
                    )
                }
               

            </Layout>
        </SafeAreaView>
    );
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites
    }
}
export default connect(mapStateToProps)(DetailsScreen);

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    }
})