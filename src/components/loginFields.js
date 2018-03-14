import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import userDetails from './userDetails'

class loginFields extends React.Component {

    constructor(props) {
        super(props)
        this.enterText = this.enterText.bind(this)
        this.saveName = this.saveName.bind(this)
        this.savePswd = this.savePswd.bind(this)
        this.authenticateUser = this.authenticateUser.bind(this)
        this.login = this.login.bind(this)
        this.state = {
            nameText: 'user name',
            pswdText: 'pswd',
            textEntry: false,
            loginMessage: ''
        }
    }

    async enterText() {
        if (!this.state.textEntry) {
            await this.clearText()
            this.setState({textEntry: true})
        }
    }

    clearText() {
        this.setState({
            nameText: '',
            pswdText: ''
        })
    }

    saveName(event) {
        this.setState({
            nameText: event.target.value,
        })
    }

    savePswd(event) {
        this.setState({
            pswdText: event.target.value
        })
    }

    async login() {
        await this.authenticateUser()
        alert(this.state.loginMessage)

    }

    authenticateUser() {  // of course, should all be handled on the back end
        for (var i = 0; i < this.userJson.length; i++) {
            console.log('userName: ' + this.userJson[i].userName)
            console.log('userName: ' + this.userJson[i].password)
            if (this.userJson[i].userName === this.state.nameText) {
                if (this.userJson[i].password === this.state.pswdText) {
                    // allow redirection and login user
                    //this.setState({loginMessage: 'you are logged in!'})
                    <Link to='/user_details'></Link>
                } else {
                    //update screen with error
                    this.setState({loginMessage: 'Wrong password, loser!'})
                }
                break
            } else {
                this.setState({loginMessage: 'User Name "' + this.state.nameText + '" not recognized'})
            }
        }
    }

    render() {
        return (
            <div>
                <br />
                <form onSubmit={this.login}>
                    <input
                        type={'text'}
                        name={'user name'}
                        value={this.state.nameText}
                        className={'text-box'}
                        id={'name-text'}
                        onFocus={this.enterText}
                        onChange={this.saveName}
                    />
                    <br/>
                    <input
                        type={'text'}
                        name={'password'}
                        value={this.state.pswdText}
                        className={'text-box'}
                        id={'pswd-text'}
                        onFocus={this.enterText}
                        onChange={this.savePswd}
                    />
                    <br />
                    <input type={'submit'} value={'submit'} className={'button'} />
                </form>
                <button className={'button'}>  {/*onClick={this.props.guestClick}>*/}
                    <Link to='/all_events' className='internal-link'>
                        guest
                    </Link>
                </button>
            </div>
        )
    }

    userJson  = [
        {
            'id':1,
            'userName':'Fo',
            'siteMaster':true,
            'password':'fopass',
            'favRaces':null,
            'created':1508782707000
        },
        {
            'id':2,
            'userName':'Saai',
            'siteMaster':false,
            'password':'saaipass',
            'favRaces':null,
            'created':1508782707000
        }
    ]
}

export default loginFields
