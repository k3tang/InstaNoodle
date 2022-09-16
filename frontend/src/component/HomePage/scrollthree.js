import "./index.css";
import kimchiVideo from "../../assets/scroll-three/spicy-kimchi.webm";
import curryVideo from "../../assets/scroll-three/yellow-curry.webm";
import misoVideo from "../../assets/scroll-three/smoky-mushroom.webm";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import { useRef } from "react";
import hoodieCartoon from "../../assets/scroll-three/hoodie-cartoon.png"



const ScrollThree = () => { 
    const container = useRef(); 
    
    return (
        <>
            <Swiper className="soup-swiper" id="soup-outer-container"
                spaceBetween={0}
                slidesPerView={2.15}
                loop={true}
                speed={500}
                allowTouchMove={false}
                allowSlidePrev={true}
                slideToClickedSlide={true}
                centeredSlides={true}
                ref={container}
                >
                <SwiperSlide className="soup-inner-wrapper">
                    <div className="soup" id="kimchi-soup">
                        <div className="soup-img-wrapper">
                            <video onMouseOver={(e) => e.target.play()} onClick={() => {
                                container.current.style.backgroundColor = "#feb8af"
                            }} 
                            className="soup-video" src={kimchiVideo} alt="kimchi-soup-video"/>
                        </div>
                        <div className="soup-header">Spicy Kimchi</div>
                        <a href="/products/3" className="soup-button">Try Now</a>
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
                        <a href="/products/4" className="soup-button">Try Now</a>
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
                        <a href="/products/5" className="soup-button">Try Now</a>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper className="reviews-swiper"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1.75}
                loop={true}
                speed={500}
                centeredSlides={true}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                centeredSlides={true}
                >
                <SwiperSlide className="review-slide">
                    <div className="review-text">
                        <h2 className="review-desc">
                            "Plant-based instant noodle pots that won't make you hate yourself."
                        </h2>
                        <h3 className="review-author">Jay Rayner - Food Writer</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="review-slide">
                    <div className="review-text">
                        <h2 className="review-desc">
                            "I'm pleased to say they were pretty damn good."
                        </h2>
                        <h3 className="review-author">Mob Kitchen</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="review-slide">
                    <div className="review-text">
                        <h2 className="review-desc">
                            "Future Noodles are totally delicious and have got exactly what you need."
                        </h2>
                        <h3 className="review-author">GQ Magazine</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="review-slide">
                    <div className="review-text">
                        <h2 className="review-desc">
                            "Bloody delicious. Superior to anything on the market. So good for you."
                        </h2>
                        <h3 className="review-author">Gizzi Erskine - Chef & Writer</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="review-slide">
                    <div className="review-text">
                        <h2 className="review-desc">
                            "Amazing achievement. Nutritious and helping heal our planet. Carl is a pioneer at spreading love."
                        </h2>
                        <h3 className="review-author">Brad Carter - Michelin Star</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="review-slide">
                    <div className="review-text">
                        <h2 className="review-desc">
                            "These are delicious bowls of goodness."
                        </h2>
                        <h3 className="review-author">Lisa Markwell - Sunday Times</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="review-slide">
                    <div className="review-text">
                        <h2 className="review-desc">
                            "All the nostalgia of super noodles but delicious, nutritious, and planet saving - what's not to love!"
                        </h2>
                        <h3 className="review-author">John Chantarasak - Great British Menu</h3>
                    </div>
                </SwiperSlide>
            <img src={hoodieCartoon} alt="cartoon-with-hoodie" id="cartoon-hoodie"/>
            </Swiper>
        </>
    )
}

export default ScrollThree; 