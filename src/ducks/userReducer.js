//manage user login
//get logged in users data from the server, store info in redux store, and display users first/last name
//a switch statement in the reducer responds to different action events.
//The switch statement should switch over action.type and return the appropriate authentication state.

import axios from 'axios';

const initialState = {
    email: null,
    firstName: null,
    lastName: null
};

//constants
const REQUEST_USER_DATA = "REQUEST_USER_DATA";

//action creator 
export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}


export default function reducer(state=initialState, action){
    switch(action.type){
        case REQUEST_USER_DATA + '_FULFILLED':
            const { email, firstName, lastName } = action.payload.user;
            return { email, firstName, lastName };
        default:  return state;
    }
   
}