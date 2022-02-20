import {BUG_ADDED, BUG_REMOVED, BUG_RESOLVED} from './actionTypes';

function bugAdded(description) {
    return {
      type: BUG_ADDED,
      payload: {
        description
      },
    };
}
function bugRemoved(id) {
    return {
      type: BUG_REMOVED,
      payload: {
        id: 1,
      },
    };
}
function bugResolved(id) {
  return {
    type: BUG_RESOLVED,
    payload: {
      id,
      resolved: true
    }
  }
}
export {bugAdded, bugRemoved, bugResolved};