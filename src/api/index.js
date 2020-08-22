/* eslint-disable no-unused-vars */
import appAxios from '~services/http';

export default {
  getRankingList(departmentId) {
    return appAxios.get(`/rankings?id=${departmentId}`);
  },
  getNextDepartment() {
    return appAxios.get('/departments');
  },
  retrieveToken(auth) {
    return appAxios.post('/login', auth);
  },
  getPersonPhoto(personUsername) {
    return appAxios.get(`http://172.17.15.23:88/api/PersonnelPhoto?Usernames=${personUsername}`);
  },
};
