import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState(
        JSON.parse(localStorage.getItem("posts")) || []
    );
    const [search, setSearch] = useState("");

    useEffect(() => {
        try {
            localStorage.setItem("posts", JSON.stringify(posts));
        } catch (error) {
            //occurs when you try to add too much data to local storage and exceed its size limit.
            if (error.name === "QuotaExceededError") {
                alert("Storage limit exceeded");
            }
        }
    }, [posts]);

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
