
const Banner = ({ sliders }) => {
    return (
        <div id="carouselExample" className="carousel slide w-100" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">
                {sliders.map((item, i) => (
                    <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i} style={{ position: 'relative' }}>
                        <img
                            src={item.img}
                            className="w-100 py-2"
                            style={{ height: 500, objectFit: 'cover' }}
                            alt={`Slide ${i + 1}`}
                        />
                        <div
                            className="col-sm-8 col-md-6 col-lg-5 d-flex flex-column justify-content-center align-items-start"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                paddingLeft: '4rem'
                            }}
                        >
                            <h3>{item.title}</h3>
                            <h1 className="display-5 fw-bold mt-2">{item.head}</h1>
                            <p className="lead text-secondary py-3" style={{ fontWeight: 400 }}>{item.paragraph}</p>
                            <button className="shop-btn btn text-white">Shop Now</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner
