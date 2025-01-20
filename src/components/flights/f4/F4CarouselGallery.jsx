import myCarousels from './F4Carousel_Data'
import {Link} from "react-router-dom"

const F4CarouselGallery = ()=>{

    const getCarousels = myCarousels.map( caro =>
        <div key={caro.id} className='col'>

        </div>
    )

    return(
        <div>

        </div>
    )

}

export default F4CarouselGallery;


















