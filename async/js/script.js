async function popUpFunction () {
  // delaring a new promise function
  let popPromise = new Promise(function (resolve) {
    // After 3000 ms it will send the content inside resolve | *reject is optional
    setTimeout(function () {
      resolve('This could be a payment pop up after a server call is complete')
    }, 3000)
  })

  //   Below an alert will show after it recieves the promise
  alert(await popPromise)

  // Theis is another another way you could interact with the elements on the page
  //   document.getElementById('popup').innerHTML = await popPromise
}

popUpFunction()

//A different async example of a possible GET from external or internal location

// async function stuffFunction () {
//   let getstuff = new Promise(function (resolve) {
//     let req = new XMLHttpRequest()
//     req.open('GET', 'mysomestuff.html')
//     req.onload = function () {
//       if (req.status == 200) {
//         resolve(req.response)
//       } else {
//         resolve('Page not Found')
//       }
//     }
//     req.send()
//   })
// An alert
// alert(await getstuff)
// Below interacts with element
//   document.getElementById('popup').innerHTML = await getstuff
// }
// stuffFunction()
