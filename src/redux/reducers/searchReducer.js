import {UPDATE_SEARCH_ACCOUNT_TYPE, UPDATE_SEARCH_ROLE, UPDATE_ZIP} from "../constants/searchConstants";

const initialState = {
    searchRole : '',
    searchAccountType : '',
    searchZip:''
};
export const searchReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_SEARCH_ROLE :
            return{ ...state, searchRole : action.payload.searchRole};


        case UPDATE_SEARCH_ACCOUNT_TYPE :
            return{ ...state, searchAccountType : action.payload.searchAccountType};


        case UPDATE_ZIP :
            return{ ...state, searchZip : action.payload.searchZip};


        default: return {
            ...state
        }

    }


};
