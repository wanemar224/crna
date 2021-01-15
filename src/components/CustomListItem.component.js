import React,{useReducer} from 'react';
import { Button, Icon, ListItem } from '@ui-kitten/components';

import { FavoriteIconOutline, FavoriteIcon } from '../module/Icons.js';
import { connect } from 'react-redux';


const CustomListItem = ({item, index , navigation, isFavorite}) => {

    const renderItemAccessory = (item) => (
        isFavorite ? 
            <Button appearance="ghost" status='primary' accessoryLeft={FavoriteIcon} onPress={()=>getIdItem(item)} />
        :
            <Button appearance='ghost'  status='basic' accessoryLeft={FavoriteIconOutline} onPress={()=>getIdItem(item)} />
    );

    const renderItemIcon = (props) => (
        <Icon {...props} name='person'/>
    );
    
    const getIdItem = (idItem) => {
        navigation.navigate("Details", { idItem: idItem })
    }
    
    return (
        <ListItem
          title={`${item.title} ${index + 1}`}
          description={`${item.description} ${index + 1}`}
          accessoryLeft={renderItemIcon}
          accessoryRight={()=>renderItemAccessory(item)}
          onPress = {()=> getIdItem(item)}
        />
    );
}

export default CustomListItem;

