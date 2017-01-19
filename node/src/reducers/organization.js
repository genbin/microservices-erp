function initState () {
  return {
    tree: [],
    jobs: [],
<<<<<<< HEAD
    users: [],
    workers: []
=======
    users: []
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
  }
}
export function organization(state = initState(), action) {
  switch (action.type) {
    case 'ORGANIZATION_GET_ALL':
      return Object.assign({}, state, {tree: action.tree});
<<<<<<< HEAD

=======
      
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
    case 'ORGANIZATIONS_GET_JOBS_BY_ORG_ID':
      return Object.assign({}, state, {jobs: action.jobs});

    case 'ORGANIZATIONS_GET_USERS_BY_ORG_ID':
      return Object.assign({}, state, {users: action.users});
<<<<<<< HEAD

    case 'ORGANIZATIONS_GET_WORKERS_BY_JOB_ID':
      return Object.assign({}, state, {workers: action.workers});

=======
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
    default:
      return state;
  }
}
