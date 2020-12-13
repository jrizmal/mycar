const axios = require('axios').default
/* Gorivo */
module.exports.getFuelings = function () {
    return axios.get('/common/fuel/')
}

module.exports.addFueling = function (data) {
    return axios.post('/common/fuel/', data)
}
/* Gume */
module.exports.getTires = function () {
    return axios.get('/common/tires/')
}

module.exports.addTires = function (data) {
    return axios.post('/common/tires/', data)
}
/* Servisi */
module.exports.getServices = function () {
    return axios.get('/common/services/')
}

module.exports.addService = function (data) {
    return axios.post('/common/services/', data)
}