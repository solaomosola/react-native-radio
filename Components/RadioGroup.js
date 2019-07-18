import React, {Component} from "react";
import {View} from "react-native";
import PropTypes from "prop-types"
import * as styles from "./Style/Style"

class RadioGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: '',
        };
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
    getSelection = (selection) => {
        this.setState({selection})
        this.props.getChecked(value)

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
            <View
                style={[styles.RadioGroupStyle.main, this.props.RadioGroupStyle]}>
                {this.setChildrenProps()}
            </View>
        )
    }
}

RadioGroup.propTypes = {

    RadioStyle: PropTypes.object,
    IconStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    coreStyle: PropTypes.object,
    getChecked: PropTypes.func,
    RadioGroupStyle:PropTypes.object
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
    RadioGroupStyle: {
       
    }
}

export default RadioGroup;
