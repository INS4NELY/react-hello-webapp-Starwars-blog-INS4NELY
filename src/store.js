export const initialState = {
  People: { results: [] },
  Planets: { results: [] },
  Vehicles: { results: [] },
  Favorites: { results: [] },
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "people":
      return { ...store, People: action.payload };
    case "planets":
      return { ...store, Planets: action.payload };
    case "vehicles":
      return { ...store, Vehicles: action.payload };
    case "favorite":
      const exist = store.Favorites.results.some((item)=> item.link === action.payload.link)
        if (exist) return store
      return {
        ...store,
        Favorites: {
          results: [...store.Favorites.results, action.payload],
        },
      };
    case "removeFavorite":
      return {
        ...store,
        Favorites: {
          results: store.Favorites.results.filter(
            (item) => item.link !== action.payload.link
          ),
        },
      };
    default:
      throw Error("Unknown action.");
  }
}
