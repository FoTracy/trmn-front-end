import React from 'react'
import { Switch, Route} from 'react-router-dom'
import AllEvents from './allEvents'
import Login from './login'
//import Event from './event'

const Main = () => (
    <main>
        <Switch>
            <Route exact path ='/all_events' component={AllEvents} />
            <Route exact path='/login' component={Login} />
            {/*<Route path='/event' component={Event} />*/}
        </Switch>
    </main>
)

export default Main
