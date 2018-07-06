import React from "react";
import {View} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

//React-native-vector-icon v4.6.0

const IiCon = ({iconGroup, icon, style}) => {

    if (iconGroup === "MaterialIcons") 
        return (
            <View>
                <MaterialIcons name={icon} style={style}/>
            </View>
        )
    else if (iconGroup === "Entypo") 
        return (
            <View>
                <Entypo name={icon} style={style}/>
            </View>
        )
    else if (iconGroup === "EvilIcons") 
        return (
            <View>
                <EvilIcons name={icon} style={style}/>
            </View>
        )
    else if (iconGroup === "Feather") 
        return (
            <View>
                <Feather name={icon} style={style}/>
            </View>
        )
    else if (iconGroup === "FontAwesome") 
        return (
            <View>
                <FontAwesome name={icon} style={style}/>
            </View>
        )
    else if (iconGroup === "Foundation") 
        return (
            <View>
                <Foundation name={icon} style={style}/>
            </View>
        )
    else if (iconGroup === "Ionicons") 
        return (
            <View>
                <Ionicons name={icon} style={style}/>
            </View>
        )
    else if (iconGroup === "MaterialCommunityIcons") 
        return (
            <View>
                <MaterialCommunityIcons name={icon} style={style}/>
            </View>
        )
    else if (iconGroup === "Octicons") 
        return (
            <View>
                <Octicons name={icon} style={style}/>
            </View>
        )
    else if (iconGroup === "Zocial") 
        return (
            <View>
                <Zocial name={icon} style={style}/>
            </View>
        )
    else if (iconGroup === "SimpleLineIcons") 
        return (
            <View>
                <SimpleLineIcons name={icon} style={style}/>
            </View>
        )

    else 

        return (
            <View></View>
        )
}

export default IiCon;