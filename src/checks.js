import { mgmntVariables } from "./variables.js";
export const checks = {
  checkprice: function (price) {
    if (price < 0) {
      return -1;
    }
    return 0;
  },
  checkpricedao: function (price) {
    if (price > mgmntVariables.maxDaoPrice) {
      return -1;
    }
    return 0;
  },
};
