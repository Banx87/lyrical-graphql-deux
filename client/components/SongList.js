import React from 'react';
// import gql from 'graphql-tag';
import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';

export default function SongList() {

    
    const {loading, error, data} = useQuery(GET_SONGTITLES);
    
    if (loading) return  <p className="collection-item">Loading...</p>
    if (error) return <p className="collection-item">Error...</p>;

    return (
        <>
            {/* {console.log(data)} */}
            {data.songs.map(({title, id}) => (
                <ul key={id} className={"collection"}>
                    {title}
                </ul>
            ))}
        </>
        )
    }

    const GET_SONGTITLES = gql`
            query GetSongtitles {
                    songs {
                        id
                        title
            }   
        }`;


