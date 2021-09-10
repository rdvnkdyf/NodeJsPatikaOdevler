const movies = [
    {name: "Who am I", detail:"it is a hacker movie"},
    {name: "Control Z", detail:"it is a Netflix series"},
    {name: "Esaretin Bedeli", detail:"it is a movie"},
];
console.log(movies)

const listmovies = () => {
    movies.map(movie => {
        console.log(movie);
    })
}

const addMovie = (newMovie) => {
    const promiseMovie = new Promise((resolve, reject) => {
        movies.push(newMovie);
        resolve(movies)
    })
    return promiseMovie;
}

async function showMovies() {
    try{
    await addMovie({  name:'The Godfather', detail:'good mafia movie'})
    listmovies();
    } 
    catch(error){
        console.log(error)
    }
}


showMovies();
