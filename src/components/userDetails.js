import '../App.css'
import React from 'react'
import axios from 'axios'

//using REST calls as described here : https://hackernoon.com/tutorial-how-to-make-http-requests-in-react-part-3-daa6b31b66be

class userDetails extends React.Component{

    constructor(props) {
        super(props)
        this.fetchUserDetails = this.fetchUserDetails.bind(this)
        this.state = {
            id: '1'
        }
    }

    componentDidMount() {
        this.fetchUserDetails(this.state.id)
    }

    fetchUserDetails(id) {
        axios.get('http://forresttracy.com:1313/service/user?id=' + id) // TODO make user_id dynamic
            .then(response => console.log(response))
    }

    render() {
        return (
            <div>
                Hello. User details in the console, right now.
            </div>
        )
    }
}

export default userDetails
