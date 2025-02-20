import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);

  async function fetchTenRandomPeople() {
    const url = "https://randomuser.me/api/?results=10";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      const convertedResults = json["results"].map((item) => {
        return {
          name:
            item["name"]["title"] +
            " " +
            item["name"]["first"] +
            " " +
            item["name"]["last"],
          gender: item["gender"],
          ubication:
            item["location"]["city"] + " - " + item["location"]["country"],
          email: item["email"],
          birth_date: new Date(item["dob"]["date"]).toISOString().split("T")[0],
          photo: item["picture"]["large"],
        };
      });
      setPeople(convertedResults);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchTenRandomPeople();
  }, []);

  return (
    <>
      <h1>Reto Técnico 20-02-25</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Género</th>
            <th>Ubicación</th>
            <th>Email</th>
            <th>Fecha de nacimiento</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person["name"]}>
              <td>{person["name"]}</td>
              <td>{person["gender"]}</td>
              <td>{person["ubication"]}</td>
              <td>{person["email"]}</td>
              <td>{person["birth_date"]}</td>
              <td>
                <img src={person["photo"]} alt={person["name"]} width={320} height={320}></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
