const request = require('request')


const geocodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address)

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (body === 'undefined') console.log('check google map api url, no connection')
    if (error) {
      callback('cannot connect to server')
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find address')
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
      //console.log(JSON.stringify(body, undefined, 2))
    }
  })
}


module.exports.geocodeAddress = geocodeAddress
