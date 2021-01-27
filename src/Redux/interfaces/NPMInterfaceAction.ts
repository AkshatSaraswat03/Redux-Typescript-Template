import { NPMActionType } from '../constants/NPMconstants'

//separate interface for all types of actions
//typing for action types - change types for payload depending upon the response form api
interface NPM_package_request_action {
  type: NPMActionType.NPM_PACKAGE_REQUEST;
}
interface NPM_package_success_action {
  type: NPMActionType.NPM_PACKAGE_SUCCESS;
  payload: string[]
}
interface NPM_package_fail_action {
  type: NPMActionType.NPM_PACKAGE_FAIL;
  payload: string
}

//Action Type to combine all possiblities
export type NPMActionInterface = NPM_package_request_action | NPM_package_success_action | NPM_package_fail_action
