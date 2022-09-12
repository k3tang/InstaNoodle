import "./scrolltwo.css"
import press1 from "../../assets/press-logos/press1.png"
import press2 from "../../assets/press-logos/press2.png"
import press3 from "../../assets/press-logos/press3.png"
import press4 from "../../assets/press-logos/press4.png"
import press5 from "../../assets/press-logos/press5.png"
import press6 from "../../assets/press-logos/press6.png"
import press7 from "../../assets/press-logos/press7.png"
import feature1 from "../../assets/feature-pics/feature1.png"
import feature2 from "../../assets/feature-pics/feature2.png"
import feature3 from "../../assets/feature-pics/feature3.png"
import feature4 from "../../assets/feature-pics/feature4.png"
import feature5 from "../../assets/feature-pics/feature5.png"
import feature6 from "../../assets/feature-pics/feature6.png"

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
                <svg className="text-path" viewBox="0 -20 425 100">
                    <path id="curve" d="M0,0C76.72,0,76.72,49.11,153.43,49.11S230.15,0,306.87,0,383.58,49.11,460.3,49.11,537,0,613.74,0"></path>
                    <text x="-100">
                        <textPath href="#curve" startOffset="50%">
                            <animate attributeName="startOffset" values="-500;0" dur="13s" repeatCount="indefinite"></animate>
                            Not a normal noodle ~ Not a normal noodle ~ Not a normal noodle ~ Not a normal noodle ~  Not a normal noodle ~ Not a normal noodle ~ Not a normal noodle ~ Not a normal noodle ~
                        </textPath>
                    </text>
                </svg>
            </div>
            <div className="grid-container">
                <div className="pure-g">
                    <div className="pure-u-1-2 pure-u-md-1-3 pure-u-lg-1-6">
                        <img src={feature1} className="feature-img" alt="feature-picture"/>
                        <div className="feature-header">NUTRITIONALLY
                            COMPLETE</div>
                        <div className="feature-text">Balanced in protein, fibre, carbs, vitamins & minerals</div>
                    </div>
                    <div className="pure-u-1-2 pure-u-md-1-3 pure-u-lg-1-6">
                        <img src={feature2} className="feature-img" alt="feature-picture" />
                        <div className="feature-header">SUPER
                            TASTY</div>
                        <div className="feature-text">Fresh flavours created by chef Carl Clarke</div>
                    </div>
                    <div className="pure-u-1-2 pure-u-md-1-3 pure-u-lg-1-6">
                        <img src={feature3} className="feature-img" alt="feature-picture" />
                        <div className="feature-header">PLANT
                            BASED</div>
                        <div className="feature-text">We are 100% vegan but you don't have to be</div>
                    </div>
                    <div className="pure-u-1-2 pure-u-md-1-3 pure-u-lg-1-6">
                        <img src={feature4} className="feature-img" alt="feature-picture" />
                        <div className="feature-header">SUPER
                            CONVENIENT</div>
                        <div className="feature-text">Just put the kettle on and add boiling water</div>
                    </div>
                    <div className="pure-u-1-2 pure-u-md-1-3 pure-u-lg-1-6">
                        <img src={feature5} className="feature-img" alt="feature-picture" />
                        <div className="feature-header">HEALTHY
                            PLANET</div>
                        <div className="feature-text">Sustainable ingredients and recyclable packaging</div>
                    </div>
                    <div className="pure-u-1-2 pure-u-md-1-3 pure-u-lg-1-6">
                        <img src={feature6} className="feature-img" alt="feature-picture" />
                        <div className="feature-header">GOOD
                            VALUE</div>
                        <div className="feature-text">Complete nutrition for just £3.75 per meal</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScrollTwo;