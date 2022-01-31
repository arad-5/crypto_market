import React, {useState} from "react";

//compoenents
import Markets from "./components/markets/Markets";
import Navbar from "./components/Navbar";

function App() {
    const [data, setData] = useState([]);
    return (
        <>
            <Navbar data={data} setData={setData}/>
            <Markets data={data} setData={setData}/>
        </>
    );
}

export default App;
