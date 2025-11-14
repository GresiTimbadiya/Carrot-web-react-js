import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Sidemenu from './Components/sidemenu/Sidemenu';
import Products from './Components/Products/Products';
import Timer from './Components/Timer/Timer';
import Services from './Components/Service/Services';
import Teampeople from './Components/TeamPeople/Teampeople';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Sliderproduct from './Components/Sliderproduct/Sliderproduct';

function App() {
  const [allData, setAllData] = useState([]);
  const [menu, setMenu] = useState([]);
  const [sliders, setSliders] = useState([]);
  const [sideMenu, setSideMenu] = useState([]);
  const [itemImg, setItemImg] = useState([]);
  const [autoslider, setAutoSlider] = useState([]);
  const [timer, setTimer] = useState([]);
  const [footerData, setFooterData] = useState(null);
  const [productList, setProductList] = useState([]);
  const [teamPeople, setTeamPeople] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selectCategory, setSelectCategory] = useState("All");


  useEffect(() => {
    fetch(`https://mocki.io/v1/69c25092-11f0-471c-b800-726db01f86eb`)
      .then(res => res.json())
      .then(data => {
        setAllData(data.navigation);
        setMenu(data.menu);
        setSliders(data.sliders);
        setSideMenu(data.sidemenu);
        setItemImg(data.itemimg);
        setAutoSlider(data.autoslider);
        setTimer(data.timer);
        setFooterData(data.footerData);
        setProductList(data.productList);
        setTeamPeople(data.teamPeople);
        setBlogData(data.blogData);
        setFacilities(data.facilities);

        let allProducts = data.productList.slice(1);
        setFilterData(allProducts);
      })
      .catch(err => console.error(err));
  }, [])

  const handleCategory = (category) => {
    setSelectCategory(category);

    if (category === "All") {
      setFilterData(productList.slice(1));
    } else {
      let filter = productList.slice(1).filter(item => item.category === category);
      setFilterData(filter);
    }
  }

  return (
    <>
      <Header allData={allData} menu={menu} />
      <Banner sliders={sliders} />
      <Sidemenu sideMenu={sideMenu} itemImg={itemImg} />
      <Products productList={productList} filterData={filterData} selectCategory={selectCategory} handleCategory={handleCategory} />
      <Services autoslider={autoslider} facilities={facilities} />
      <Timer timer={timer} />
      <Sliderproduct productList={productList} />
      <Teampeople teamPeople={teamPeople} />
      <Blog blogData={blogData} />
      <Footer footerData={footerData} />
    </>
  )
}

export default App