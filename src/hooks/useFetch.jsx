import { useState, useCallback } from "react";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ msg: "", isErrors: false });
  const req = useCallback(async (url, method = "GET", body = null, headers = {}) => {
    setLoading(true);
    try {
      if (body) {
        body = JSON.stringify(body);
      }

      let res = await fetch(`https://react-tracker-task.herokuapp.com${url}`, { headers, method, body });
      const data = await res.json();

      if (!res.ok) {
        setErrors({ msg: data.msg, isError: true });
        setLoading(false);
        return false;
      }

      setLoading(false);
      return data;
    } catch (err) {
      setLoading(false);
      setErrors({ msg: err.message, isError: true });
    }
  }, []);

  const clearErrors = useCallback(() => setErrors(null), []);

  return { loading, req, errors, clearErrors };
};
