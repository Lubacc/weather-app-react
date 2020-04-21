import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, toFetch) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (toFetch) {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
          if (response.status === 200) {
            setData(response.data);
            setLoading(false);
          }
        } catch (error) {
          throw error;
        }
      };
      fetchData();
    }
  }, [url, toFetch]);
  return { data, loading };
};

export default useFetch;
