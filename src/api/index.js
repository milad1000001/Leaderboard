import appAxios from '~services/http';

export default {
  getRankingList(departmentId) {
    return appAxios.get(`/rankings?id=${departmentId}`);
  },
  getOverallList() {
    return appAxios.get('/ranking-themes/overall/ranking-groups');
  },
  getDepartmentsList() {
    return appAxios.get('/ranking-themes/departments/ranking-groups');
  },
  retrieveToken(auth) {
    return appAxios.post('/login', auth);
  },
  getPersonPhoto(personUsername) {
    return appAxios.get(`http://172.17.15.23:88/api/PersonnelPhoto?Usernames=${personUsername}`);
  },
};
