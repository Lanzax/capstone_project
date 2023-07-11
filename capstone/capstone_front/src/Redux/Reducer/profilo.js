import { REGISTER } from "redux-persist"
import { CATEGORY, RECIPE,LOGIN } from "../action/action_profile"

const initState = {
  user: {
    recipe: {},
    category: {},
    login: {},
    register:{}
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
        case REGISTER:
          return {
            ...state,
            user: {
              ...state.user,
              register: action.payload
            }
          }
    default:
      return state
  }
}

export default mainProfile