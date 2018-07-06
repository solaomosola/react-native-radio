import React from "react"
import {View, Text} from "react-native";

import RadioGroup from "./RadioGroup";
import Radio from "./Radio";

const TestRadio = () => {
    return (
        <View>
            <RadioGroup >
                <Radio iconName={"lens"} label={"The first option"} value={"A"}/>
                <Radio iconName={"lens"} label={"The first option"} value={"B"}/>
                <Radio iconName={"lens"} label={"The first option"} value={"C"}/>
                <Radio label={"TIme"} value={"D"}/>
            </RadioGroup>

        </View>
    )
}

export default TestRadio;