import React from "react";
import { useEffect, useState } from "react";
import { token } from "../config";
/* import { toast } from "react-toastify"; */

const UseFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, {
          headers: { Authorization: `bearer ${token}` },
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(
            result.message + "Sorry, not possible to access data"
          );
        }
        setData(result.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default UseFetchData;