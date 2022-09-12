import "./scrollthree.css";
import kimchiVideo from "../../assets/scroll-three/spicy-kimchi.webm";
import curryVideo from "../../assets/scroll-three/yellow-curry.webm";
import misoVideo from "../../assets/scroll-three/smoky-mushroom.webm";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


const ScrollThree = () => { 
    // const clips = document.getElementsByClassName("soup-video")
    // Array.from(clips).map(clip => {
    //     clip.addEventListener('mouseover', function(e){clip.play()})
    //     // clip.addEventListener('mouseout', function(e){clip.pause()})
    // })

    const soupWrapper = document.getElementById("soup-outer-container")


    return (
        <>
            <Swiper className="soup-swiper" id="soup-outer-container"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={2.15}
                loop={true}
                speed={500}
                slideToClickedSlide={true}
                centeredSlides={true}
                >
                <SwiperSlide className="soup-inner-wrapper">
                    <div className="soup" id="kimchi-soup">
                        <div className="soup-img-wrapper">
                            <video onMouseOver={(e) => e.target.play()} onClick={() => soupWrapper.style.backgroundColor = "#feb8af"} 
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
                                onClick={() => soupWrapper.style.backgroundColor = "#ffe394"} className="soup-video" src={curryVideo} alt="curry-soup-video" />
                        </div>
                        <div className="soup-header">Yellow Curry</div>
                        <div className="soup-button">Try Now</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="soup-inner-wrapper">
                    <div className="soup" id="miso-soup">
                        <div className="soup-img-wrapper">
                            <video onMouseOver={(e) => e.target.play()}
                                onClick={() => soupWrapper.style.backgroundColor = "#bddabd"} 
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