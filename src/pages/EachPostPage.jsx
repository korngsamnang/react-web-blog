import { useParams, Link, useNavigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { useContext } from "react";
import { AppContext } from "../context/DataProvider";
import apiRequest from "../services/apiRequest.js";

const EachPostPage = () => {
    const { posts, setPosts, isLoading } = useContext(AppContext);

    const API_URL = "http://localhost:3500/posts";
    const { id } = useParams();
    const navigate = useNavigate();

    const post = posts.find(p => p.id.toString() === id);

    const handleDelete = async () => {
        const updatedList = posts.filter(p => p.id.toString() !== id);
        setPosts(updatedList);

        const deleteRequestOptions = {
            method: "DELETE",
        };
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, deleteRequestOptions);
        if (result) alert(result);
        navigate("/");
    };

    return (
        <div>
            {!isLoading ? (
                post ? (
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
                )
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EachPostPage;
