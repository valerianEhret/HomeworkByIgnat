import React, {useState} from 'react';
import {hwReducer, ManType} from "./homeWorkReducer";


type PeoplePropsType = {
    peopleState:Array<ManType>
}
export function People(props:PeoplePropsType) {

    const [sort, setSort] = useState("")
    let people = props.peopleState

    if (sort === "up") people = hwReducer(props.peopleState, {type:  "SORT", payload: "up"})
    if (sort === "down") people = hwReducer(props.peopleState, {type:  "SORT", payload: "down"})
    if (sort === "18") people = hwReducer(props.peopleState, {type:  "CHECK", payload: "18"})



return (
    <div>
        <ul>
            {people.map(el => <li>{`name: ${el.name} age: ${el.age}`}</li>)}
        </ul>

        <button onClick={() => setSort("up")}>sort by name up</button>
        <button onClick={()=>setSort("down")}>sort by name down</button>
        <button onClick={()=>setSort("18")}>sort by age over 18</button>
    </div>
)
}