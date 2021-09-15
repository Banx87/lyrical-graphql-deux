import React from 'react';
import {useMutation} from '@apollo/client';
import {LIKE_LYRIC} from '../queries/Lyrics';

const LyricList = ({lyrics}) => {

    const [LikeLyric] = useMutation(LIKE_LYRIC);

    const leaveALike = (id, likes) => {
        // console.log(id);
        LikeLyric({
            variables: {id},
             optimisticResponse: {
                 __typename: 'Mutation',
                 likeLyric: {
                     id,
                     __typename: "LyricType",
                     likes: likes + 1
                 }
             }});
    }
    
   const renderLyrics = () => {
    return (lyrics.map(({id, content, likes}) => {
        return (
            <li key={id} className="collection-item">
                {content}

            <div classname="vote-box">
                {likes}
                <i className="material-icons" onClick={() => leaveALike(id, likes)}>thumb_up</i>
            </div>
            </li>
            );
         }
        )
    )}
    
    return (
        <ul className="collection">
            {renderLyrics()}
        </ul>
    )
}

export default LyricList
