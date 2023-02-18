import MultiRangeSlider from "react-js-multi-range-sliders";

function PriceSlider(){
    return (
        <MultiRangeSlider
            className={"slider"}
            title={""}
            min={1000}
            max={10000}
            onChange={({min, max})=> console.log()}
        />
    );
}

export default PriceSlider;