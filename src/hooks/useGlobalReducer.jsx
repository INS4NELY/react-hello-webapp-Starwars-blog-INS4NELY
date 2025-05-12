import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialState } from "../store"

const StoreContext = createContext()

export function StoreProvider({ children }) {
    const [store, dispatch] = useReducer(storeReducer, initialState)
    useEffect(() => {
        (async () => {
            try {
                {
                    const response = await fetch('https://www.swapi.tech/api/people/', {
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                    )

                    const data = await response.json()
                    const detailed = await Promise.all(
                        data.results.map(async (person) => {
                            const res = await fetch(`https://www.swapi.tech/api/people/${person.uid}`);
                            const detail = await res.json();
                            return detail.result;
                        })
                    );

                    dispatch({
                        type: 'people', payload: { results: detailed }
                    })

                }
                {
                    const response = await fetch('https://www.swapi.tech/api/planets/', {
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                    )
                    const data = await response.json()
                    const detailed = await Promise.all(
                        data.results.map(async (planet) => {
                            const res = await fetch(`https://www.swapi.tech/api/planets/${planet.uid}`);
                            const detail = await res.json();
                            return detail.result;
                        })
                    );

                    dispatch({
                        type: 'planets', payload: { results: detailed }
                    })

                }
                {
                    const response = await fetch('https://www.swapi.tech/api/vehicles/', {
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                    )

                    const data = await response.json()
                    const detailed = await Promise.all(
                        data.results.map(async (vehicle) => {
                            const res = await fetch(`https://www.swapi.tech/api/vehicles/${vehicle.uid}`);
                            const detail = await res.json();
                            return detail.result;
                        })
                    );

                    dispatch({
                        type: 'vehicles', payload: { results: detailed }
                    })

                }
            } catch (error) {
                console.log(error);

            }
        })()
    }, [dispatch])

    return <StoreContext.Provider value={{ store, dispatch }}>
        {children}
    </StoreContext.Provider>
}

export default function useGlobalReducer() {
    return useContext(StoreContext)
}