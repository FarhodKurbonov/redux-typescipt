import React, {useEffect, useState} from 'react';
import {IUser} from "../modules/user/types";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { IAppState } from '../redux/rootReducer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getFriendList as getFriendListAction } from '../modules/user/reducer'

//Own props specifies props of components
//it is being used to differentiate redux store props from component own props
interface IUserListOwnProps {

}

interface IUserListStateToProps {
    user?: IUser
}

interface IUserListDispatchToProps {
    getFriendList?: (url: string) => void;
}

type IUserList = IUserListStateToProps & IUserListDispatchToProps & IUserListOwnProps;


const CenterContent = styled.div`
    text-align: center;
`;

export const UserList: React.FC<IUserList> = ({user= undefined, getFriendList}): JSX.Element => {
    const [fetchFriends, setFetchFriends] = useState<boolean>(true);

    useEffect(() => {
        if( fetchFriends ) {
            if (getFriendList) {
                getFriendList('https://jsonplaceholder.typicode.com/users')
            }
            setFetchFriends(false);
        }

    }, );

    let friendListJsx: JSX.Element | undefined = undefined;

    if(user?.friendList) {
        friendListJsx = (
            <ul>
                {user.friendList.map((friend) => <li key={friend}>{friend}</li>)}
            </ul>
        )
    }

    return (
        <CenterContent>
            <p>
                UserList
            </p>
            <Link
                to='/'
            >
                Home
            </Link>
            <h3>
                Friend List
            </h3>
            {friendListJsx ? friendListJsx : null}
        </CenterContent>
    );
}

const mapStateToProps: MapStateToProps<IUserListStateToProps, IUserListOwnProps, IAppState> =
    (state: IAppState, ownProps: IUserListOwnProps): IUserListStateToProps => ({
    user: state.user,
    ...ownProps
});

const mapDispatchToProps: MapDispatchToProps<IUserListDispatchToProps, IUserListOwnProps> =
    (dispatch: ThunkDispatch<{}, {}, AnyAction>, ownProps: IUserListOwnProps) => ({
    getFriendList: async (url: string) => {
       await dispatch(getFriendListAction(url));
    }
});
export default connect <IUserListStateToProps,
    IUserListDispatchToProps,
    IUserListOwnProps,
    IAppState>(mapStateToProps, mapDispatchToProps)(UserList);
