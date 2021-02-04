import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.defaultInput

    return (
        <div className={s.greeting}>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyPress={ onKeyPressHandler }
                   className={inputClass}/>
            <span className={s.ERROR}>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers} users</span>
        </div>
    );
}

export default Greeting;
