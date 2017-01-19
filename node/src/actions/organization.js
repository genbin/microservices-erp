import fetch from 'isomorphic-fetch';

// 获取树结构
export function getTreeData() {
  return function (dispatch) {
    let url = '/api/orgs/';
    return fetch(url)
          .then(response => response.json())
          .then(json =>
            dispatch(receiveCompanies(json))
          );
      }
}
function receiveCompanies(tree) {
  return {
    type: 'ORGANIZATION_GET_ALL',
    tree
  };
}

<<<<<<< HEAD
// 通过树节点orgId，获取岗位数据
export function getJobDataByOrgId(orgId) {
  let url = ['/api/org/', orgId,'/jobs'].join('');
  console.log(url);

=======
// 通过树节点，获取岗位数据
export function getJobDataByOrgId(orgId) {
  let url = '/api/jobs/'+orgId;
  console.log(url);
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
  return function (dispatch) {
    return fetch(url)
          .then(response => response.json())
          .then(json =>
            dispatch(receiveJobsByOrgId(json))
          );
      }
}
function receiveJobsByOrgId(jobs) {
  console.log('receiveJobsByOrgId: ', jobs);
  return {
    type: 'ORGANIZATIONS_GET_JOBS_BY_ORG_ID',
    jobs
  };
}

<<<<<<< HEAD
// 通过树节点orgId，获取人员数据
export function getUserDataByOrgId(orgId) {
  let url = ['/api/org/', orgId, '/users'].join('');
=======
// 通过树节点，获取人员数据
export function getWorkerDataByOrgId(orgId) {
  let url = '/api/users/'+orgId;
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
  console.log(url);
  return function (dispatch) {
    return fetch(url)
          .then(response => response.json())
          .then(json =>
<<<<<<< HEAD
            dispatch(receiveUsersByOrgId(json))
          );
      }
}
function receiveUsersByOrgId(users) {
=======
            dispatch(receiveWorkerByOrgId(json))
          );
      }
}
function receiveWorkerByOrgId(users) {
  console.log('receiveWorkersByOrgId: ', users);
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
  return {
    type: 'ORGANIZATIONS_GET_USERS_BY_ORG_ID',
    users
  };
}

<<<<<<< HEAD
// 通过岗位jobId，获取人员数据
export function getUserDataByJobId(jobId) {
  let url = ['/api/job/', jobId ,'/users'].join('');
  console.log(url);

  return function (dispatch) {
    return fetch(url)
          .then(response => response.json())
          .then(json =>
            dispatch(receiveWorkersByJobId(json))
          );
      }
}
function receiveWorkersByJobId(workers) {
  return {
    type: 'ORGANIZATIONS_GET_WORKERS_BY_JOB_ID',
    workers
  };
}

// export function getUserFromPage(user) {
//   return {
//     type: 'ORGANIZATION_GET_USER_FROM_TABLE',
//     user
//   }
// }
=======
export function addWorker() {
  console.log('add worker is clicked');
  return {
    type: 'WORKER_MODEL_ADD_NEW_ONE',
    visible: true
  }
}
>>>>>>> bbe48c3e461675372c84c00151dabb6115618b0f
