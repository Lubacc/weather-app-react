import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, toFetch) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (toFetch) {
      const fetchData = async () => {
        try {
          const response = await axios.get(url, toFetch);
          if (response.status === 200) {
            setData(response.data);
          }
        } catch (error) {
          throw error;
        }
      };
      fetchData();
    }
  }, [url, toFetch]);
  return { data };
};

export default useFetch;
