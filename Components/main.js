import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import PropTypes from "prop-types"
import TheIcon from "./TheIcon";
import * as Styles from "./Style/Style";

class RadioGroup extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        let selection = ""
        this.state = {
            selection
        }
        this.setChildrenProps = this
            .setChildrenProps
            .bind(this)
    }
    /**
 *getSelection
 *This implements the selection
 *
 * @memberof RadioGroup
 */
    getSelection = (value) => {
        let selection = value;
        this.setState({selection})
        this
            .props
            .getChecked(value)

    }
    setChildrenProps = () => {
        return React
            .Children
            .map(this.props.children, child => {
                return React.cloneElement(child, {
                    selection: this.state.selection,
                    getSelection: this.getSelection,
                    RadioStyle: this.props.RadioStyle,
                    IconStyle: this.props.IconStyle,
                    labelStyle: this.props.labelStyle,
                    coreStyle: this.props.coreStyle
                })
            })

    }

    render = () => {
        return (
            <View style={[Styles.RadioGroupStyle.main, this.props.RadioGroupStyle]}>
                {this.setChildrenProps()}
            </View>
        )
    }
}

export const Radio = ({
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
                        iconGroup={iconGroup}
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

RadioGroup.propTypes = {

    RadioStyle: PropTypes.object,
    IconStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    coreStyle: PropTypes.object,
    getChecked: PropTypes.func,
    RadioGroupStyle: PropTypes.object
}
RadioGroup.defaultProps = {
    RadioStyle: {},
    IconStyle: {
        backgroundColor: "transparent"
        //color: "black"
    },
    labelStyle: {
        //color: "black"
    },
    coreStyle: {
        fontSize: 20,
        alignSelf: "center"
    },
    RadioGroupStyle: {}
}

export default RadioGroup;
