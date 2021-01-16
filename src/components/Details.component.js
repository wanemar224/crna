import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet,  StatusBar } from 'react-native';
import {Layout, Text, Divider, TopNavigation, TopNavigationAction, Button } from '@ui-kitten/components';

import {FavoriteIcon, FavoriteIconOutline,  BackIcon} from '../module/Icons.js';
import { connect } from 'react-redux';
import { getPopublarPeopleByID } from '../api/RequestsApi.js';

const DetailsScreen = ({navigation, route, dispatch, favorites}) => {

    const { idPeople} = route.params;
    const [people, setPeople] = useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const loadingPeople = async () => {
        const result = await getPopublarPeopleByID(idPeople);
        setPeople(result);
        setIsLoading(true);
    }

    useEffect(()=> {
        loadingPeople();
    }, []);

    const navigateBack = () => {
        navigation.goBack();
    };
    
    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );
        
    const toggleFavorite= (idPeople) => {
        const action = { type: "TOGGLE_FAVORITE", value: {id:idPeople, name: people.name, known_for_department: people.known_for_department } }
        dispatch(action);
    }
    
    return(
        <SafeAreaView style={style.container}>
            <TopNavigation title='Details' alignment='center' accessoryLeft={BackAction}/>
            <Divider/>
            <Layout style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
                <Text category="h2">{people.name} - id: {people.id}</Text>
                <Text category="h5">{people.known_for_department}</Text>
                {
                    favorites.findIndex(elem => elem.id === idPeople ) !== -1 ?
                    (
                        <Button appearance="ghost" status='primary' accessoryLeft={FavoriteIcon} onPress={()=>toggleFavorite(idPeople)}/>
                    ):
                    (
                        <Button appearance="ghost" status='basic' accessoryLeft={FavoriteIconOutline} onPress={()=>toggleFavorite(idPeople)}/>
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