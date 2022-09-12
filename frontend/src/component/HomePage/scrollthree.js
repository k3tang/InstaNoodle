import "./scrollthree.css";
import kimchiVideo from "../../assets/scroll-three/spicy-kimchi.webm";
import curryVideo from "../../assets/scroll-three/yellow-curry.webm";
import misoVideo from "../../assets/scroll-three/smoky-mushroom.webm";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useRef } from "react";
import { connect } from "react-redux";


const ScrollThree = () => { 
    const container = useRef(); 
    
    return (
        <>
            <Swiper className="soup-swiper" id="soup-outer-container"
                spaceBetween={0}
                slidesPerView={2.15}
                loop={true}
                speed={500}
                noSwiping={true}
                slideToClickedSlide={true}
                centeredSlides={true}
                ref={container}
                >
                <SwiperSlide className="soup-inner-wrapper">
                    <div className="soup" id="kimchi-soup">
                        <div className="soup-img-wrapper">
                            <video onMouseOver={(e) => e.target.play()} onClick={() =>   {
                                container.current.style.backgroundColor = "#feb8af"
                                console.log(container, "hello")
                                // console.log(soupWrapper,"hello")
                            }} 
                            className="soup-video" src={kimchiVideo} alt="kimchi-soup-video"/>
                        </div>
                        <div className="soup-header">Spicy Kimchi</div>
                        <div className="soup-button">Try Now</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="soup-inner-wrapper">
                    <div className="soup" id="curry-soup">
                        <div className="soup-img-wrapper">
                            <video onMouseOver={(e) => e.target.play()}
                                onClick={() => container.current.style.backgroundColor = "#ffe394"} 
                                className="soup-video" src={curryVideo} alt="curry-soup-video" />
                        </div>
                        <div className="soup-header">Yellow Curry</div>
                        <div className="soup-button">Try Now</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="soup-inner-wrapper">
                    <div className="soup" id="miso-soup">
                        <div className="soup-img-wrapper">
                            <video onMouseOver={(e) => e.target.play()}
                                onClick={() => container.current.style.backgroundColor = "#bddabd"} 
                             className="soup-video" src={misoVideo} alt="miso-soup-video" />
                        </div>
                        <div className="soup-header">Smoky mushroom and miso</div>
                        <div className="soup-button">Try Now</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default ScrollThree; 