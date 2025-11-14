
import { RiRedPacketLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { RiTruckLine } from "react-icons/ri";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

const icons = [<RiRedPacketLine />, <BiSupport />, <RiTruckLine />, <RiMoneyDollarBoxLine />];

const Services = ({ autoslider, facilities }) => {

    return (
        <>
            <div className="section-product-banner">
                <div className='container mb-5'>
                    <div className="row justify-content-center">
                        {autoslider.map((item, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 px-0">
                                <div className="cr-product-banner-image mx-2">
                                    <img src={item.img} className="w-100 rounded" alt="" />
                                    <div className="cr-product-banner-contain p-4">
                                        <h5 className='col-12 col-md-8 col-lg-12 col-xl-7 mb-2 fw-bold'>{item.title}</h5>
                                        <p className="text-secondary">
                                            <span className="percent me-1 fs-4 fw-bold" style={{ color: '#64b496' }}>{item.discount}</span>
                                            Off <span className="text">on first order</span>
                                        </p>
                                        <button className="btn shop-btn text-white">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='container my-5'>
                <div className='row justify-content-center'>
                    {
                        facilities.map((item, index) => (
                            <div className="col-12 col-md-6 col-lg-3 mb-4 px-2" key={index}>
                                <div className="py-4 text-center bg-light border rounded h-100">
                                    <div className="fs-1 text-success mb-2">{icons[index]}</div>
                                    <h5>{item}</h5>
                                    <p className='text-secondary m-0'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
};

export default Services