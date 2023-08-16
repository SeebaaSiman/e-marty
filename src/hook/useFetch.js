import { useState, useEffect } from "react";

export const useFetch = (url, options = {}) => {
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(false);
 const [cachedData, setCachedData] = useState(null);

 useEffect(() => {
  const fetchData = async () => {
   setLoading(true);

   try {
    // Verificar si los datos están en cache
    if (cachedData && cachedData.url === url) {
     setData(cachedData.data);
    } else {
     const response = await fetch(url, options);


     if (!response.ok) {
      throw new Error('Network response was not ok');
     }

     const data = await response.json();
     setData(data);

     // Almacenar la respuesta en el cache
     setCachedData({ url, data });
    }

   } catch (error) {
    setError(error);
   } finally {
    setLoading(false);
   }
  };

  fetchData();
 }, [url, options, cachedData]);

 return { data, error, loading };
};


//* Modo de uso

// const MyComponent = () => {
//   const { data, error, loading } = useFetch('url');

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>
//           <h3>{item.title}</h3>
//           <p>{item.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyComponent;
