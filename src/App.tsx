import React, {ChangeEvent, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {setInterval} from "timers";
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { connect, MapDispatchToProps } from 'react-redux';
import {
    saveUsername as saveUsernameAction,
    saveUserMessage as saveUserMessageAction,

} from './modules/user/reducer';
import { IUser } from './modules/user/types';
import {IAppState} from "./redux/rootReducer";


const CenterContent = styled.div`
    text-align: center;
`;


interface IAppOwnProps {
    userName: string | undefined;
    userType: 'admin' | 'moderator' | 'user' | 'guest';
}

interface IAppDispatchToProps {
    saveUsername: (user: IUser) => void;
    saveUserMessage: (user: IUser) => void;
}

const App: React.FC<IAppDispatchToProps & IAppOwnProps> = (
    {
        userType,
        userName,
        saveUsername,
        saveUserMessage
    }): JSX.Element => {
    const [time, setTime] = useState(() => new Date(Date.now()))
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date(Date.now()));
        }, 1000);

        if(userName) {
            saveUsername({userName, userMessage: undefined});
        }

        return () => {
            clearInterval(timer);
        }
    }, [userName, saveUsername])

    useEffect(() => {
        saveUserMessage({userName, userMessage: message});
    }, [message, saveUserMessage]);
    //how to find React specific or lib specific types?? TypeDefinition docs or google
    const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setMessage(event.target.value);
    };
    return (
        <CenterContent>
            <div>
                <p>
                    Hi Mr. {userName ? userName : 'Mysterious Entity'}. Your
                    are: {userType ? userType : 'irrelevant because I do not know you'}
                </p>
                <p>
                    Current time is: {time.toUTCString()}
                </p>
                <input
                    type='text'
                    placeholder='Enter your message here'
                    value={message}
                    onChange={handleTextChange}
                />
                <p>
                    Your message: {message || ''}
                </p>
                <Link to='/userlist' >
                    User List
                </Link>
            </div>

        </CenterContent>
    );
}

const mapDispatchToProps: MapDispatchToProps<IAppDispatchToProps, IAppOwnProps> =
    (dispatch: Dispatch, ownProps: IAppOwnProps): IAppDispatchToProps => ({
    saveUsername: (user: IUser) => {
        dispatch(saveUsernameAction(user));
    },

    saveUserMessage: (user: IUser) => {
        dispatch(saveUserMessageAction(user));
    },
});

export default connect< {}, IAppDispatchToProps,  IAppOwnProps, IAppState
    >(null, mapDispatchToProps)(App);
