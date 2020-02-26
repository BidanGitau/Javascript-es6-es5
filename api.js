//http request

const getData = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('cant fetch data');
            }
        });
        request.open('GET', resource);
        request.send();
    });
};
// getTodo((err, data) => {
//     console.log('callback fired');
//     console.log(err, data);
// });
//promises
// const getData = () => {
//     return new Promise((resolve, reject) => {
//         //fetch data
//         // resolve('some data');
//         reject('some error')
//     });

// };

getData('tasks/build.json').then((data) => {
    console.log(data);
    return getData('tasks/todos.json');
}).then((data) => {
    console.log('second promise 2', data);
}).catch(err => {
    console.log(err);
});