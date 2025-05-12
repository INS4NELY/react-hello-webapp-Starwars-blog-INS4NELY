import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const People = () => {
    const { store } = useGlobalReducer()
    const { uid } = useParams();
    const [world, setWorld] = useState('')
    const person = store.People.results.find(person => person.uid === uid);

    useEffect(() => {
        if (!person) return
        (async () => {
            try {
                const response = await fetch(`${person.properties.homeworld}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                )

                const data = await response.json()
                setWorld(data.result.properties.name)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [person])
    
    return (
        <div>
            {store.People?.results?.length > 1 && world !== '' ? (
                <div>
                    <div className="mt-5 ms-5">
                        <Link to={'/'} className="btn btn-outline-secondary">Back to home</Link>
                    </div>
                    <div className="d-flex justify-content-center gap-5 m-5">
                        <div className="col-6 text-end">
                            <img src="https://i.ytimg.com/vi/mmY-qAmzsI4/hqdefault.jpg" className="card-img-top imgDesc" alt="..." />
                        </div>
                        <div className="col-6">
                            <h3>{person.properties.name}</h3>
                            <p>{person.description}</p>
                            <div className="row mt-5">
                                <p className="col-6"> Gender: {person.properties.gender}</p>
                                <p className="col-6">Eye Color: {person.properties.eye_color}</p>
                                <p className="col-6">Hair Color: {person.properties.hair_color}</p>
                                <p className="col-6">Height: {person.properties.height}</p>
                                <p className="col-6">Birth Year: {person.properties.birth_year}</p>
                                <p className="col-6">Mass: {person.properties.mass}</p>
                                <p className="col-6">Skin Color: {person.properties.skin_color}</p>
                                <p className="col-6">Homeworld: {world}</p>
                            </div>

                        </div>
                    </div>
                </div>

            ) : (
                <div className="spinner-border position-absolute top-50 start-50 translate-middle" role="status">

                </div>
            )}
        </div>
    )
}