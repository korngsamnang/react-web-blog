import EachPost from "../components/EachPost";
import { useContext } from "react";
import { AppContext } from "../context/DataProvider";

const Home = () => {
    const { filterLists, isLoading } = useContext(AppContext);
    return (
        <div>
            {!isLoading ? (
                filterLists.length ? (
                    filterLists.map(post => (
                        <EachPost post={post} key={post.id} />
                    ))
                ) : (
                    <p>No posts to display</p>
                )
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;
