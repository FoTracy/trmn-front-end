import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div style={{overflow: "hidden"}}>
                <img src='/loginImage.png' alt='login' onClick={this.props.onClick} style={{height: '200px', width: '200px'}}/>
            </div>
        )
    }
}

export default Login
