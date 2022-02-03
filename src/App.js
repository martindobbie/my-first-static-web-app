import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return <div>
    {data}
    <a href="/.auth/login/aad">Login</a>
    <a href="/.auth/logout">Log out</a>
    </div>;
}

export default App;
