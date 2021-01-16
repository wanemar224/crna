import React from 'react';
import { Image } from 'react-native';
import { Button, Icon, ListItem } from '@ui-kitten/components';

import { FavoriteIconOutline, FavoriteIcon } from '../module/Icons.js';
import { getImagePeople } from '../api/RequestsApi.js';



const CustomListItem = ({item , navigation, isFavorite}) => {

    const renderItemAccessory = (item) => (
        isFavorite ? 
            <Button appearance="ghost" status='primary' accessoryLeft={FavoriteIcon} onPress={()=>getIdItem(item)} />
        :
            <Button appearance='ghost'  status='basic' accessoryLeft={FavoriteIconOutline} onPress={()=>getIdItem(item)} />
    );

    const imgPeople = (link) => (
        <Image source={{ uri: getImagePeople(link) }}/>
    );
    
    const getIdItem = (idItem) => {
        navigation.navigate("Details", { idPeople: idItem })
    }
    
    return (
        <ListItem
          title={`${item.name} - pour id :${item.id}`}
          description={`${item.known_for_department}`}
          accessoryLeft={()=>imgPeople(item.profile_path)}
          accessoryRight={()=>renderItemAccessory(item.id)}
          onPress = {()=> getIdItem(item.id)}
        />
    );
}

export default CustomListItem;

