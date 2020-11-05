import {IUser, TUserActionTypes, UserActions} from "./UserTypes";

export function saveUserName(user: IUser): TUserActionTypes {
    return {
        type: UserActions.SAVE_USERNAME,
        payload: user
    }
}

export function saveUserMessage(user: IUser): TUserActionTypes {
    return {
        type: UserActions.SAVE_USER_MESSAGE,
        payload: user
    }
}
