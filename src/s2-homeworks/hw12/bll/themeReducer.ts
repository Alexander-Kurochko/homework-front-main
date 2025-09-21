import {combineReducers, createStore} from 'redux';

export type ThemeStateType = {
    themeId: number
}

export type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

type ThemeActionsType = ChangeThemeIdActionType

const initState: ThemeStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ThemeActionsType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix

const rootReducer = combineReducers({
    theme: themeReducer,
    // другие редьюсеры, если будут — сюда
})

// 2. Создаём store
export const store = createStore(rootReducer)

// 3. Экспортируем тип RootState — он нужен для useSelector
export type RootState = ReturnType<typeof rootReducer>// any