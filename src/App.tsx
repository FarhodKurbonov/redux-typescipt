import React, {useState, useEffect, ChangeEvent, MouseEvent} from 'react';
import './App.css';
import {Link} from "react-router-dom";
import styled from 'styled-components'
/**
 * Interface naming convention
 * I + ComponentName + DescriptiveUsage = Interface Name
 * I + App + OwnProps = IAppOwnProps
 */

const CenterContent = styled.div`
    text-align: center;
`


interface IAppOwnProps {
    userName: string | undefined;
    userType: 'admin' | 'moderator' | 'user' | 'guest';

}


const  App: React.FC<IAppOwnProps> = ({userName, userType}): JSX.Element => {
    const [time, setTime] = useState(()=> new Date(Date.now()))
    const [message, setMessage] = useState<string>('')
    useEffect(()=> {
        const timer = setInterval(() => {
            setTime(new Date(Date.now()))
        }, 1000)
        return ()=> {
            clearInterval(timer)
        }
    }, )

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setMessage(event.target.value)
        console.info(``)
    }

  return (
      <CenterContent>
          <div className="App">
              Hi Mr. {userName? userName: 'Mysterious Entity'}. You are {userType? userType: 'sorry we do not know you' }
              <p>
                  Current Time is: {time.toUTCString()}
              </p>

              <input type="text"
                     value={message}
                     onChange={handleTextChange}
              />
              <p> your message is : { message || '' }</p>

              <Link to='/userlist'> User List </Link>
          </div>
      </CenterContent>

  );
}

export default App;
