import { FaArrowRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const Products = ({ productList, filterData, selectCategory, handleCategory }) => {
    return (
        <>
            <div className='text-center'>
                <h2>Popular Products</h2>
                <p className='text-secondary' style={{ fontSize: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore lacus vel facilisis.</p>
            </div>
            <div className="my-5 container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-12 col-md-4 col-lg-3">
                        {/* Product Menu */}
                        {productList.length > 0 &&
                            productList[0].productMenu.map((val, index) => (
                                <div
                                    key={index}
                                    className="px-3 py-2 mb-2 rounded d-flex align-items-center justify-content-between"
                                    style={{
                                        color: selectCategory === val.menuName ? "#64b496" : "#000000",
                                        backgroundColor: "#f5f5f5",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleCategory(val.menuName)}
                                >
                                    <h5 style={{ fontSize: "16px" }}>{val.menuName}</h5>
                                    <FaArrowRight />
                                </div>
                            ))}

                        <div className="position-relative text-white d-none d-md-block">
                            <img
                                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/product-banner.jpg"
                                className="w-100 rounded mt-3"
                                alt=""
                            />
                            <div
                                className="position-absolute text-center"
                                style={{ top: "28%", left: "24%", transform: "translate(-50%, -50%)" }}
                            >
                                <h2>
                                    Juicy <br />
                                    <span style={{ color: "#f7e8aa" }}>Fruits</span>
                                </h2>
                                <p>100% Natural</p>
                                <button className="shop-btn btn text-white">Shop Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-8 col-lg-9 row ms-md-2">
                        {filterData.map((val, i) => (
                            <div key={val.id} className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 px-2">
                                <div className="card text-center position-relative">
                                    <div className="hover-icons position-absolute d-flex flex-column">
                                        <FaRegHeart className="mb-2 icon-hover rounded-5 bg-light" />
                                        <FaRegEye className="icon-hover rounded-5 bg-light" />
                                    </div>
                                    <img src={val.image} className="product-img card-img-top rounded p-2" alt={val.name} />
                                    <div className="card-body pt-1">
                                        <p className="card-text text-secondary m-0">{val.category}</p>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src={val.star} className="my-3 me-1" width={100} alt="" />
                                            <span className="text-secondary" style={{ fontSize: "15px" }}>({val.rating})</span>
                                        </div>
                                        <h5 className="card-title mb-3" style={{ fontSize: "17px" }}>{val.name}</h5>
                                        <p className="card-text">
                                            <span className="text-success fw-bold me-1" style={{ fontSize: "18px" }}>{val.price}</span>
                                            <del className="text-secondary" style={{ fontSize: "15px" }}>{val.oldPrice}</del>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-12 d-block d-md-none mt-4">
                        <div className="position-relative text-white">
                            <img
                                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/product-banner.jpg"
                                className="w-100 rounded"
                                alt=""
                            />
                            <div
                                className="position-absolute text-center"
                                style={{ top: "28%", left: "24%", transform: "translate(-50%, -50%)" }}
                            >
                                <h2>
                                    Juicy <br />
                                    <span style={{ color: "#f7e8aa" }}>Fruits</span>
                                </h2>
                                <p>100% Natural</p>
                                <button className="shop-btn btn text-white">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
