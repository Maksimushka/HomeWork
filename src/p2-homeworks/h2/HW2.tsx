import React, {useState} from "react";
import Affairs from "./Affairs";
import s from "./Affairs.module.css"

// types
export type AffairPriorityType = "high" | "low" | "middle"
export type AffairType = {
    _id: number,
    name: string,
    priority: string
}
export type FilterType = "all" | AffairPriorityType;


// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
    {_id: 6, name: "Redux", priority: "high"},
    {_id: 7, name: "Scss", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType) => {
    if (filter === "all") return affairs;
    if (filter === "high")  affairs = affairs.filter( t => t.priority === "high")
    if (filter === "middle")  affairs = affairs.filter( t => t.priority === "middle")
    if (filter === "low")  affairs = affairs.filter( t => t.priority === "low")
    return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number) => {
    affairs = affairs.filter( t => t._id !== _id)
    return affairs
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div className={s.main}>

            <h3>Homeworks 2:</h3>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    );
}

export default HW2;
