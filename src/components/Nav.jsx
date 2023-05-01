import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/DataProvider";

const Nav = () => {
    const { setSearch } = useContext(AppContext);
    return (
        <nav>
            <input
                type="text"
                placeholder="Search Posts..."
                onChange={event => setSearch(event.target.value)}
            />
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
