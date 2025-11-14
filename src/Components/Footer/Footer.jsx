import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { RiFacebookLine } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FaDribbble } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

function Footer({ footerData }) {
    if (!footerData) return "";

    const { brand, companyLinks, categories, newsletter } = footerData;

    return (
        <footer className="mt-5 pt-5 pb-4" style={{ backgroundColor: "#f4f4f4" }}>
            <div className="container">
                <div className="row justify-content-between">

                    {/* intro */}
                    <div className="col-lg-4">
                        <a href="#"><img src={brand.image} alt="Logo" style={{ height: 50 }} /></a>
                        <p className="mt-3 text-secondary">{brand.description}</p>
                        <div className="d-flex">
                            <FaLocationDot className="fs-3 me-3 mt-2" style={{ color: "#64b496" }} />
                            <p className="text-secondary">{brand.address}</p>
                        </div>
                        <div className="d-flex my-1">
                            <MdOutlineMailOutline className="fs-3 me-2" style={{ color: "#64b496" }} />
                            <p className="text-secondary footer-link">{brand.email}</p>
                        </div>
                        <div className="d-flex mt-2">
                            <MdOutlinePhone className="fs-3 me-2" style={{ color: "#64b496" }} />
                            <p className="text-secondary footer-link">{brand.phone}</p>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="col-md-4 col-lg-3 col-xl-2 mt-md-3 mt-sm-3 mt-lg-0">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            {companyLinks.map((link, i) => (
                                <li key={i} className="footer-link text-secondary py-2">{link}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="col-md-4 col-lg-3 col-xl-2 mt-md-3 mt-sm-3 mt-lg-0">
                        <h5>Categories</h5>
                        <ul className="list-unstyled">
                            {categories.map((cat, i) => (
                                <li key={i} className="footer-link text-secondary py-2">{cat}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-xl-4 mt-lg-4 mt-md-3 mt-sm-3 mt-xl-0">
                        <h5>Subscribe Our Newsletter</h5>
                        <div className="input-group" style={{ width: "95%" }}>
                            <input
                                type="text"
                                className="form-control mt-4"
                                placeholder="Search here..."
                            />
                            <span className="input-group-text p-2 mt-4 fs-4" style={{ cursor: 'pointer', backgroundColor: "#fff" }}>
                                <RiSendPlaneFill />
                            </span>
                        </div>
                        <br />

                        <div>
                            <a href="#" className="p-2 me-2 bg-white rounded"><RiFacebookLine className="footer-link fs-4 text-dark" /></a>
                            <a href="#" className="p-2 me-2 bg-white rounded"><RiTwitterXFill className="footer-link fs-5 text-dark" /></a>
                            <a href="#" className="p-2 me-2 bg-white rounded"><FaDribbble className="footer-link fs-5 text-dark" /></a>
                            <a href="#" className="p-2 me-2 bg-white rounded"><LuInstagram className="footer-link fs-5 text-dark" /></a>
                        </div><br />

                        {/* Newsletter */}
                        <div className="d-flex">
                            {newsletter.images.map((img, i) => (
                                <div key={i} className="insta-wrapper m-2" style={{ width: 75, height: 75 }}>
                                    <a href="#" className="insta-link position-relative d-block w-100 h-100">
                                        <img src={img} className="w-100 h-100 rounded object-fit-cover" />
                                        <div className="insta-overlay d-flex justify-content-center align-items-center">
                                            <LuInstagram className="text-white fs-4" />
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer