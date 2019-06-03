import {GOOGLE_USER_SELECT_ROLE} from "../constants/socialLogin";

export const selectRole = (dispatch, role) => dispatch({
    type: GOOGLE_USER_SELECT_ROLE,
    payload: {selectedRole: role}
});

