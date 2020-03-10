import { useState, useCallback } from "react";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const req = useCallback(async (url, method = "GET", body = null, headers = {}) => {
    setLoading(true);
    try {
      if (body) {
        body = JSON.stringify(body);
      }

      let res = await fetch(`https://react-tracker-task.herokuapp.com/${url}`, { headers, method, body });
      const data = await res.json();

      if (!res.ok) {
        setErrors(data.msg);
      }

      setLoading(false);
      return data;
    } catch (err) {
      setLoading(false);
      setErrors(err.message);
    }
  }, []);

  const clearErrors = useCallback(() => setErrors(null), []);

  return { loading, req, errors, clearErrors };
};
