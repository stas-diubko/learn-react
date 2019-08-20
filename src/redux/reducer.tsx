import React from 'react';
import Registr from '../components/registration/registration';

const initialState = {
    users: []
};

export function reducer(state:any = initialState, action: any) {
switch (action.type) {
    case "ADD_USER":
    return { ...state, users: state.users.push(action.payload)};
    
}
console.log(state)
}