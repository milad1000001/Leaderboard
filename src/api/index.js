/* eslint-disable no-unused-vars */
import appAxios from '~services/http';

export default {
  getRankingList() {
    return appAxios.get('rankings');
  },
};
