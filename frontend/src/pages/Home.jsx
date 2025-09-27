import React, { useEffect, useState } from 'react';

const Home = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div>
      <h1>{msg || "Loading..."}</h1>
      <p>This is the home page of our React app.</p>
    </div>
  );
};

export default Home;