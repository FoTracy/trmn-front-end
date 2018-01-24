import React, {Component} from 'react'
import '../App.css'

class allEvents extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loginVisibility: 'hidden',
            all_events: [],
            jsonData: this.jsonData
        }
    }

    proxyUrl = 'https://cors-anywhere.herokuapp.com/'  // TODO long-term -> need to figure out CORS stuff for my REST service
    targetUrl = 'http://forresttracy.com:1313/service/all_events'

    // componentDidMount() {
    //     fetch((this.proxyUrl + this.targetUrl), {
    //         method: 'GET',
    //         dataType: 'jsonp',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(response => {
    //             // console.log('response.json() : ' + response.json() )
    //             return response.json() })
    //         .then(data => {this.setState({all_events: data}) })
    //         .catch(e => {
    //             console.log(e)
    //             return e
    //         })
    //     console.log(this.state.all_events)
    // }

    render() {
        let events = this.state.jsonData.map(event => {
            let each_event = (
                <div key={event.id} className='event-name-list'>
                    {event.event_name}
                        <div className='event-details'>
                            {event.location}
                        </div>
                        <div className='event-details'>
                            <a href={event.website} target="_blank" className='external-link'>site: {event.event_name} </a>
                        </div>
                        <div className='event-details'>
                            {event.description}
                        </div>
                    <hr/>
                </div>
            )
            return each_event
        })

        return (
            <React.Fragment>
                <div>
                    {events}
                </div>
            </React.Fragment>
        )
    }

    jsonData = [
        {
            "id": 1,
            "event_name": "Afton 25 50k",
            "location": "Afton, MN",
            "website": "https://www.aftontrailrun.com",
            "icon": null,
            "description": "The Afton Trail Run consists of a hilly 25K loop, two loops for the 50K, winding through Afton State Park\u2019s trail system. The race is held 100% off road, primarily on very runnable and not very technical single double and single track. There are 7 long climbs per loop, rising from the river valley and down again with a good mix of rolling and flat terrain between the hills.",
            "twoFiveK": true,
            "marathon": false,
            "fiveZeroK": true,
            "fiveZeroM": false,
            "oneZeroZeroK": false,
            "oneZeroZeroM": false
        },
        {
            "id": 2,
            "event_name": "Superior Fall Series 26.2 50 100",
            "location": "Lutsen, MN",
            "website": "https://www.superiorfalltrailrace.com ",
            "icon": null,
            "description": "The Superior Fall Trail Races 100MI, 50MI & 26.2MI are run on rugged, rooty, rocky, 95% single-track trail with near constant climbs and descents.  The race is held on the Superior Hiking Trail in the Sawtooth Mountains paralleling Lake Superior in Northern Minnesota   not far from the Canadian border.",
            "twoFiveK": false,
            "marathon": true,
            "fiveZeroK": false,
            "fiveZeroM": true,
            "oneZeroZeroK": false,
            "oneZeroZeroM": true
        },
        {
            "id": 3,
            "event_name": "Surf The Murph",
            "location": "Savage, MN",
            "website": "http://surfthemurph.org ",
            "icon": null,
            "description": "We are proud to offer a unique race at Murphy-Hanrehan Park in Savage. Surf the Murph features a 25K, 50K and 50-Mile run. The race features a suburban course through this beautiful park. This event is run by a team of experienced race directors and is designed to be competitive and fun.",
            "twoFiveK": true,
            "marathon": false,
            "fiveZeroK": true,
            "fiveZeroM": true,
            "oneZeroZeroK": false,
            "oneZeroZeroM": false
        },
        {
            "id": 4,
            "event_name": "Minnesota Voyageur 50 Mile Trail Ultramarathon",
            "location": "Carlton, MN",
            "website": "http://www.voyageur50.com ",
            "icon": null,
            "description": "Founded in 1982, the Minnesota Voyageur 50 Mile Trail Ultramarathon is one of the oldest trail ultras in the nation. The race follows a rugged, varied, out-and-back course that takes runners on a journey from Carlton, MN through Jay Cooke State Park and heads northeast over difficult, rough woodland trails to Duluth, MN and back. Enjoy scenic overlooks of Duluth, MN and Lake Superior.",
            "twoFiveK": false,
            "marathon": false,
            "fiveZeroK": false,
            "fiveZeroM": true,
            "oneZeroZeroK": false,
            "oneZeroZeroM": false
        },
        {
            "id": 5,
            "event_name": "Wild Duluth half mar 50 100k Races",
            "location": "Duluth, MN",
            "website": "http://wildduluthraces.blogspot.com ",
            "icon": null,
            "description": "83% of the Wild Duluth 100K and 50K course follows the Superior Hiking Trail through the city of Duluth.  The course follows the high points and ridges above Duluth.  Along the course you will find amazing views over the St. Louis River, harbor and city below, rocky outcroppings, numerous streams, huge White Pines. The trail is EXTREMELY rugged, hilly and laced with rocks and roots throughout.",
            "twoFiveK": true,
            "marathon": false,
            "fiveZeroK": true,
            "fiveZeroM": false,
            "oneZeroZeroK": true,
            "oneZeroZeroM": false
        }
    ]
}

export default allEvents
