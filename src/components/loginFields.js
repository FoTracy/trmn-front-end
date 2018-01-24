import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

class loginFields extends React.Component {
    render() {
        return (
            <div>
                <br />
                <form action={' define a service to call '}>
                    <input
                        type={'text'}
                        name={'user name'}
                        value={this.props.userNameText}
                        className={'text-box'}
                        id={'user-name-text'}
                        onFocus={this.props.onFocus}
                    />
                    <br/>
                    <input
                        type={'text'}
                        name={'password'}
                        value={this.props.pswdText}
                        className={'text-box'}
                        id={'pswd-text'}
                        onFocus={this.props.onFocus}
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
}

export default loginFields
