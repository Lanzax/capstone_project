import { RECIPE } from "../action/action_profile"

const initState = {
    user: {
recipe:[ ]
    }
}

const mainProfile = (state = initState, action) => {
    switch (action.type) {
        case RECIPE: 
            return {
                ...state,
                state: {
                    ...state.user,
                    recipe: action.payload
                }
            }


        default: return state
    }
}

export default mainProfile