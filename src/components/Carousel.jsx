import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [count, setCount] = useState(0)
    // const details = {images}
    const image = images[count].img;
    const title = images[count].title;
    const subtitle = images[count].subtitle;

    const handleNext = () => {
        if(count == 2){
            setCount(0)
        }else{
            setCount(count+1)
        }
    }

    const handlePrevious = () => {
        if(count == 0){
            setCount(2)
        }else{
            setCount(count-1)
        }
    }

    return(
        <div  className="flex">
            <ArrowBackIosIcon className="arrows" onClick={handlePrevious}/>
            <div>
                <h1>{title}</h1>
                <img src={image} alt="" />
                <p>{subtitle}</p>
            </div>
            <ArrowForwardIosIcon className="arrows" onClick={handleNext}/>
        </div>
    )
}

export default Carousel;