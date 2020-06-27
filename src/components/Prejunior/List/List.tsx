import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {InputNya} from "../../InputNya";
import {ButtonNya} from "../../ButtonNya";


export type NamesType = {
    id: string
    name: string
}

type ListPropsType = {
    names: Array<NamesType>
    removeNames: (id: string) => void
    addName: (value: string) => void
    greeting: (value: string) => void
}

export function List(props: ListPropsType) {

    const [value, setValue] = useState("");
    const [error, setError] = useState<string>("")


    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError("")

    }

    const onClickHandler = () => {
        if (value.trim() !== "") {
            props.addName(value)
            setValue("")
            props.greeting(value)
        } else {
            setError("Title is requaried")
        }
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {

        if (value.trim() !== "") {
            if (e.charCode === 13) {
                props.addName(value);
                setValue("");
            }
        } else {
            setError("Title is requaried")
        }
    }

    return (
        <div>
            <div>
                <h3>List of students</h3>
            </div>
            <div>
                <InputNya type="text"
                          value={value}
                          onChange={onChangeHandler}
                          error={error}
                          onEnter={onEnter}
                />
                <ButtonNya onClick={onClickHandler}/>
            </div>
            <div>
                <ul>{props.names.map(el =>
                    <li key={el.id}>
                        <button onClick={() => {
                            props.removeNames(el.id)
                        }}>
                            kick
                        </button>
                        {el.name}
                    </li>)}
                </ul>
            </div>
            <div>
                <span>Number of students:{props.names.length}</span>
            </div>
        </div>

    )
}