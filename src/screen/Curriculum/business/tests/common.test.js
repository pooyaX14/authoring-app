import {
    getDescendantNodeIndexes
} from '../common';


describe("Get Descendent Node Indexes", () => {

    test("it should return the indexes of the current node's children", () => {
        //Given

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
        
        // When
        const descendentNodes = getDescendantNodeIndexes(standards, 1);

        // Then

        expect(descendentNodes).toHaveLength(3);
        expect(descendentNodes).toEqual([2, 3, 4]);
    });
});