type ChangeThemeACType = {
    type: 'CHANGE_THEME',
    value: string
}
export type ThemeReducerStateType = {
    theme: string
}
type ActionType = ChangeThemeACType


const initState: ThemeReducerStateType = {
    theme: 'dark'
};

export const themeReducer = (state = initState, action: ActionType): ThemeReducerStateType => {
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {...state, theme: action.value}
        }
        default: return state;
    }
};

export const changeThemeAC = (value: string): ChangeThemeACType => ({
    type: 'CHANGE_THEME',
    value
})
