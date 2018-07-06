import React from 'react';
import RadioGroup from "../Components/RadioGroup";
import renderer from 'react-test-renderer';

describe("#The Radio Group", () => {
    let result = <RadioGroup/>
    const rendered = renderer
        .create(result)
        .toJSON();
    
    describe("#Radio Group", () => {
        test('renders without crashing', () => {
            expect(rendered).toBeTruthy();
        })
        test("Should Render Children Correctly", () => {})
        test("Can Have Style", () => {})
        test("When Child is Clicked, return Value", () => {})
    })

})