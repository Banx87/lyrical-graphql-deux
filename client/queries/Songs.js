import gql from 'graphql-tag';

const FETCH_SONGS = gql`
{
    songs {id, title}
}`;

const FETCH_SONG_DETAILS = gql`
    query SongQuery($id: ID!) {
        song(id: $id) {
        id
        title
        lyrics {
            id
            content
            likes
        }
        }
    }`;


const CREATE_SONG = gql`
        mutation AddSong($title:String!) {
            addSong(title: $title) {
            id
            title
            }
        }`;


const DELETE_SONG = gql`
        mutation DeleteSong($id: ID) {
            deleteSong(id: $id) {
            id
            title
            }
        }`;


        export { FETCH_SONGS, FETCH_SONG_DETAILS, CREATE_SONG, DELETE_SONG }