import React from 'react';
import {useQuery, useMutation} from '@apollo/client';
import {NavLink} from 'react-router-dom';

import { FETCH_SONGS, DELETE_SONG } from '../queries/Songs';

export default function SongList() {

    
    const {loading, error, data} = useQuery(FETCH_SONGS);
    const [deleteSong] = useMutation(DELETE_SONG);

    const handleDelete = (id) => {
           deleteSong({
            variables:{id},
            refetchQueries: [{ query: FETCH_SONGS }]
        })
    }
    
    if (loading) return  <p className="collection-item">Loading...</p>
    if (error) return <p className="collection-item">Error...</p>;

    return (
        <>
            {data.songs.map(({title, id}) => (
                <li key={id} className={"collection-item"}>
                    <NavLink to={`songs/${id}`}>{title}</NavLink>
                    <i  className="material-icons" 
                        onClick={() => handleDelete(id)}>delete</i>
                </li>
            ))}
            <NavLink to="/songs/new" className="btn-floating btn-large red right " role='button'>
                <i className="material-icons">add</i>
            </NavLink>
        </>
        )
        
    }
        // const GET_SONGTITLES = gql`
        // query GetSongtitles {
        //     songs {
        //         id
        //         title
        //     }   
        // }`;

      

