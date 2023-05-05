import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getPost = async () => {
            try {
                const response = await fetch("http://localhost:3500/posts");
                if (!response.ok) throw Error("Did not receive expected data");
                const data = await response.json();
                setPosts(data.reverse());
                setIsLoading(false);
            } catch (err) {
                alert(err.message);
            }
        };
        getPost();
    }, []);

    const filterLists = posts.filter(
        post =>
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.body.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <AppContext.Provider
            value={{ posts, filterLists, setPosts, setSearch, isLoading }}
        >
            {children}
        </AppContext.Provider>
    );
};
