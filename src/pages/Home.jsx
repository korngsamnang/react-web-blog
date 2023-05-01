import EachPost from "../components/EachPost";
import { useContext } from "react";
import { AppContext } from "../context/DataProvider";

const Home = () => {
    const { posts } = useContext(AppContext);
    return (
        <div>
            {posts.length ? (
                posts.map(post => <EachPost post={post} key={post.id} />)
            ) : (
                <p>No posts to display</p>
            )}
        </div>
    );
};

export default Home;
