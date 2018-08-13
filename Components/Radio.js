import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import PropTypes from "prop-types"
import TheIcon from "./TheIcon";
import * as Styles from "./Style/Style";

const Radio = ({
    iconGroup,
    iconName,
    selection,
    label,
    value,
    getSelection,
    RadioStyle,
    IconStyle,
    labelStyle,
    coreStyle
}) => {

    let selected = selection === value;

    return (
        <View>
            <TouchableOpacity
                onPress={getSelection.bind(this, value)}
                style={[Styles.RadioStyle.main, RadioStyle]}>
                <View style={[Styles.IconStyle.main, IconStyle]}>
                    <TheIcon
                        iconGroup
                        ={iconGroup}
                        iconName={iconName}
                        selected={selected}
                        style={coreStyle}/>
                </View>
                <Text style={[Styles.labelStyle.main, labelStyle]}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

Radio.propTypes = {
    iconName: PropTypes.string,
    selection: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    selected: PropTypes.bool,
    label: PropTypes.string.isRequired,
    value: PropTypes
        .oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    getSelection: PropTypes.func

}
Radio.defaultProps = {
    iconGroup: "MaterialIcons",
    iconName: "lens",
    selected: false

}
export default Radio;