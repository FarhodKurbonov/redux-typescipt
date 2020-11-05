export interface IUser {
    userName: string | undefined;
    userMessage: string | undefined;
}

export enum UserActions {
    SAVE_USERNAME = 'SAVE_USERNAME',
    SAVE_USER_MESSAGE = 'SAVE_USER_MESSAGE',

}

interface ISaveUserNameAction {
    type: typeof UserActions.SAVE_USERNAME,
    payload: IUser
}
interface ISaveUserMessageAction {
    type: typeof UserActions.SAVE_USER_MESSAGE,
    payload: IUser
}

export type TUserActionTypes = ISaveUserMessageAction | ISaveUserNameAction

