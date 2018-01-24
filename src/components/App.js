import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Main from './Main'
import LoginButton from './loginButton'
//import LoginFields from './loginFields'
//import Login from './login'

//installs needed:
// npm install --save react-router-dom
//  then ran : yarn install --add react-router-dom   -> not sure why I had to to the 'npm' one first
//  http://forresttracy.com:1313/service/all_events
//  http://forresttracy.com:1313/service/event?id=2
//  http://forresttracy.com:1313/service/user?id=1

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loginVisibility: '',
            userNameText: 'user name',
            pswdText: 'pswd',
            textEntry: false
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1 className="App-title">
                        <div className="Welcome-words" style={{visibility: this.state.loginVisibility}}>
                            Welcome to TRMN
                        </div>
                    </h1>
                    <div className={"login-circle"}>
                        <Link to='/login'>
                            <LoginButton />
                        </Link>
                    </div>
                </div>
                <div className="Main">
                    <Main />
                </div>
            </div>
        )
    }
}

export default App
