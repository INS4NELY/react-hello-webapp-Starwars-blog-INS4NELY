import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

export const Planets = () => {
  const { store } = useGlobalReducer();
  const { uid } = useParams();
  const planet = store.Planets.results.find((planet) => planet.uid === uid);

  return (
    <div>
      {store.Planets?.results?.length > 1 ? (
        <div>
          <div className="mt-5 ms-5">
            <Link to={"/"} className="btn btn-outline-secondary">
              Back to home
            </Link>
          </div>
          <div className="d-flex justify-content-center gap-5 m-5">
            <div className="col-6 text-end">
              <img
                src="https://i.ytimg.com/vi/mmY-qAmzsI4/hqdefault.jpg"
                className="card-img-top imgDesc"
                alt="..."
              />
            </div>
            <div className="col-6">
              <h3>{planet.properties.name}</h3>
              <p>{planet.description}</p>
              <div className="row mt-5">
                <p className="col-6"> Climate: {planet.properties.climate}</p>
                <p className="col-6">Diameter: {planet.properties.diameter}</p>
                <p className="col-6">Gravity: {planet.properties.gravity}</p>
                <p className="col-6">
                  Orbital Period: {planet.properties.orbital_period}
                </p>
                <p className="col-6">
                  Population: {planet.properties.population}
                </p>
                <p className="col-6">
                  Rotation Period: {planet.properties.rotation_period}
                </p>
                <p className="col-6">
                  Surface Water: {planet.properties.surface_water}
                </p>
                <p className="col-6">terrain: {planet.properties.terrain}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div
            className="spinner-border"
            role="status"
          ></div>
        </div>
      )}
    </div>
  );
};
