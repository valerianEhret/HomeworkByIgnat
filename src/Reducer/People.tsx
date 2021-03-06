import React, {useState} from 'react';
import {checkOver18AC, hwReducer, ManType, sortUpAC, sortUpDownAC} from "./homeWorkReducer";


type PeoplePropsType = {
    peopleState: Array<ManType>
}

export function People(props: PeoplePropsType) {

    const [sort, setSort] = useState("")
    let people = props.peopleState

    if (sort === "up") people = hwReducer(props.peopleState, sortUpAC())
    if (sort === "down") people = hwReducer(props.peopleState, sortUpDownAC())
    if (sort === "18") people = hwReducer(props.peopleState, checkOver18AC())


    return (
        <div>
            <ul>
                {people.map(el => <li>{`name: ${el.name} age: ${el.age}`}</li>)}
            </ul>

            <button onClick={() => setSort("up")}>sort by name up</button>
            <button onClick={() => setSort("down")}>sort by name down</button>
            <button onClick={() => setSort("18")}>sort by age over 18</button>
        </div>
    )
}