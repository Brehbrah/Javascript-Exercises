const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 recorded!');
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 recorded!');
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 recorded!');
});

// Using Promise.all will record and use everything right away!
// This is good Example if one of the database is not running, then we can use other database in the mean time
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

// Promise.race will return a soon as the first one is completed, instead of waiting for everything to complete
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(msg => console.log(msg))


const jumping = false;
const watching = false;

function watchPromises() {
    return new Promise((resolve, reject) => {

        if (jumping) {
            reject({
                name: 'User did not jump',
                behaviour: 'User puked!'
            });
        } else if (watching) {
            reject({
                who: 'a cat',
                'color': 'green'
            });
        } else {
            resolve('nothing!')
        }
    });
}

watchPromises()
    .then(msg => console.log(msg))
    .catch(err => console.log(`${err.name} and ${err.behaviour}`));