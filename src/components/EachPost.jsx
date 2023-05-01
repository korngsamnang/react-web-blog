import { Link } from "react-router-dom";

const EachPost = ({ post }) => {
    return (
        <div>
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.datetime}</p>
            </Link>
            <p>
                {post.body.length <= 50
                    ? post.body
                    : post.body.slice(0, 50) + "..."}
            </p>
        </div>
    );
};

export default EachPost;
