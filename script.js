
// Q1 Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating.

function showRating(rating) {
    let ratings = '';
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratings += '*';
        if ( i !== Math.floor(rating - 1)) {
            ratings += ' ';
        }
    }
    if (!Number.isInteger(rating)) {
        ratings += ' .';
    }
    return ratings;
}

console.log(showRating(4.5));

// Q2 Given an array of numbers, return the prices sorted by low to high.

function sortLowToHigh(numbers) {
    return numbers.sort((a, b)=> a - b);
}

console.log(sortLowToHigh([1, 5, 0, 10, 4, -8]));

// Q2 Given an array of numbers, return the prices sorted by high to low.

function sortHighToLow(numbers) {
    return numbers.sort((a, b) => b - a);
}

console.log(sortHighToLow([1, 5, 0, 10, 4, -8]));

// Q3 Given an array of objects, return the prices sorted by high to low.

function sortObjectsHighToLow(arr) {
     return arr.sort((a, b) => b.price - a.price);
}

console.log(sortObjectsHighToLow([
    {id: 1, price: 50}, 
    {id: 2, price: 30}, 
    {id: 3, price: 60}, 
    {id: 4, price: 10}
]));

// Q5 Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user Id.

async function postByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await promise.json();
    const posts = result.filter(element => element.userId === userId);
    console.log(posts);
}

postByUser(4);

// Q6 Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todo's from the result.

async function firstSixIncomplete(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await promise.json();
    const incompleteTasks = result.filter(element => !element.completed).slice(0, 6);
    console.log(incompleteTasks);
}

firstSixIncomplete(6);