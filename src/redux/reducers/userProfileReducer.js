const initialState = {};


export default function (state = initialState, action = null) {


    switch (action) {
        case 'UPDATE_PROFILE' :
            return {
                ...state,
                ...action.payload
            }

    }

}
