import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SongList from './SongList'
import SongCreate from './SongCreate'
import SongDetail from './SongDetail'


export default ({ children }) => {
    return (
        <div className="container"> 
            <Switch>
                <Route path="/" component={SongList} exact/>
                <Route path="/songs/new" component={SongCreate}/>
                <Route path="/songs/:id" component={SongDetail}/>
                <Route component={SongList} />
            </Switch>        
        </div>
    )
}
