import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

export const Vehicles = () => {
  const { store } = useGlobalReducer();
  const { uid } = useParams();
  const vehicle = store.Vehicles.results.find((planet) => planet.uid === uid);

  return (
    <div>
      {store.Vehicles?.results?.length > 1 ? (
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
              <h3>{vehicle.properties.name}</h3>
              <p>{vehicle.description}</p>
              <div className="row mt-5">
                <p className="col-6"> Cargo Capacity: {vehicle.properties.cargo_capacity}</p>
                <p className="col-6">
                  Consumables: {vehicle.properties.consumables}
                </p>
                <p className="col-6">
                  Cost in Credits: {vehicle.properties.cost_in_credits}
                </p>
                <p className="col-6">Crew: {vehicle.properties.crew}</p>
                <p className="col-6">
                  Length: {vehicle.properties.length}
                </p>
                <p className="col-6">Manufacturer: {vehicle.properties.manufacturer}</p>
                <p className="col-6">
                  Max Atmosphering Speed: {vehicle.properties.max_atmosphering_speed}
                </p>
                <p className="col-6">Passengers: {vehicle.properties.passengers}</p>
                <p className="col-6">Vehicle Class: {vehicle.properties.vehicle_class}</p>
                <p className="col-6">Model: {vehicle.properties.model}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="spinner-border position-absolute top-50 start-50 translate-middle"
          role="status"
        ></div>
      )}
    </div>
  );
};
