const BenchApiUtil = require('../util/bench_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');

const BenchActions = {
  fetchAllBenches(bounds) {
    console.log("fetchAllBenches(bounds) in bench_action.js");
    console.log(bounds);
    if (bounds) {
      BenchApiUtil.fetchAllBenches(bounds, this.receiveAllBenches);
    }
  },

  receiveAllBenches(benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  createBench(bench, redirectToRoot) {
    console.log('createBench(bench) in bench_actions.js');
    console.log(bench);
    BenchApiUtil.createBench(bench, redirectToRoot, this.receiveSingleBench);
  },

  receiveSingleBench(bench) {
    console.log('receiveSingleBench(bench) in bench_actions.js');
    AppDispatcher.dispatch({
      actionType: BenchConstants.UPDATE_SINGLE_BENCH,
      bench: bench
    });
  }
};

module.exports = BenchActions;
