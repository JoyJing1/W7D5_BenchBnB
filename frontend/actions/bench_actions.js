const BenchApiUtil = require('../util/bench_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');

const BenchActions = {
  fetchAllBenches(bounds) {
    console.log("fetchAllBenches(bounds) in bench_action.js");
    BenchApiUtil.fetchAllBenches(bounds, this.receiveAllBenches);
  },

  receiveAllBenches(benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = BenchActions;
