import React from 'react';
import {useParams, NavLink} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import '../style/style.css'

import {FETCH_SONG_DETAILS} from '../queries/Songs'

const SongDetail = () => {

    let {id} = useParams();
    const {loading, error, data, refetch} = useQuery(FETCH_SONG_DETAILS, 
                                                    {variables: {id: id},    
                                       })                       
   if (loading) return <p>Loading...</p>
   if(error) return <p>{error.message}</p>

    const {title, lyrics} = data.song;

  return (        
        <>
            <NavLink to='/'>Back</NavLink>
            <h4>Song Details</h4>
            
            {data && <h2>{title}</h2>} 
            {!data && <p>Not found</p>} 

           { data && <LyricList lyrics={lyrics}/>}
           { data && <LyricCreate songId={id}/>}
            
       
       </>
    )
}

// export default graphql(FETCH_SONG_DETAILS, {
//     options: (props) => { return { variables: { id: props.params.id } } } } )(SongDetail)

export default SongDetail;