const Sidemenu = ({ sideMenu, itemImg }) => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-between">
                    {/* Sidebar */}
                    <div className="col-12 col-md-5 col-lg-4 mb-4 mb-lg-0">
                        {sideMenu.map((val, i) => (
                            <div
                                key={i}
                                className="sidemenu text-center py-2 mb-2"
                                style={{ backgroundColor: '#f5f5f5' }}
                            >
                                <h5>{val.item}</h5>
                                <p className="text-secondary mb-2">({val.qnt})</p>
                            </div>
                        ))}
                        <div className="sidemenu text-center py-3" style={{ backgroundColor: '#f5f5f5' }}>
                            <h5>View more</h5>
                        </div>
                    </div>

                    {/* Images container */}
                    <div className="col-12 col-md-7 col-lg-8">
                        <div className="row">
                            {itemImg.map((val, i) => (
                                <div key={i} className="col-12 col-lg-6 mb-4 mb-lg-0">
                                    <div className="cr-side-categories overflow-hidden rounded position-relative">
                                        <img
                                            src={val.image}
                                            alt=""
                                            className="img-fluid w-100"
                                            style={{ height: 500, objectFit: 'cover' }}
                                        />
                                        <div
                                            className="categories-contain text-white text-center p-3"
                                            style={{
                                                position: 'absolute',
                                                bottom: '5%',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                zIndex: 2,
                                            }}
                                        >
                                            <h2 className="discount-text d-none d-md-block">{val.discount}</h2>
                                            <h3>{val.name}</h3>
                                            <button className="shop-btn btn text-white mt-2">Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidemenu