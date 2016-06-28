const BenchApiUtil = {
  signup(){
    url: "api/users",
    method: "POST",
    success(){
      console.log(Sucessfully logged in)
    }
  },

  login(){

  },

  logout() {

  }
};

module.exports = BenchApiUtil;
