function initState () {
  return {
    tree: [],
    jobs: [],
    users: []
  }
}
export function organization(state = initState(), action) {
  switch (action.type) {
    case 'ORGANIZATION_GET_ALL':
      return Object.assign({}, state, {tree: action.tree});
      
    case 'ORGANIZATIONS_GET_JOBS_BY_ORG_ID':
      return Object.assign({}, state, {jobs: action.jobs});

    case 'ORGANIZATIONS_GET_USERS_BY_ORG_ID':
      return Object.assign({}, state, {users: action.users});
    default:
      return state;
  }
}
