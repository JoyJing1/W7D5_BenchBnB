const BenchApiUtil = {
  fetchAllBenches(bounds, callback){
    console.log("fetchAllBenches(bounds, callback) in bench_api_util.js");

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
  }

};

module.exports = BenchApiUtil;
