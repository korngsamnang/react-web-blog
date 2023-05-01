import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>Well, that's disappointing</p>
            <Link to="/">
                <p>Visit Our Homepage</p>
            </Link>
        </div>
    );
};

export default PageNotFound;
