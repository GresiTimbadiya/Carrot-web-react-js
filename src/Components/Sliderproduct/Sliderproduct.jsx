import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const Sliderproduct = ({ productList }) => {
    return (
        <>
            <div className="container" style={{ marginTop: '90px' }}>
                <div className="row g-4">
                    {/* Slider Section */}
                    <div className="col-12 col-lg-6">
                        <div className="slider-container">
                            <Swiper
                                style={{ padding: '0 10px 30px' }}
                                modules={[Autoplay, Navigation, Pagination]}
                                spaceBetween={20}
                                slidesPerView={2}
                                loop={true}
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false,
                                }}
                                speed={1000}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    576: { slidesPerView: 2 }
                                }}
                            >
                                {productList.slice(1).map((val, i) => (
                                    <SwiperSlide key={val.id}>
                                        <div className="card text-center h-100 position-relative">
                                            <div className="hover-icons position-absolute d-flex flex-column">
                                                <FaRegHeart className="mb-2 icon-hover rounded-5 bg-light" />
                                                <FaRegEye className="icon-hover rounded-5 bg-light" />
                                            </div>

                                            <img src={val.image} className="card-img-top rounded p-2 img-fluid" alt={val.name} />
                                            <div className="card-body pt-1">
                                                <p className="card-text text-secondary m-0">{val.category}</p>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <img src={val.star} className="my-3 me-1" width={100} alt="" />
                                                    <span className="text-secondary" style={{ fontSize: '15px' }}>({val.rating})</span>
                                                </div>
                                                <h5 className="card-title mb-3" style={{ fontSize: '17px' }}>{val.name}</h5>
                                                <p className="card-text">
                                                    <span className="text-success fw-bold me-1" style={{ fontSize: '18px' }}>{val.price}</span>
                                                    <del className="text-secondary" style={{ fontSize: '15px' }}>{val.oldPrice}</del>
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* Image Promotion Section */}
                    <div className="col-12 col-lg-6">
                        <div className="position-relative text-white">
                            <img
                                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/products-rightview.jpg"
                                className="img-fluid rounded w-100"
                                alt=""
                            />
                            <div
                                className="position-absolute text-center"
                                style={{ top: '45%', left: '80%', transform: 'translate(-50%, -50%)' }}
                            >
                                <h2 className="fw-bold text-dark">Organic & <br /> Healthy <br /> Vegetables</h2>
                                <div className="d-flex align-items-center justify-content-center my-3 text-dark">
                                    <h3 className="me-2">25%</h3> OFF
                                </div>
                                <button className="btn text-white shop-btn">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sliderproduct