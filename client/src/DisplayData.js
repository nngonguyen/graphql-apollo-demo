import React, { useState } from "react"
import { useQuery, gql } from "urql"


const QUERY_ALL_ORDER = gql`
    query GetAllPackages {
        poolPackageItems { 
            entities {
                id
                package {
                    id
                }
            }
        }
    }
`;

function DisplayData() {
    const [result, reexecuteQuery] = useQuery ({
        query: QUERY_ALL_ORDER,
    });

    const { data, fetching, error } = result;

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            {data &&
                 data.poolPackageItems.entities.map((data) => {
                    return (
                        <div>
                            <h1>{data.id}</h1>
                            <h1>{data.package.id}</h1>

                        </div>
                    )
                })}
        </div>
    )
        
}

// const QUERY_ALL_MOVIES = gql`
//     query GetAllMovies {
//         movies {
//             movieName
//         }
//     }
// `

// const GET_MOVIE_BY_NAME = gql`
//     query Movie($name: String!){
//         movie(movieName: $name) {
//             movieName
//             yearOfPublication
//         }
//     }
// `

// const CREATE_USER_MUTATION = gql`
//     mutation CreateUser($input: CreateUserInput!) {
//         createUser(input: $input){
//             name
//             id
//         }
//     }
// `

// const DELETE_USER_MUTATION = gql`
//     mutation DeleteUser($input: ID!) {
//         deleteUser(id: $input){
//             id
//         }
//     }
// `

// function DisplayData() {
//     const [{fetching, data, error}] = useQuery(QUERY_ALL_ORDER)

//     // //Movie State
//     // const [movieSearched, setMovieSearched] = useState("")

//     // //Create User State
//     // const [name, setName] = useState("")
//     // const [username, setUsername] = useState("")
//     // const [age, setAge] = useState(0)
//     // const [nationality, setNationality] = useState("")

//     // //Delete User State
//     // const [id, setID] = useState(0)

//     // const {data, loading, refetch } = useQuery(QUERY_ALL_USERS)
//     // const {data: movieData} = useQuery(QUERY_ALL_MOVIES)
//     // const [fetchMovie, {data: movieSearchedData, error: movieError}] = useLazyQuery(GET_MOVIE_BY_NAME)

//     // const [createUser] = useMutation(CREATE_USER_MUTATION)
//     // const [deleteUser] = useMutation(DELETE_USER_MUTATION)

//     return (
//         // <div>
//         //     <div>
//         //         <input type="text" placeholder="Name..." onChange={(event) => {setName(event.target.value)}} />
//         //         <input type="text" placeholder="Username..." onChange={(event) => {setUsername(event.target.value)}}  />
//         //         <input type="number" placeholder="Age..." onChange={(event) => {setAge(event.target.value)}} />
//         //         <input type="text" placeholder="Nationality..." onChange={(event) => {setNationality(event.target.value.toUpperCase())}} />
//         //         <button onClick={() => {createUser({ 
//         //             variables: { input: { name, username, age: Number(age), nationality }},
//         //         });
//         //         refetch();
                
//         //     }}
//         //     > Create User </button>
//         //     </div>
//         //     <input type="text" placeholder="Input user ID to delete..." onChange={(event) => {setID(event.target.value)}} />
            
//         //     <button onClick={() => {deleteUser({ 
//         //             variables: { id: { id: Number(id) } },
//         //         });
//         //         refetch();
                
//         //     }}
//         //     > Delete User </button>
//         //     <div>

//         //     </div>

//         //     {data && 
//         //     data.users.map((user) => {
//         //         return (
//         //             <div>
//         //                 <h1>ID: {user.id}</h1>
//         //                 <h1>Name: {user.name}</h1>
//         //                 <h1>Username: {user.username}</h1>
//         //                 <h1>Age: {user.age}</h1>
//         //                 <h1>nationality: {user.nationality}</h1>
//         //             </div>
//         //         )
//         //     })}

//         //     {movieData &&
//         //     movieData.movies.map((movie)=> {
//         //         return (
//         //             <div>
//         //                 <h1>Movie: {movie.movieName}</h1>
//         //             </div>
//         //         )
//         //     })
//         //     }

//         //     <div>
//         //         <input type="text" placeholder="Interstellar..." onChange={(event) => {setMovieSearched(event.target.value)}} />
//         //         <button onClick={() => {
//         //             fetchMovie(
//         //             {variables: {
//         //                 name: movieSearched,
//         //             }}
//         //         )}}> Fetch Data </button>
//         //         <div>
//         //             {movieSearchedData &&
//         //                 <div>
//         //                     <h1>MovieName: {movieSearchedData.movie.movieName} </h1>
//         //                     <h1>yearOfPublication: {movieSearchedData.yearOfPublication} </h1>
//         //                 </div>
//         //             }
//         //             {movieError && <h1> There was an error fetching the data</h1>}
//         //         </div>
//         //     </div>

//         // </div>
//         <div>
//             hello
//             {/* {data &&
//                 data.orders.map((order) => {
//                     return (
//                         <div>
//                             <h1>Code: {order.code}</h1>
//                             <h1>Customer: {order.customer}</h1>
//                         </div>
//                     )
//                 })} */}
//         </div>
//     )
// }

export default DisplayData;