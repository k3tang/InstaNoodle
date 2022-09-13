import "./index.css";
import kimchiVideo from "../../assets/scroll-three/spicy-kimchi.webm";
import curryVideo from "../../assets/scroll-three/yellow-curry.webm";
import misoVideo from "../../assets/scroll-three/smoky-mushroom.webm";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { useRef } from "react";



const ScrollThree = () => { 
    const container = useRef(); 
    
    return (
        <>
            <Swiper className="soup-swiper" id="soup-outer-container"
                spaceBetween={0}
                slidesPerView={2.15}
                loop={true}
                speed={500}
                // noSwiping={true}
                // noSwipingClass={"soup-inner-wrapper"}
                allowTouchMove={false}
                allowSlidePrev={false}
                slideToClickedSlide={true}
                centeredSlides={true}
                pr
                ref={container}
                >
                <SwiperSlide className="soup-inner-wrapper">
                    <div className="soup" id="kimchi-soup">
                        <div className="soup-img-wrapper">
                            <video onMouseOver={(e) => e.target.play()} onClick={() =>   {
                                container.current.style.backgroundColor = "#feb8af"
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