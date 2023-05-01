import { useParams, Link, useNavigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { useContext } from "react";
import { AppContext } from "../context/DataProvider";

const EachPostPage = () => {
    const { posts, setPosts } = useContext(AppContext);

    const { id } = useParams();
    const navigate = useNavigate();

    const post = posts.find(p => p.id.toString() === id);

    const handleDelete = () => {
        const updatedList = posts.filter(p => p.id.toString() !== id);
        setPosts(updatedList);
        navigate("/");
    };

    return (
        <div>
            {post ? (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.datetime}</p>
                    <p>{post.body}</p>
                    <Link to={`/edit-post/${post.id}`}>
                        <button>EDIT</button>
                    </Link>
                    <button onClick={handleDelete}>DELETE</button>
                </>
            ) : (
                <PageNotFound />
            )}
        </div>
    );
};

export default EachPostPage;
