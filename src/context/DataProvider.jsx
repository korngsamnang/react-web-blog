import { createContext, useState } from "react";
import postData from "../../postData/posts.js";

export const AppContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState(postData);
    const [search, setSearch] = useState("");

    const filterLists = posts.filter(
        post =>
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.body.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <AppContext.Provider
            value={{ posts, filterLists, setPosts, setSearch }}
        >
            {children}
        </AppContext.Provider>
    );
};
