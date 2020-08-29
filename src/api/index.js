import appAxios from '~services/http';

export default {
  getRankingList(config) {
    return appAxios.get(`/rankings?rankingGroupId=${config[0]}&themeName=${config[1]}`);
  },
  getRankingGroups(themeName) {
    return appAxios.get(`/ranking-themes/${themeName}/ranking-groups`);
  },
  retrieveToken(auth) {
    return appAxios.post('/login', auth);
  },
  getPersonPhoto(personUsername) {
    return appAxios.get(`http://172.17.15.23:88/api/PersonnelPhoto?Usernames=${personUsername}`);
  },
};
