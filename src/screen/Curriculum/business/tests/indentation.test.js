import {
    indentRight, 
    indentLeft
} from '../indentation';

const standards = [
    {
        "id": "one",
        "text": "Number",
        "indentation": 0
    },
    {
        "id": "two",
        "text": "Count to determine number of objects in a set",
        "indentation": 1
    },
    {
        "id": "three",
        "text": "Measurement",
        "indentation": 2
    },
    {
        "id": "four",
        "text": "Use simple fraction names in real life situation",
        "indentation": 3
    },
    {
        "id": "five",
        "text": "Describe observations about events and objects in real life situations",
        "indentation": 2
    },
    {
        "id": "six",
        "text": "Dummy standard",
        "indentation": 1
    },
];
describe("Indentendation to the right", () => {

    it("it should return false if node can't be indented", () => {  
        const updatedStandards = indentRight(standards, 3, 1);
        expect(updatedStandards).toBe(false)   
    });
    it("it should return updated standards array if node can be indented", () => {  
       
        const updatedStandards = indentRight(standards, 5, 1);

        expect(updatedStandards[5]).toEqual({
            "id": "six",
            "text": "Dummy standard",
            "indentation": 2
        })
        // expect(updatedStandards)
        //     .toContainEqual(
        //         expect.objectContaining({ 
        //             "id": "six",
        //             "text": "Dummy standard",
        //             "indentation": 2 
        //         })
        //     )
        });
});

describe("Indentendation to the left", () => {

    it("it should return false if node can't be indented", () => {  
        const updatedStandards = indentLeft(standards, 0, 1);
        expect(updatedStandards).toBe(false)   
    });
    it("it should return updated standards if node can be indented", () => {  
        const updatedStandards = indentLeft(standards, 2, 1);
        expect(updatedStandards[2]).toEqual( {
            "id": "three",
            "text": "Measurement",
            "indentation": 1
        }); 
    });

});