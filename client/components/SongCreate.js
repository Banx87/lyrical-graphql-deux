import React,{useState} from 'react'
import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';

const SongCreate = (props) => {
    const [title, setTitle] = useState("");
    const [addSong] = useMutation(CREATE_SONG);
    
    // const onChangeHandler = e => {
    //     setInputValue(e.target.value);
    // }
    
    const onSubmit = e => {
        e.preventDefault();
        
        // console.log(props);

        addSong({
            variables:{
                title 
            }
        })

        props.history.push('/')
    }
    
    // const {loading, error, data} = useMutation(CREATE_SONG);


    return (
        <div>
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

const CREATE_SONG = gql`
    mutation AddSong($title:String!) {
        addSong(title: $title) {
        id
        title
        }
    }`

    export default SongCreate;