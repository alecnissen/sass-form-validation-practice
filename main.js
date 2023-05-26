
// promises example #1 

// let p = new Promise((resolve, reject) => { 
//     let a = 1 + 1
//     if (a == 2) { 
//         resolve("Success!")
//     } else { 
//         reject("Failed")
//     }
// })

// p.then((message) => { 
//     console.log("This is in the then " + message)
// }).catch((message) => { 
//     console.log("This is in the catch " + message)
// })  

// let x = new Promise((resolve, reject) => { 
//     let a = false; 

//     if (a) { 
//         resolve("TRUE!"); 
//     } else { 
//         reject("NOT TRUE!");
//     }
// }) 

// x.then((message) => { 
//     console.log("Message is: " + message)
// }).catch((message) => { 
//     console.log("Message is: " + message)
// }) 

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('this is the eventual value the promise will return');
//     }, 300);
//   });
  
//   console.log(myPromise);
 

let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
  });



// watchTutorialCallback((message) => { 
//     console.log('Success: ' + message)
// }, (error) => { 
//     console.log(error.name + ' ' + error.message)
// })


// const userLeft = false; 
// const userWatchingCatMeme = false; 

// function watchTutorialPromise() { 
//     return new Promise((resolve, reject) => { 
//         if (userLeft) { 
//             reject({
//                 name: 'User Left', 
//                 message: ':('
//             })
//         } else if (userWatchingCatMeme) { 
//             reject({
//                 name: 'User Watching Cat Meme', 
//                 message: 'WebDevSimplified < cat'
//             }) 
//         } else { 
//             resolve('Thumbs up and Subscribe ')
//         }
//     })
//     } 

//     watchTutorialPromise().then((message) => { 
//         console.log('Success: ' + message)
//     }).catch((error) => { 
//         console.log(error.name + ' ' + error.message)
//     }) 


// const recordVideoOne = new Promise((resolve, reject) => { 
//     resolve('Video 1 Recorded'); 
// }) 

// const recordVideoTwo = new Promise((resolve, reject) => { 
//     resolve('Video 2 Recorded'); 
// }) 

// const recordVideoThree = new Promise((resolve, reject) => { 
//     resolve('Video 3 recorded'); 
// }) 

// Promise.race([
//     recordVideoOne, 
//     recordVideoTwo, 
//     recordVideoThree
// ]).then((message) => {
//     console.log(message)
// }) 

// next going to go back over the video, then I might try

// another video, just watch the promises section by brad 

// I will save the event loop video and reading for last 

// 

// old code from async TOP video, dogs example 

// fetch("data/dogs.json")
// .then(resp => resp.json()) 
// .then(getThemDogs);

// function getThemDogs(data) { 
//  console.log(data.dogs); 
//  const dogs = data.dogs
//  dogs.forEach(getOneDogName)
// }

// function getOneDogName(dog) { 
//   console.log(dog.name);  
// }