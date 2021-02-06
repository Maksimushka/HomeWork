import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import { v1 } from "uuid";
import s from "./Greeting.module.css"

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string) => {
        let newUser = {_id: v1(), name: name}
        setUsers([newUser, ...users])
    }
    return (
        <div className={s.main}>
            <hr/>
            <h3>Homeworks 3:</h3>

            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}
            />

            <hr/>
        </div>
    );
}

export default HW3;
