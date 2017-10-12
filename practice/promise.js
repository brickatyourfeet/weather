let somePromise = new Promise((resolve, reject)=> {
  setTimeout(()=>{
      //resolve('Look, a resolution')
      reject('unable to fulfil promise')
  }, 2500)
})

somePromise.then((message)=> {
  console.log('then message success: ', message)
}, (errorMessage) => {
    console.log('Error: ', errorMessage)
})
