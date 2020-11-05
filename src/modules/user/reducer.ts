import {
    IUser,
    IUserActionTypes, SAVE_USER_MESSAGE, SAVE_USERNAME, SAVE_FRIENDS
} from './types';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';



const INITIAL_STATE: IUser = {
    userName: undefined,
    userMessage: undefined,
    friendList: undefined
}

export default function reducer(prevState: IUser = INITIAL_STATE, action: IUserActionTypes) {
    switch (action.type) {
        case SAVE_USERNAME:
            return {
                ...prevState,
                userName: (action.payload as IUser).userName
            }
        case SAVE_USER_MESSAGE  :
            return {
                ...prevState,
                userMessage: (action.payload as IUser).userMessage
            }
        case SAVE_FRIENDS:
            return {
                ...prevState,
                friendList: action.payload as string[]
            };
        default:
            return prevState;
    }
}

export function saveUsername(user: IUser): IUserActionTypes {
    return {
        type: SAVE_USERNAME,
        payload: user
    };
}

export function saveUserMessage(user: IUser): IUserActionTypes {
    return {
        type: SAVE_USER_MESSAGE,
        payload: user
    };
}

export function getFriendList(url: string) {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise<void>(async (resolve) => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                });

                const friends = await response.json();
                if (!friends) {
                    throw new Error('Could not fetch friends');
                }

                const friendList = friends.map((f: any) => f.name);
                dispatch(saveFriends(friendList));
            } catch (error) {
                console.error(error);
            }
        });
    };
}

export function saveFriends(users: string[]): IUserActionTypes {
    return {
        type: SAVE_FRIENDS,
        payload: users
    };
}
