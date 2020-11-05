import { combineReducers, Reducer } from 'redux';
import userReducer from '../modules/user/reducer';
import {IUser, MODULE_NAME as USER_MODULE} from "../modules/user/types";

export interface IAppState {
    user: IUser,
    friendList: string[],
    contact: string[]
}

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
    [USER_MODULE]: userReducer
} as any);
