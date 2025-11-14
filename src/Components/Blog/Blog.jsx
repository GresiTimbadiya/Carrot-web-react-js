import { FaArrowRight } from "react-icons/fa";

const Blog = ({ blogData }) => {
    return (
        <>
            <div className='text-center mt-sm-4 mt-lg-5' style={{ margin: '80px 0 50px' }}>
                <h2 className='fw-bold fs-2 mb-3'>Latest News</h2>
                <p className='col-sm-8 col-lg-5 mx-auto text-secondary' style={{ fontSize: '17px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore lacus vel facilisis. </p>
            </div>
            <div style={{ marginBottom: '100px', overflow: 'hidden' }}>
                <div className="swiper-wrapper">
                    <div className="sm-container">
                        <div className="row justify-content-center">
                            {
                                blogData.map((val, i) => {
                                    return (
                                        <div key={i} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-sm-4 mb-xl-0 px-0">
                                            <div className="cr-blog rounded border mx-1" key={i}>
                                                <div className="cr-blog-content p-3">
                                                    <span className="text-secondary"><span style={{ fontSize: '15px' }}>By Admin</span> | <a href="#" className='text-decoration-none text-secondary'>{val.category}</a></span>
                                                    <h5 className="my-2">{val.title}</h5>
                                                    <a className="read text-decoration-none fw-bold" href="#">Read More <FaArrowRight /></a>
                                                </div>
                                                <div className="cr-blog-image overflow-hidden position-relative">
                                                    <img src={val.image} alt="" />
                                                    <div className="cr-blog-date rounded">
                                                        <span className="p-3 fs-4 fw-bold text-white">
                                                            {val.date}
                                                            <span>{val.month}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog