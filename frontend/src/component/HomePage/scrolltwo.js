import "./scrolltwo.css"
import press1 from "../../assets/press-logos/press1.png"
import press2 from "../../assets/press-logos/press2.png"
import press3 from "../../assets/press-logos/press3.png"
import press4 from "../../assets/press-logos/press4.png"
import press5 from "../../assets/press-logos/press5.png"
import press6 from "../../assets/press-logos/press6.png"
import press7 from "../../assets/press-logos/press7.png"

const ScrollTwo = () => {

function mapPress(){
    const images = [press1, press2, press3, press4, press5, press6, press7]
    const newArr = []
    for (let i = 0; i < 7; i++) {
        let div = <img key={i} src={images[i]}alt="press-logo" />
        newArr.push(div)
    }
    return newArr
}
   
    return (
        <>
            <div id="second-scroll-page">
                <div id="press-swiper-container">
                    <div className="all-press">
                        <div className="press">
                            {mapPress()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="noodle-container">
                <svg className="text-path" viewBox="0 -20 425 300">
                    <path id="curve" d="M0,0C76.72,0,76.72,49.11,153.43,49.11S230.15,0,306.87,0,383.58,49.11,460.3,49.11,537,0,613.74,0"></path>
                    <text x="-100">
                        <textPath href="#curve" startOffset="50%">
                            <animate attributeName="startOffset" values="-500;0" dur="13s" repeatCount="indefinite"></animate>
                            Not a normal noodle ~ Not a normal noodle ~ Not a normal noodle ~ Not a normal noodle ~  Not a normal noodle ~ Not a normal noodle ~ Not a normal noodle ~ Not a normal noodle ~
                        </textPath>
                    </text>
                </svg>
            </div>
        </>
    )
}

export default ScrollTwo;