import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import {Layout, Divider, Input, List } from '@ui-kitten/components';
import { connect } from 'react-redux'

import CustomListItem from './CustomListItem.component.js';
import { SearchIcon } from '../module/Icons.js';
import {getPopularPeopleByName } from '../api/RequestsApi.js';


export const HomeScreen = ({ navigation, favorites }) => {
    const [searchText, setSearchText] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [popularPeople, setPopularPeople] = React.useState([]);

    const loadPopularPeople = async (name) => {
        const result = await getPopularPeopleByName(name).catch((error)=>{
            console.log(error);
        });

        setPopularPeople(result.results);
        setIsLoading(true);
    }

    React.useEffect(()=> {
        loadPopularPeople('Henry')
    }, []);

    return(
        <SafeAreaView style={style.container}>
            <Layout style={{padding: 5}}>
                <Input
                    placeholder='Recherche'
                    value={searchText}
                    accessoryRight={SearchIcon}
                    onChangeText={nextValue => setSearchText(nextValue)}
                    onSubmitEditing={()=>loadPopularPeople(searchText)}
                    onSubmitEditing={()=>loadPopularPeople(searchText)}
                />
            </Layout>
            <Divider/>
            <Layout style={{ flex: 1 }}>
                <List
                        data={popularPeople}

                        //onEndReachedThreshold = {0.5}
                        //onEndReached = {loadPopularPeople(searchText)} //excute la fonction passer une fois à 0.5 de la fin de la liste
            
                        //refreshing = {true}
                        //onRefresh = {} //actualise la liste si refreshing est true
                        extraData = {favorites}
                        renderItem={({item})=>(
                            <CustomListItem item={item}  navigation={navigation} 
                                            isFavorite = {(
                                                favorites.findIndex(elem => elem.id === item.id) !== -1
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