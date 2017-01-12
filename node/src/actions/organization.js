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

// 通过树节点，获取岗位数据
export function getJobDataByOrgId(orgId) {
  let url = '/api/jobs/'+orgId;
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

// 通过树节点，获取人员数据
export function getWorkerDataByOrgId(orgId) {
  let url = '/api/users/'+orgId;
  console.log(url);
  return function (dispatch) {
    return fetch(url)
          .then(response => response.json())
          .then(json =>
            dispatch(receiveWorkerByOrgId(json))
          );
      }
}
function receiveWorkerByOrgId(users) {
  console.log('receiveWorkersByOrgId: ', users);
  return {
    type: 'ORGANIZATIONS_GET_USERS_BY_ORG_ID',
    users
  };
}

export function addWorker() {
  console.log('add worker is clicked');
  return {
    type: 'WORKER_MODEL_ADD_NEW_ONE',
    visible: true
  }
}