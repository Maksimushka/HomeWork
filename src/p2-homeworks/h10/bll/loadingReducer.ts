type LoadingACType = {
    type: 'SET_LOADING'
    payload: boolean
}

type LoadingReducerStateType = {
    loaderValue: boolean
}
export type ActionType = LoadingACType


const initState: LoadingReducerStateType = {
    loaderValue: false
};

export const loadingReducer = (state: LoadingReducerStateType = initState, action: ActionType): LoadingReducerStateType => { // fix any
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, loaderValue: action.payload};
        }
        default:
            return state;
    }
};

export const loadingAC = (value: boolean): LoadingACType => ({
    type: 'SET_LOADING',
    payload: value
})