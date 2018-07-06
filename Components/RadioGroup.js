import React, {Component} from "react";
import {View} from "react-native";
import Radio from "./Radio";
import PropTypes from "prop-types"

class RadioGroup extends Component {
    constructor(props) {
        super(props);
        let selection = ""
        this.state = {
            selection
        }
        this.setChildrenProps = this
            .setChildrenProps
            .bind(this)
    }

    getSelection = (value) => {
        let selection = value;
        this.setState({selection})
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
            <View>
                {this.setChildrenProps()}
            </View>
        )
    }
}

RadioGroup.propTypes = {
    RadioStyle: PropTypes.object,
    IconStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    coreStyle: PropTypes.object
}
RadioGroup.defaultProps = {
    RadioStyle: {
       
    },
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
    }
}

export default RadioGroup;