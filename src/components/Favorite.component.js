import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Divider, Layout, List, TopNavigation } from '@ui-kitten/components';

import { connect } from 'react-redux';
import CustomListItem from './CustomListItem.component.js';

const FavoriteScreen = ({favorites, navigation}) => {

    return (
        <SafeAreaView style={style.container}>
            <TopNavigation title='Mes favoris' alignment='center' />
            <Divider></Divider>
            <Layout style={{flex: 1}}>
            <List
                data={favorites}
                    // onEndReachedThreshold = {0.5}
                     //onEndReached = {} //excute la fonction passer une fois à 0.5 de la fin de la liste
         
                     //refreshing = {true}
                     //onRefresh = {} //actualise la liste si refreshing est true
                extraData = {favorites}
                renderItem={({item, index})=>(
                    <CustomListItem item={item} index={index} navigation={navigation} 
                                    isFavorite={(
                                        favorites.findIndex(i => i.title === item.title) !== -1
                                    )? true : false}
                    />
                )}
            />
            </Layout>
        </SafeAreaView>
    );
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites
      }
}

export default connect(mapStateToProps)(FavoriteScreen);

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    }
})