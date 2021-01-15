import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import {Layout, Divider, Input, List } from '@ui-kitten/components';
import { connect } from 'react-redux'

import CustomListItem from './CustomListItem.component.js';
import { SearchIcon } from '../module/Icons.js';

const data = new Array(25).fill({
    title: 'Title for Item',
    description: 'Description for Item',
});

export const HomeScreen = ({ navigation, favorites }) => {
    const [value, setValue] = React.useState('');
    return(
        <SafeAreaView style={style.container}>
            <Layout style={{padding: 5}}>
                <Input
                    placeholder='Recherche'
                    value={value}
                    accessoryRight={SearchIcon}
                    onChangeText={nextValue => setValue(nextValue)}
                />
            </Layout>
            <Divider/>
            <Layout style={{ flex: 1 }}>
                <List
                    data={data}

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
export default connect(mapStateToProps)(HomeScreen);

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    }
})