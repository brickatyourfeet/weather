const request = require('request')

let geocodeAddress = (address) => {
  return new Promise((resolve, reject)=>{
  let encodedAddress = encodeURIComponent(address)

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    //if(body === 'undefined') console.log('check google map api url, no connection')
    if (error) {
      reject('cannot connect to server')
    } else if (body.status === 'ZERO_RESULTS'){
      reject('Unable to find address')
    } else if (body.status === 'OK'){
      resolve({
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
      //console.log(JSON.stringify(body, undefined, 2))
    }
  })
  })
}


geocodeAddress('98373').then((location) => {
  console.log(JSON.stringify(location, undefined, 2))
}, (errorMessage)=> {
  console.log(errorMessage)
})



//promises have success handler and error handler
