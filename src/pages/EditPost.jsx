import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/DataProvider";

const EditPost = () => {
    const { posts, setPosts } = useContext(AppContext);
    const [editTitle, setEditTitle] = useState(" ");
    const [editBody, setEditBody] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    const post = posts.find(p => p.id.toString() === id);
    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post]);
    const handleEdit = event => {
        event.preventDefault();
        if (!editTitle || !editBody) return;

        const editedPost = {
            ...post,
            title: editTitle,
            body: editBody,
        };

        setPosts(posts.map(p => (p.id.toString() === id ? editedPost : p)));
        navigate("/");
    };

    return (
        <div>
            <h2>Edit Post</h2>
            <form onSubmit={handleEdit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    onChange={event => setEditTitle(event.target.value)}
                    value={editTitle}
                />
                <textarea
                    rows="20"
                    onChange={event => setEditBody(event.target.value)}
                    value={editBody}
                />
            </form>
            <button type="submit" onClick={handleEdit}>
                Summit
            </button>
        </div>
    );
};

export default EditPost;
