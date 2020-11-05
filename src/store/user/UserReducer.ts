import {IUser, TUserActionTypes, UserActions} from "./UserTypes";


const initialState: IUser = {
    userName: undefined,
    userMessage: undefined
}


export function userReducer(state: IUser = initialState, action: TUserActionTypes) {

    switch (action.type) {
        case UserActions.SAVE_USERNAME:
            return {
                ...state,
                userName: action.payload.userName
            }
        case UserActions.SAVE_USER_MESSAGE:
            return {
                ...state,
                userMessage: action.payload.userMessage
            }
        default:
            const x: never = action

    }
    return  state
}
