import {PeopleType} from '../HW8';


export const homeWorkReducer = (state: PeopleType[], action: any): PeopleType[] => {
    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                state.sort( function(a, b){
                    if(a.name < b.name)  return -1
                    if(a.name > b.name)  return 1
                    return 0
                })
            }
            if (action.payload === "down") {
                state.sort( function(a, b){
                    if(a.name < b.name)  return -1
                    if(a.name > b.name)  return 1
                    return 0
                })
                state.reverse()
            }
            return [...state]
        }
        case "check": {
            return state.filter(p => p.age > action.payload)
        }
        default: return state
    }
};