import { REGISTER, RECIPE,LOGIN, CATEGORIA } from "../action/action_profile"

const initState = {
  user: {
    recipe: {},
    categoria: {},
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
    case CATEGORIA:
      return {
        ...state,
        user: {
          ...state.user,
          categoria: action.payload
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