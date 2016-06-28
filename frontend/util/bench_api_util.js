const BenchApiUtil = {
  fetchAllBenches(bounds, callback){
    console.log("fetchAllBenches(bounds, callback) in bench_api_util.js");
    console.log(bounds);
    // debugger;
    $.ajax({
      url: 'api/benches',
      method: 'GET',
      data: { bounds: bounds },
      success: function(response){
        callback(response);
      },
      error: function(response){
        console.log(response);
      }
    });
  },

  createBench(bench, redirectToRoot, receiveSingleBench){
    console.log("createBench(bench, callback) in bench_api_util.js");
    console.log(bench);
    $.ajax({
      url: 'api/benches',
      method: 'POST',
      data: { bench: bench },
      success(response) {
        receiveSingleBench(response);
        redirectToRoot();
      },
      error(response) {
        console.log(response);
        debugger;
      }
    });
  }

};

module.exports = BenchApiUtil;
