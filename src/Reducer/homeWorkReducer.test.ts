import {checkOver18AC, hwReducer, ManType, sortUpAC, sortUpDownAC} from "./homeWorkReducer";
import {v1} from "uuid";

const startState:Array<ManType> = [
    {id:v1(), name: "Valerian", age:33},
    {id:v1(), name: "Mark", age:6},
    {id:v1(), name: "Zoe", age:4},
    {id:v1(), name: "Natalia", age:33},
]

test('array should be sorted by name in ascending order',()=> {

    const endState = hwReducer(startState, sortUpAC())

    expect(endState[0].name).toBe("Mark");
    expect(endState[1].name).toBe("Natalia");
    expect(endState[2].name).toBe("Valerian");
    expect(endState[3].name).toBe("Zoe");
})

test('array should be sorted by name in descending order',()=> {

    const endState = hwReducer(startState, sortUpDownAC())

    expect(endState[3].name).toBe("Mark");
    expect(endState[2].name).toBe("Natalia");
    expect(endState[1].name).toBe("Valerian");
    expect(endState[0].name).toBe("Zoe");
})

test('array should be sorted by age over 18',()=> {

    const endState = hwReducer(startState, checkOver18AC())

    expect(endState.length).toBe(2);
    expect(endState[1].name).toBe("Natalia");
})