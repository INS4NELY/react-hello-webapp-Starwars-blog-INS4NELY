import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!open);
  const location = useLocation();

  useEffect(()=> {
    setOpen(false)
  },[location.pathname])

  const removeFavorite = (link, item) => {
    dispatch({
      type: "removeFavorite",
      payload: { link: link, item: item },
    });
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg"
            alt=""
            className="imgSW"
          />
        </Link>
        <div className="d-flex">
          <button className="btn btn-warning m-3" onClick={toggleSidebar}>
            Favorite Star Wars
          </button>
          <div
            className={`bg-dark text-white p-3 position-fixed top-0 end-0 h-100 transition ${
              open ? "translate-x-0" : "translate-x-minus"
            }`}
            style={{
              width: "30%",
              zIndex: 1000,
              transition: "transform 0.3s ease",
              transform: open ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <button className="btnStyle ms-2" onClick={toggleSidebar}>
              <i className="ri-close-large-line fs-3 text-secondary"></i>
            </button>
            <h4 className="text-center"> Favorite Star Wars</h4>
            {store.Favorites.results?.length > 0 &&
              store.Favorites.results.map((item) => (
                <div className="d-flex justify-content-between align-items-center mx-5 mt-3" key={item.item._id}>
                  <Link to={item.link} className="fs-5 text-decoration-none textLink">{item.item.properties.name}</Link>
                  <button
                    className="btnStyle"
                    onClick={() => {
                      removeFavorite(item.link, item.item);
                    }}
                  >
                    
                    <i className="ri-delete-bin-line fs-5"></i>
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
