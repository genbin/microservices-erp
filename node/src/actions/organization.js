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

// 通过树节点orgId，获取岗位数据
export function getJobDataByOrgId(orgId) {
  let url = ['/api/org/', orgId,'/jobs'].join('');
  console.log(url);

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

// 通过树节点orgId，获取人员数据
export function getUserDataByOrgId(orgId) {
  let url = ['/api/org/', orgId, '/users'].join('');
  console.log(url);
  return function (dispatch) {
    return fetch(url)
          .then(response => response.json())
          .then(json => dispatch(receiveUsersByOrgId(json)));
      }
}
function receiveUsersByOrgId(users) {
  return {
    type: 'ORGANIZATIONS_GET_USERS_BY_ORG_ID',
    users
  };
}

// 通过岗位jobId，获取人员数据
export function getUserDataByJobId(jobId) {
  let url = ['/api/job/', jobId ,'/users'].join('');
  console.log(url);

  return function (dispatch) {
    return fetch(url)
          .then(response => response.json())
          .then(json => {
            dispatch(receiveWorkersByJobId(json))
          });
      }
}
function receiveWorkersByJobId(workers) {
  return {
    type: 'ORGANIZATIONS_GET_WORKERS_BY_JOB_ID',
    workers
  };
}

export function saveUserDataByUserId(user) {
  let url = ['/api/user/', user._id].join(''),
      option = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      };

  return function (dispatch) {
    return fetch(url, option)
      .then(response => response.json())
      .then((json) => {
        if (json) {
          dispatch(getUserDataByOrgId(user.orgId));
        }
      });
  }
}
