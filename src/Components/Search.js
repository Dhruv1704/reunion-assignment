import PriceSlider from "./PriceSlider";
const Search = (props) => {

    const {filterToggle, search} = props

    const filter = ()=>{
        const properties = document.getElementsByClassName("card");

        Array.from(properties).forEach((element)=>{
            if(filterBender(element)){
                element.style.display = "block"
            }else{
                element.style.display = "none"
            }
        })
    }

    const filterBender = (element)=>{
        const location = document.getElementById("location").value;
        const dateId = document.getElementById("date-picker").value;
        console.log(dateId, 84)
        let date = dateId
        if(dateId ===""){
            date = dateId
        }else{
            date = new Date(dateId).toISOString()
        }
        const propertyType = document.getElementById("propertyType").value;
        const price1 = parseInt(document.getElementsByClassName("slider__left-value")[0].textContent)
        const price2 = parseInt(document.getElementsByClassName("slider__right-value")[0].textContent)

        const address = element.getElementsByTagName('p')[0].textContent
        const pType = element.getElementsByClassName("card-property-type")[0].textContent
        const pdate = new Date(element.getElementsByTagName('p')[2].textContent).toISOString()
        const rent = parseInt(element.getElementsByClassName("card-price")[0].textContent.replace(",","").replace("$",""))

        if(!(address.includes(location) || location==="all")) return false
        if(!(pType.includes(propertyType) || propertyType==="all")) return false
        if(!(rent>=price1 && rent<=price2)) return false
        if(!(date === "" || pdate<=date)) return false
        return true
    }

    return (
        <div className={"search"}>
            <div className={'search-div'}>
                <h1>Search properties to rent</h1>
                <input placeholder={"Search"} className={'search-bar'} id={"search-input"} onInput={search}/>
            </div>
            <form className={"filter-div"}>
                <div className={"filter-options-div"}>
                    <p className={"filter-p"}>Location</p>
                    <select name={"location"} id={"location"} className={"dropdown"}>
                        <option value={"all"}>All</option>
                        <option value={"Mumbai"}>Mumbai, IN</option>
                        <option value={"New York"}>New York, USA</option>
                        <option value={"London"}>London, UK</option>
                    </select>
                </div>
                <div className={"filter-vertical-border-div"}></div>
                <div className={"filter-options-div"}>
                    <p className={"filter-p"}>Select Move-in Date</p>
                    <input type={"date"} className={"date-picker"} id={"date-picker"}/>
                </div>
                <div className={"filter-vertical-border-div"}></div>
                <div className={"filter-options-div"}>
                    <p className={"filter-p"}>Price</p>
                    <PriceSlider/>
                </div>
                <div className={"filter-vertical-border-div"}></div>
                <div className={"filter-options-div"}>
                    <p className={"filter-p"}>Property Type</p>
                    <select name={"propertyType"} id={"propertyType"} className={"dropdown"}>
                        <option value={"all"}>All</option>
                        <option value={"Family"}>Family House</option>
                        <option value={"Beach"}>Beach House</option>
                        <option value={"Tiny"}>Tiny House</option>
                    </select>
                </div>
                <div className={"filter-vertical-border-div"}></div>
                <button className={"filter-search"} type={"button"} onClick={filter}><b>Search</b></button>
                <button className={"filter-cancel"} onClick={filterToggle} type={"button"}><b>Cancel</b></button>
            </form>
        </div>
    )
}

export default Search;