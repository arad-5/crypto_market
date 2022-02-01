import React, { useState, useContext } from "react";

//context
import { Markets_data_context } from "./components/context/Markets_data_context_provider";

//compoenents
import Markets from "./components/markets/Markets";
import Navbar from "./components/Navbar";
import SearchResults from "./components/searchResults/SearchResults";
function App() {
    const [searchActive, setSearchActive] = useState(false);

    const { markets_data } = useContext(Markets_data_context);
    const { all_coins_search_results } = markets_data;

    return (
        <>
            <Navbar searchActive={searchActive} setSearchActive={setSearchActive} />
            {!!!all_coins_search_results.length ? <Markets searchActive={searchActive} /> : <SearchResults results={all_coins_search_results} />}
        </>
    );
}

export default App;
