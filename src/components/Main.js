import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllEvents from './allEvents'
import Login from './login'
import UserDetails from './userDetails'
//import Event from './event'

const Main = () => (
    <main>
        <Switch>
            <Route exact path ='/all_events' component={AllEvents} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/user_details' component={UserDetails} />
            {/*<Route path='/event' component={Event} />*/}
        </Switch>
    </main>
)

export default Main
