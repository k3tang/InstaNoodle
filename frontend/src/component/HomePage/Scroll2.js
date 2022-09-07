
import press1 from "../../assets/press-logos/press1.png"
import press2 from "../../assets/press-logos/press2.png"
import press3 from "../../assets/press-logos/press3.png"
import press4 from "../../assets/press-logos/press4.png"
import press5 from "../../assets/press-logos/press5.png"
import press6 from "../../assets/press-logos/press6.png"
import press7 from "../../assets/press-logos/press7.png"

const ScrollTwo = () => {

function mapPress(){
    const images = [press1,press2,press3]
    const newArr = []
    for (let i = 0; i < 8; i++) {
        let div = <img key={i} src={images[i]}alt="press-logo" />
        newArr.push(div)
    }
    return newArr
}
   
    return (
        <>
            <div id="second-scroll-page">
                <div id="press-swiper-container">
                    <h1>Hello world</h1>
                    <img src={press1} alt="press-logo"/>
                    <div className="press">
                        {mapPress()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScrollTwo;