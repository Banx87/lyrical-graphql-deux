import React,{useState} from 'react';
import {useMutation} from '@apollo/client';
import {ADD_LYRIC} from '../queries/Lyrics';

const LyricCreate = (props) => {

    const [Lyric, setLyric] = useState('');
    const [addLyrics] = useMutation(ADD_LYRIC);

    const onSubmit = (e) => {
        e.preventDefault();
        setLyric('');

        addLyrics({
            variables: {
                songId: props.songId,
                content: Lyric
        }})

    }


    return (<>
            <form onSubmit={onSubmit}>
                <label>Add a Lyric</label>
                <input 
                    value={Lyric} onChange={e => setLyric(e.target.value)}
                />
            </form>
        </>
    )
}

export default LyricCreate;
