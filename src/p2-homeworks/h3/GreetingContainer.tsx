import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = (
    {users, addUserCallback}) => {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.currentTarget.value
        setName(name)
    };

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => { if(e.charCode === 13) addUser() }

    const addUser = () => {
        if (name) {
            addUserCallback(name)
            alert(`Hello ${name}!`)
            setName("")
            setError("")
        } else {
            setError("Please, enter your name!")
        }
    };

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onKeyPressHandler={ onKeyPressHandler }
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
