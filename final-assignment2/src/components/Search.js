//https://www.youtube.com/watch?v=sWVgMcz8Q44

// import React, { useState } from 'react';
// import axios from 'axios';

// const Search = ({setResults}) => {
  
//   const [input, setInput] = useState("");

//   const fetchData = (value) => {
//     axios.get("https://rickandmortyapi.com/api/character")
//       .then((response) => {
//         const results = response.data.results.filter((character) => {
//           return (
//             value && character && character.name.toLowerCase().includes(value.toLowerCase())
//           );
//         });
//         setResults(results);
//       })
//   };

//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   };

//   return (
//     <input
//       placeholder="Type to search..."
//       value={input}
//       onChange={(e) => handleChange(e.target.value)}
//     />
//   );
// };

// export default Search;