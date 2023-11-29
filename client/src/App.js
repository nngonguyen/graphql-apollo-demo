
import './App.css';
import DisplayData from './DisplayData';
import { Client, cacheExchange, fetchExchange } from '@urql/core';
import { createClient, Provider } from "urql"

function App() {

  const client = new Client({
    url: 'https://app-api.tronhouse.vn/graphql',
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
      headers: {
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHRyb25ob3VzZS52biIsImlkIjoiMjk2MTYwOGUtNTBlYi00YzhmLTlhOTItYTlmOTY2NzUyYWRhIiwiaXNfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiQWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluIn0.qJ9sGMQOcX-josBu6JfE1UqSuFckKWvB1RCXZjXvzvA",
        "x-website-name": "tronhouse.vn"
      },
    }
  });
  


  return  (
    <Provider value={client}>
      <div className="App">
        <DisplayData />
      </div>
    </Provider>
    );
}

export default App;
