import {StyleSheet} from "react-native";

export const IconStyle = StyleSheet.create({
    main: {
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "black",
        width: 24,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        margin: 5
    }
})

export const RadioStyle = StyleSheet.create({
    main: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 2
    }
})
export const labelStyle = StyleSheet.create({main: {}})

export const coreStyle = StyleSheet.create({
    main: {
        fontSize: 20
    }
})
export const RadioGroupStyle = StyleSheet.create({
    main:{
        flexDirection:"column"
    }
})
