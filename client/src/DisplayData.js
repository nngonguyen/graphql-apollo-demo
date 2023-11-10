import React, { useState } from "react"
import { useQuery, useLazyQuery, gql } from "@apollo/client"


const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            age
            username
            nationality
        }
    }
`

const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            movieName
        }
    }
`

const GET_MOVIE_BY_NAME = gql`
    query Movie($name: String!){
        movie(movieName: $name) {
            movieName
            yearOfPublication
        }
    }
`

function DisplayData() {

    const [movieSearched, setMovieSearched] = useState("")

    const {data, loading, error } = useQuery(QUERY_ALL_USERS)
    const {data: movieData} = useQuery(QUERY_ALL_MOVIES)
    const [fetchMovie, {data: movieSearchedData, error: movieError}] = useLazyQuery(GET_MOVIE_BY_NAME)

    if (loading) {
        return <h1>Data loading</h1>
    }
    if (data) {
        console.log(data)
    }

    if (error) {
        console.log(error)
    }

    if (movieError) {
        console.log(movieError)
    }

    return (
        <div>
            {data && 
            data.users.map((user) => {
                return (
                    <div>
                        <h1>Name: {user.name}</h1>
                        <h1>Username: {user.username}</h1>
                        <h1>Age: {user.age}</h1>
                        <h1>nationality: {user.nationality}</h1>
                    </div>
                )
            })}

            {movieData &&
            movieData.movies.map((movie)=> {
                return (
                    <div>
                        <h1>Movie: {movie.movieName}</h1>
                    </div>
                )
            })
            }

            <div>
                <input type="text" placeholder="Interstellar..." onChange={(event) => {setMovieSearched(event.target.value)}} />
                <button onClick={() => {
                    fetchMovie(
                    {variables: {
                        name: movieSearched,
                    }}
                )}}> Fetch Data </button>
                <div>
                    {movieSearchedData &&
                        <div>
                            <h1>MovieName: {movieSearchedData.movie.movieName} </h1>
                            <h1>yearOfPublication: {movieSearchedData.yearOfPublication} </h1>
                        </div>
                    }
                    {movieError && <h1> There was an error fetching the data</h1>}
                </div>
            </div>

        </div>
    )
}

export default DisplayData;