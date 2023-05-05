import { useContext, useState } from "react";
import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/DataProvider";
import apiRequest from "../services/apiRequest.js";

const CreatePost = () => {
    const API_URL = "http://localhost:3500/posts";
    const { posts, setPosts } = useContext(AppContext);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        if (!title || !body) return;

        const datetime = format(new Date(), "MMMM dd, yyyy pp");

        const postObj = {
            id: uuid(),
            title,
            body,
            datetime,
        };
        setPosts([postObj, ...posts]);

        const postRequestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postObj),
        };
        const result = await apiRequest(API_URL, postRequestOptions);
        if (result) alert(result);

        navigate("/");
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    onChange={event => setTitle(event.target.value)}
                />
                <textarea
                    rows="20"
                    onChange={event => setBody(event.target.value)}
                />
            </form>
            <button type="submit" onClick={handleSubmit}>
                Summit
            </button>
        </div>
    );
};

export default CreatePost;
