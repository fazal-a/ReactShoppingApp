import { useEffect } from "react";

function UseFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => setError(err));
  }, [url]);

  return { data, error };
}

export default UseFetch;
