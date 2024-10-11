import { useState, useEffect } from "react";
import API_KEY from "../../key/key";

const CONTEXT_KEY = "67135760f79d9433f"; // Your context key

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        );
        const result = await response.json();
        setData(result); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching Google search data:", error);
      }
    };

    if (term) {
      fetchData(); // Only fetch data when there's a search term
    }
  }, [term]);

  return { data };
};

export default useGoogleSearch;
