import React,{useState} from 'react'
import {useMutation} from '@apollo/client';
import {Link, useHistory} from 'react-router-dom'

import {FETCH_SONGS, CREATE_SONG} from '../queries/Songs'

const SongCreate = () => {
    const [title, setTitle] = useState("");
    const [addSong] = useMutation(CREATE_SONG);
    let history = useHistory();
    
    // const onChangeHandler = e => {
    //     setInputValue(e.target.value);
    // }
    
    const onSubmit = e => {
        e.preventDefault();
        
        // console.log(props);

        addSong({
            variables:{
                title 
            },
            refetchQueries: [{ query: FETCH_SONGS }]
        }).then(() => history.push('/'))

        
    }
    
    // const {loading, error, data} = useMutation(CREATE_SONG);


    return (
        <div>
        <Link to={'/'}>Back</Link>
            <h3>Create a new song</h3>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Song Title:</label>
                <input 
                    type="text" 
                    name="title"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
            </form>
        </div>
    )
}

    export default SongCreate;