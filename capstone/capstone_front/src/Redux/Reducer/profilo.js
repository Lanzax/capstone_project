import { CATEGORY, RECIPE } from "../action/action_profile"

const initState = {
    user: {
        recipe: [],
        category: []
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
        case CATEGORY:
            return {
                ...state,
                state: {
                    ...state.user,
                    category: action.payload
                }
            }

        default: return state
    }
}

export default mainProfile