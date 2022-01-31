import React, { useState } from "react";

//compoenents
import Markets from "./components/markets/Markets";
import Navbar from "./components/Navbar";
import SearchResults from "./components/searchResults/SearchResults";

function App() {
    const [data, setData] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    return (
        <>
            <Navbar isSerching={isSearching} setIsSearching={setIsSearching} setData={setData} />
            {isSearching ? <SearchResults isSerching={isSearching} setIsSearching={setIsSearching} data={data} setData={setData} /> : <Markets data={data} setData={setData} />}
        </>
    );
}

export default App;
