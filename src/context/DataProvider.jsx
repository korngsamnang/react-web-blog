import { createContext, useEffect, useState } from "react";
import api from "../services/apiRequest";

export const AppContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getPost = async () => {
            try {
                const response = await api.get("/posts");
                setPosts(response.data.reverse());
                setIsLoading(false);
            } catch (err) {
                if (err.response) {
                    //Not in the 200 response range
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
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
