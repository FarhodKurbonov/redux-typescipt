import {APP_NAME} from "../../config";

export const MODULE_NAME = 'auth'
export const SAVE_USERNAME = `${APP_NAME}/${MODULE_NAME}/SAVE_USERNAME`
export const SAVE_USER_MESSAGE = `${APP_NAME}/${MODULE_NAME}/SAVE_USER_MESSAGE`
export const SAVE_FRIENDS = `${APP_NAME}/${MODULE_NAME}/SAVE_FRIENDS`

export interface IUser {
    userName: string | undefined;
    userMessage: string | undefined;
    friendList?: string[] | undefined;
}

interface ISaveUsernameAction {
    type: typeof SAVE_USERNAME,
    payload: IUser
}

interface ISaveUserMessageAction {
    type: typeof SAVE_USER_MESSAGE,
    payload: IUser
}

interface ISaveFriendsAction {
    type: typeof SAVE_FRIENDS,
    payload: string[]
}

export type IUserActionTypes = ISaveUsernameAction | ISaveUserMessageAction | ISaveFriendsAction;

