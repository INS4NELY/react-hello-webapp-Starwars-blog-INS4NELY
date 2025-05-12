import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  console.log(store);

  const addFavorite = (link, item) => {
    if (link !== store.favorite) {
      dispatch({
        type: "favorite",
        payload: { link: link, item: item },
      });
    }
  };
  return (
    <div>
      <div className="mx-5 my-5">
        <h3 className="ms-3 mt-3">Characters</h3>
        <div className="d-flex flex-nowrap overflow-x-auto gap-3 p-3">
          {store.People?.results?.length > 1 ? (
            store.People.results.map((item) => (
              <div className="card cardStyle flex-shrink-0" key={item.uid}>
                <img
                  src="https://i.ytimg.com/vi/mmY-qAmzsI4/hqdefault.jpg"
                  className="card-img-top imgStyle"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{item.properties.title}</strong>
                  </h5>
                  <p className="card-text">
                    Gender: <strong>{item.properties.gender}</strong>
                  </p>
                  <p className="card-text">
                    Hair Color: <strong>{item.properties.hair_color}</strong>
                  </p>
                  <p className="card-text">
                    Eye Color: <strong>{item.properties.eye_color}</strong>
                  </p>
                  <div className="d-flex justify-content-between">
                    <Link
                      to={`/people/${item.uid}`}
                      state={{ properties: item }}
                      className="btn btn-outline-primary"
                    >
                      More Information
                    </Link>
                    <button
                      className="btnStyle "
                      onClick={() => {
                        addFavorite(`/people/${item.uid}`, item);
                      }}
                    >
                      <i className="ri-star-line text-warning fs-4"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="spinner-border" role="status"></div>
          )}
        </div>
        <div>
          <h3 className="ms-3 mt-5">Planets</h3>
          <div className="d-flex flex-nowrap overflow-x-auto gap-3 p-3">
            {store.Planets?.results?.length > 1 ? (
              store.Planets.results.map((item) => (
                <div className="card cardStyle flex-shrink-0" key={item.uid}>
                  <img
                    src="https://i.ytimg.com/vi/mmY-qAmzsI4/hqdefault.jpg"
                    className="card-img-top imgStyle"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <strong>{item.properties.name}</strong>
                    </h5>
                    <p className="card-text">
                      Climate: <strong>{item.properties.climate}</strong>
                    </p>
                    <p className="card-text">
                      Terrain: <strong>{item.properties.terrain}</strong>
                    </p>
                    <p className="card-text">
                      Gravity: <strong>{item.properties.gravity}</strong>
                    </p>
                    <div className="d-flex justify-content-between">
                      <Link
                        to={`/planet/${item.uid}`}
                        className="btn btn-outline-primary"
                      >
                        More Information
                      </Link>
                    <button
                      className="btnStyle "
                      onClick={() => {
                        addFavorite(`/planet/${item.uid}`, item);
                      }}
                    >
                      <i className="ri-star-line text-warning fs-4"></i>
                    </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="spinner-border" role="status"></div>
            )}
          </div>
        </div>
        <div>
          <h3 className="ms-3 mt-5">Vehicles</h3>
          <div className="d-flex flex-nowrap overflow-x-auto gap-3 p-3">
            {store.Vehicles?.results?.length > 1 ? (
              store.Vehicles.results.map((item) => (
                <div className="card cardStyle flex-shrink-0" key={item.uid}>
                  <img
                    src="https://i.ytimg.com/vi/mmY-qAmzsI4/hqdefault.jpg"
                    className="card-img-top imgStyle"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <strong>{item.properties.name}</strong>
                    </h5>
                    <p className="card-text">
                      Model: <strong>{item.properties.model}</strong>
                    </p>
                    <p className="card-text">
                      Passengers: <strong>{item.properties.passengers}</strong>
                    </p>
                    <p className="card-text">
                      Vehicle Class:{" "}
                      <strong>{item.properties.vehicle_class}</strong>
                    </p>
                    <div className="d-flex justify-content-between">
                      <Link
                        to={`/vehicle/${item.uid}`}
                        className="btn btn-outline-primary"
                      >
                        More Information
                      </Link>
                    <button
                      className="btnStyle "
                      onClick={() => {
                        addFavorite(`/vehicle/${item.uid}`, item);
                      }}
                    >
                      <i className="ri-star-line text-warning fs-4"></i>
                    </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="spinner-border" role="status"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
