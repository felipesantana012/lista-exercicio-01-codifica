import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState([]);
  const [buscar, setBuscar] = useState(false);
  const [id, setId] = useState(1);

  const URL = "https://jsonplaceholder.typicode.com/posts/";

  useEffect(() => {
    const apiUser = async () => {
      try {
        const res = await fetch(URL + id);
        const resJson = await res.json();
        setUser(resJson);
        console.log(resJson);
      } catch (error) {
        console.log(error);
      }
    };

    apiUser();

    const timer = setInterval(() => {
      console.log("chamou");
      setId((i) => i + 1);
    }, 30000);

    return () => {
      clearInterval(timer);
      setUser([]);
    };
  }, [id, buscar]);

  return (
    <div>
      <button
        onClick={() =>
          setBuscar(
            (item) => !item,
            setId((i) => i + 1)
          )
        }
      >
        Buscar o Proximo
      </button>
      {user ? (
        <ul>{<li key={user.id}>{user.title}</li>}</ul>
      ) : (
        <ul>
          <li>Carregando...</li>
        </ul>
      )}
    </div>
  );
}

export default App;
