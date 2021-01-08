const axios = require("axios").default

module.exports.getUser = function(){
    return axios.get("/user")
}