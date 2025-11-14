import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Header = ({ allData, menu }) => {
    return (
        <>
            <header className="container">
                <div className="row align-items-center py-3">
                    <div className="col-6 col-md-2">
                        <a href="#">
                            <img
                                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/logo/logo.png"
                                alt="Logo"
                                className="img-fluid"
                                style={{ height: 40 }}
                            />
                        </a>
                    </div>

                    <div className="col-md-6 d-none d-md-flex">
                        <div className="input-group w-100">
                            <input
                                type="text"
                                className="form-control py-2"
                                placeholder="Search for items..."
                                style={{ border: "1px solid #64b496" }}
                            />
                            <select className="p-2" style={{ border: "1.5px solid #64b496", cursor: "pointer" }}>
                                <option>All Categories</option>
                                <option>Mens</option>
                                <option>Womens</option>
                                <option>Electronics</option>
                            </select>
                            <button className="btn text-white" style={{ backgroundColor: "#64b496" }}>
                                <FaSearch />
                            </button>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 d-flex justify-content-end gap-3">
                        {allData.map((nav) => (
                            <div className="d-flex align-items-center gap-1" key={nav.id}>
                                <h4 className="mb-0">
                                    {nav.name === "Account" && <FiUser />}
                                    {nav.name === "Wishlist" && <FaRegHeart />}
                                    {nav.name === "Cart" && <IoCartOutline />}
                                </h4>
                                <h6 className="mb-0" style={{ cursor: "pointer" }}>{nav.name}</h6>
                            </div>
                        ))}
                    </div>
                </div>

                <hr />

                <div className="row align-items-center py-3">
                    <div className="col-auto">
                        <div className="position-relative dropdown-hover">
                            <a href="#" className="d-block py-2">
                                <FaBarsStaggered className="fs-5 text-dark" />
                            </a>
                            <div className="dropdown-menu dropdown-categories">
                                <div className="row">
                                    <div className="col-md-4 p-0">
                                        <h6 className="dropdown-header text-dark">Categories</h6>
                                        <a className="dropdown-item border px-2 rounded mb-1" href="#">Dairy & Bakery</a>
                                        <a className="dropdown-item border px-2 rounded mb-1" href="#">Fruits & Vegetable</a>
                                        <a className="dropdown-item border px-2 rounded mb-1" href="#">Snack & Spice</a>
                                        <a className="dropdown-item border px-2 rounded mb-1" href="#">Juice & Drinks</a>
                                        <a className="dropdown-item border px-2 rounded" href="#">View All</a>
                                    </div>
                                    <div className="col-md-3 p-0">
                                        <h6 className="dropdown-header text-dark">Dairy</h6>
                                        <a className="dropdown-item" href="#">Milk</a>
                                        <a className="dropdown-item" href="#">Ice Cream</a>
                                        <a className="dropdown-item" href="#">Cheese</a>
                                        <a className="dropdown-item" href="#">Frozen Custard</a>
                                        <a className="dropdown-item" href="#">Frozen Yogurt</a>
                                    </div>
                                    <div className="col-md-3 p-0">
                                        <h6 className="dropdown-header text-dark">Bakery</h6>
                                        <a className="dropdown-item" href="#">Cake And Pastry</a>
                                        <a className="dropdown-item" href="#">Rusk Toast</a>
                                        <a className="dropdown-item" href="#">Bread & Buns</a>
                                        <a className="dropdown-item" href="#">Chocolate Brownie</a>
                                        <a className="dropdown-item" href="#">Cream Roll</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col d-none d-md-flex d-flex flex-wrap justify-content-center">
                        {menu.map((item) => (
                            <div key={item.id} className="nav-item position-relative me-4">
                                <a href="#" className="text-decoration-none">
                                    <h6 className="text-dark mb-0">
                                        {item.title}
                                        {item.dropdown && <MdKeyboardArrowDown className="ms-1" />}
                                    </h6>
                                </a>
                                {item.dropdown && (
                                    <div className="dropdown-menu-custom bg-white border p-2 rounded shadow-sm mt-2">
                                        {item.dropdown.map((subItem, index) => (
                                            <a
                                                key={index}
                                                href="#"
                                                style={{ fontSize: "15px" }}
                                                className="d-block text-secondary py-2 px-2 dropdown-item text-decoration-none"
                                            >
                                                {subItem}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="col-auto ms-sm-auto d-flex align-items-center">
                        <IoCall className="fs-5 me-1" />
                        <a href="#" className="text-dark text-decoration-none">
                            <h6 className="mb-0">+123 ( 456 ) ( 7890 )</h6>
                        </a>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header