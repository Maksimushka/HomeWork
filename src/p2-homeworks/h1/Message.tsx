import React from "react";
import s from "./Message.module.css";

type MessageDataType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props: MessageDataType) {
    return (
        <div className={s.message}>
            <img className={s.img__message} src={props.avatar} alt="avatar"/>
            <div className={s.body_message}>
                <span className={s.name_body_message}>{props.name}</span>
                <span className={s.message_body_message}>{props.message}</span>
                <span className={s.time_body_message}>{props.time}</span>
            </div>
        </div>
    );
}

export default Message;
