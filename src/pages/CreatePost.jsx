import { useContext, useState } from "react";
import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/DataProvider";
import api from "../services/apiRequest";

const CreatePost = () => {
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

        try {
            const response = await api.post("/posts", postObj);
            setPosts([response.data, ...posts]);
            navigate("/");
        } catch (err) {
            console.log(`Error: ${err.messages}`);
        }
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
