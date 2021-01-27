import { NPMActionType } from '../constants/NPMconstants'
import { NPMActionInterface } from '../interfaces/NPMInterfaceAction'


//since the state can have loading, error and products:
interface NPMstate {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
}


export const NPMListReducer = (state: NPMstate = initialState, action: NPMActionInterface): NPMstate => {
  switch (action.type) {
    case NPMActionType.NPM_PACKAGE_REQUEST:
      return { loading: true, error: null, data: [] }
    case NPMActionType.NPM_PACKAGE_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case NPMActionType.NPM_PACKAGE_FAIL:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}