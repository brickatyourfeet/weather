const request = require('request')

const getWeather = (lat, lng, callback) => {

request({
  url: `https://api.darksky.net/forecast/ad0b49edc3e64215939a9346478e417c/${lat},${lng}`,
  json: true
}, (error, response, body)=> {
  if(!error && response.statusCode === 200){
    callback(undefined, {
      temperature: body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature
    })
  }else {
    callback('unable to retrieve weather from forecast.io')
  }
})

}
module.exports.getWeather = getWeather
