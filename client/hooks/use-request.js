import axios from 'axios';
import { useState } from 'react';

const doRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const doRequest = async () => {
    try {
      setErrors(null);
      setLoading(true);
      const response = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <ul className="my-0">
          {err.response.data.errors.map((err) => (
            <span key={err.message}>{err.message}</span>
          ))}
        </ul>,
      );
    } finally {
      setLoading(false);
    }
  };
  return { doRequest, errors, loading };
};

export default doRequest;
