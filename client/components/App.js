import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SongList from './SongList'
import SongCreate from './SongCreate'


export default ({ children }) => {
    return (
        <div className="container"> 
            <Switch>
                <Route path="/" component={SongList} exact/>
                <Route path="/song/new" component={SongCreate}/>
                <Route component={SongList} />
            </Switch>        
        </div>
    )
}
