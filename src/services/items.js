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

module.exports.getFirstAid = function () {
    return axios.get('/common/firstaid/')
}

module.exports.addFirstAid = function (data) {
    return axios.post('/common/firstaid/', data)
}

module.exports.getTechnical = function () {
    return axios.get('/common/technical/')
}

module.exports.addTechnical = function (data) {
    return axios.post('/common/technical/', data)
}

module.exports.getInsurance = function () {
    return axios.get('/common/insurance/')
}

module.exports.addInsurance = function (data) {
    return axios.post('/common/insurance/', data)
}
module.exports.getRegistration = function () {
    return axios.get('/common/registration/')
}

module.exports.addRegistration = function (data) {
    return axios.post('/common/registration/', data)
}
