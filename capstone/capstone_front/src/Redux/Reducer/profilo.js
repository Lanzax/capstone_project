import { CATEGORY, RECIPE,LOGIN } from "../action/action_profile"

const initState = {
  user: {
    recipe: {},
    category: {},
    login: {}
  }
}

const mainProfile = (state = initState, action) => {
  switch (action.type) {
    case RECIPE:
      return {
        ...state,
        user: {
          ...state.user,
          recipe:action.payload
        }
      }
    case CATEGORY:
      return {
        ...state,
        user: {
          ...state.user,
          category: action.payload
        }
      }
      case LOGIN:
        return {
          ...state,
          user: {
            ...state.user,
            login: action.payload
          }
        }
    default:
      return state
  }
}

export default mainProfile