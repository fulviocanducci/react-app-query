import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading";
import Card from "../Card";
import Error from "../Error";

function App() {
  const [ddd, setDdd] = useState("");
  const [value, setValue] = useState(null);
  const { isLoading, isError, error, data } = useQuery(
    ["ddd", value],
    () => axios.get(`https://brasilapi.com.br/api/ddd/v1/${value}`),
    {
      enabled: !!value && value.length === 2,
    }
  );
  function onSubmitHandle(e) {
    e.preventDefault();
    setValue(ddd);
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mt-3 mb-3">
      <form onSubmit={onSubmitHandle}>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            maxLength={2}
            value={ddd}
            placeholder={"DDD"}
            onChange={(e) => setDdd(e?.target?.value)}
          />
          <button
            className="btn btn-outline-primary"
            type="submit"
            id="button-addon2"
          >
            Buscar
          </button>
        </div>
      </form>
      {isError && <Error message={`${error.message}`} />}
      {data && data.data && (
        <Card title="Lista de Cidades" subTitle={data.data.state}>
          <div>
            <div className="mt-3 mb-3">
              <small>
                <strong className="text-muted">Quantidade de cidade(s):</strong>{" "}
                <span className="text-primary">{data.data.cities.length}</span>
              </small>
            </div>
            <ul className="list-group list-group-flush">
              {data &&
                data.data &&
                data.data.cities &&
                data.data.cities.map((item, index) => (
                  <li className="list-group-item" key={index}>
                    <small>{item}</small>
                  </li>
                ))}
            </ul>
          </div>
        </Card>
      )}
    </div>
  );
}

export default App;
