import {createRoot} from "react-dom/client"


import {Forms} from "./Forms";
const d=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]



createRoot(document.getElementById("root")).render(



    <>
    {d.map((ele) => {
        return <Forms name = {ele} key={ele}/>


    })}
    </>
)