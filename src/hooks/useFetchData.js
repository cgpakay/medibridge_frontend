import { useEffect, useState } from "react";
import { token } from "../config";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("HERE?", response);

        const result = await response.json();
        console.log("RESULT IN EFFECT: ", result);

        if (!response.ok) {
          throw new Error(result.message + ". Back Off");
        }

        setData(result.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  // console.log("IN HOOK FETCH: ", data);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
