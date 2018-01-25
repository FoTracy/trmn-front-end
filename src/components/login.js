import React, {Component} from 'react'
//import LoginButton from './loginButton'
import LoginFields from './loginFields'

import '../App.css'

class Login extends Component {

    // constructor(props) {
    //     super(props)
    //     this.enterText = this.enterText.bind(this)
    //     this.state = {
    //         userNameText: 'user name',
    //         pswdText: 'pswd',
    //         textEntry: false
    //     }
    // }
    //
    // async enterText() {
    //     if (!this.state.textEntry) {
    //         await this.clearText()
    //         this.allowText()
    //         this.setState({textEntry: true})
    //     }
    // }
    //
    // clearText() {
    //     this.setState({
    //         userNameText: '',
    //         pswdText: ''
    //     })
    // }
    //
    // allowText() {
    //     this.setState({
    //         userNameText: null,
    //         pswdText: null
    //     })
    // }

    render() {
        return (
            <div className="login">
                <div className="login-header">
                </div>
                <div className="login-fields" >
                    <LoginFields />  {/*  userNameText={this.state.userNameText} pswdText={this.state.pswdText} onFocus={this.enterText} />*/}
                </div>
            </div>
        )
    }
}

export default Login
