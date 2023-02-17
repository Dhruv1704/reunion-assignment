import Search from "./Search";
import Card from "./Card"
import rentProperty from "../data/rentProperty.json"
import {useState} from "react";

const Rent = () => {

    const [filter, setFilter] = useState("none");

    const filterToggle = ()=>{
        const filterDiv = document.getElementsByClassName("filter-div")[0]
        if(filter === "none"){
            setFilter("block")
            filterDiv.style.right = "0"
        }else{
            setFilter("none")
            filterDiv.style.right = "-250px"
        }
    }

    return (
        <>
            <main>
                <Search filterToggle={filterToggle}/>
                <div className={"cards"}>
                    {rentProperty.properties.map((element, index) => {
                        return <Card key={index} name={element.Name} image={element.image} address={element.address}
                                     rent={element.rent} rooms={element.rooms} area={element.area}
                                     moveInDate={element.moveInDate}
                                     propertyType={element.propertyType}/>
                    })
                    }
                </div>
            </main>
            <button className={"filter-button"} onClick={filterToggle}><i className="fa-solid fa-filter"></i></button>
        </>

    )
}
export default Rent;