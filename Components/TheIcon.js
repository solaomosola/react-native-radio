import React from "react";
import {View} from "react-native";
import PropTypes from "prop-types"
import IiCon from "./iiCon";

const TheIcon = ({iconGroup, iconName, selected, style}) => {

    if (selected) 
        return (
            <View >
                <IiCon iconGroup={iconGroup} icon={iconName} style={style}/>
                
            </View>
        )
    else 
        return null;
    }

TheIcon.propTypes = {
    iconGroup: PropTypes.string,
    iconName: PropTypes.string,
    selected: PropTypes.bool
}
TheIcon.defaultProps = {
    iconGroup: "MaterialIcons",
    iconName: "lens",
    selected: false
}
export default TheIcon;