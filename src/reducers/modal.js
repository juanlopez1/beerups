import {
    MODAL_HIDE,
    MODAL_SHOW
} from '../actions/modal';

const initialState = {
    showing: false,
    Content: null
};

const modal = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_HIDE:
            return {
                ...state,
                showing: false,
                type: null
            };
        case MODAL_SHOW:
            return {
                ...state,
                showing: true,
                Content: action.content
            };
        default:
            return state;
    }
};

export default modal;
