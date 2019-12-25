import React, {useState} from 'react';


const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            name: "Whiplash",
            price: "R$ 10",
            id: 23432
        },
        {
            name: "Ghost",
            price: "R$ 50",
            id: 23434
        }
    ]);
    return (
        <div>
            {movies.map(movie => (
            <li>{movie.name}</li>
        ))}
        </div>
    );
}
export default MovieList;