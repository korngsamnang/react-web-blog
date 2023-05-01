import { Link, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/DataProvider";

const Nav = () => {
    const { setSearch } = useContext(AppContext);

    const [showSearch, setShowSearch] = useState(true);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setShowSearch(true);
        } else {
            setShowSearch(false);
        }
    }, [location]);

    return (
        <nav>
            {showSearch && (
                <input
                    type="text"
                    placeholder="Search Posts..."
                    onChange={event => setSearch(event.target.value)}
                />
            )}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create-post">Post</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
