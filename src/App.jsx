import { Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import About from "./pages/About";
import Nav from "./components/Nav";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import EachPostPage from "./pages/EachPostPage";
import Footer from "./components/Footer";
import EditPost from "./pages/EditPost";
import { DataProvider } from "./context/DataProvider";

const App = () => {
    return (
        <>
            <DataProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/post/:id" element={<EachPostPage />} />
                    <Route path="/edit-post/:id" element={<EditPost />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </DataProvider>
            <Footer />
        </>
    );
};

export default App;
