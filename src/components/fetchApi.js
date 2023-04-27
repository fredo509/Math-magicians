import { useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          headers: {
            'X-Api-Key': '0TZGZyIFtJ3Yf8cbCWWtKg==EoYLYh82XSWDf5SW',
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {data.length > 0
                && (
                <div className="quoteBox">
                  <p>{data[0].quote}</p>
                  <h3>{data[0].author}</h3>
                </div>
                )}
    </>
  );
}

export default Quote;
