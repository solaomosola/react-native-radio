import React from 'react';
import Radio from "../Components/Radio";
import renderer from 'react-test-renderer';

describe("#Radio Button", () => {

    let result = <Radio
        iconName={"lens"}
        showCore={true}
        label={"The first option"}
        value={"A"}
        
        />
        
    const rendered = renderer
        .create(result)
        .toJSON();
    
    test('renders wtesthout crashing', () => {
        expect(rendered).toBeTruthy();
    })

    test("Should have a view", () => {
        let typ = rendered["type"];
        expect(rendered).toHaveProperty("type")
        expect(typ).toEqual("View")
    })
    test("Should have at most one Icon", () => {})
    test("Can have Style", () => {})
    test("When Clicked should return a value", () => {})
    test("When click, should insert icon", () => {})
    test("Should have a value", () => {})
    test("Can display text", () => {})
    test("Can display image", () => {})
})