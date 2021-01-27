import axios from 'axios'
import { Dispatch } from 'redux'
import { NPMActionType } from '../constants/NPMconstants'
import { NPMActionInterface } from '../interfaces/NPMInterfaceAction'


export const listNPMPackages = (term: string) => async (dispatch: Dispatch<NPMActionInterface>) => {
  try {
    dispatch({ type: NPMActionType.NPM_PACKAGE_REQUEST })

    //making request
    const { data } = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${term}`)

    const names = data.objects.map((result: any) => {
      return result.package.name
    })

    dispatch({
      type: NPMActionType.NPM_PACKAGE_SUCCESS,
      payload: names
    })

  } catch (err) {
    dispatch({
      type: NPMActionType.NPM_PACKAGE_FAIL,
      payload: err.message
    })
  }
}