import React, {useState, useEffect} from 'react';
import './App.css';

/**
 * Interface naming convention
 * I + ComponentName + DescriptiveUsage = Interface Name
 * I + App + OwnProps = IAppOwnProps
 */

interface IAppOwnProps {
    userName: string | undefined;
    userType: 'admin' | 'moderator' | 'user' | 'guest';

}

const  App: React.FC<IAppOwnProps> = ({userName, userType}): JSX.Element => {
    const [time, setTime] = useState(()=> new Date(Date.now()))
    useEffect(()=> {
        const timer = setInterval(() => {
            setTime(new Date(Date.now()))
        }, 1000)
        return ()=> {
            clearInterval(timer)
        }
    }, )

    setInterval(()=> {
        setTime(new Date(Date.now()))
    }, 1000)

  return (
    <div className="App">
     Hi Mr. {userName? userName: 'Mysterious Entity'}. You are {userType? userType: 'sorry we do not know you' }
     <p>
         Current Time is: {time.toUTCString()}
     </p>
    </div>
  );
}

export default App;
