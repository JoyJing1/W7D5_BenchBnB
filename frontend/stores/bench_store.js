const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');

let _benches = {};

const BenchStore = new Store(AppDispatcher);

BenchStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetAllBenches(payload.benches);
      break;
    case BenchConstants.UPDATE_SINGLE_BENCH:
      console.log('__onDispatch in BenchStore for UPDATE_SINGLE_BENCH');
      this.updateBench(payload.bench);
      this.__emitChange();
      break;
  }
};

BenchStore.updateBench = function(bench) {
  console.log("BenchStore.updateBench() in bench_store.js");
  _benches[bench.id] = bench;
};

BenchStore.all = function() {
  let benches = [];

  for (let benchID in _benches) {
    if (_benches.hasOwnProperty(benchID)) {
      benches.push(_benches[benchID]);
    }
  }
  return benches;
};

function resetAllBenches(benches) {
  _benches = benches;
  BenchStore.__emitChange();
}


module.exports = BenchStore;
