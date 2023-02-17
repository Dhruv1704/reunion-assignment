const Search = (props) => {

    const {filterToggle} = props

    return (
        <div className={"search"}>
            <div className={'search-div'}>
                <h1>Search properties to rent</h1>
                <input placeholder={"Search Property Name"} className={'search-bar'}/>
            </div>
            <div className={"filter-div"}>
                <div className={"filter-options-div"}>
                    <p className={"filter-p"}>Location</p>
                    <h4>New York, USA</h4>
                </div>
                <div className={"filter-vertical-border-div"}></div>
                <div className={"filter-options-div"}>
                    <p className={"filter-p"}>When</p>
                    <h4>Select Move-in Date</h4>
                </div>
                <div className={"filter-vertical-border-div"}></div>
                <div className={"filter-options-div"}>
                    <p className={"filter-p"}>Price</p>
                    <h4>$500-$2,500</h4>
                </div>
                <div className={"filter-vertical-border-div"}></div>
                <div className={"filter-options-div"}>
                    <p className={"filter-p"}>Property Type</p>
                    <h4>Houses</h4>
                </div>
                <div className={"filter-vertical-border-div"}></div>
                <button className={"filter-search"}><b>Search</b></button>
                <button className={"filter-cancel"} onClick={filterToggle}><b>Cancel</b></button>
            </div>
        </div>
    )
}

export default Search;