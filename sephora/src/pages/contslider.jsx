
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './contslid.css';

class Cpp extends Component {
  render() {
    const settings = {
      
      
     
      slidesToShow: 6,
      slidesToScroll: 6
         
    };
    return (
      <div className="container">
       
        <Slider {...settings}>
        <div><img src="https://www.sephora.com/productimages/sku/s2404739-main-zoom.jpg?pb=2020-03-sephora-clean-2019"  alt="Credit to Joshua Earle on Unsplash"/>
        <b>Drunk Elephant</b>
        <p>Protini Polypeptide Firming Moisturizer</p>
        </div>

        <div><img src="https://www.sephora.com/productimages/sku/s2233849-main-zoom.jpg?pb=2020-03-sephora-clean-2019" alt="Credit to Alisa Anton on Unsplash"/>
        <b>Drunk Elephant</b>
          <p>Lala Retro™ Whipped Moisturizer with Ceramides</p>
        </div>

        <div><img src="https://www.sephora.com/productimages/sku/s2022598-main-zoom.jpg?pb=2020-03-sephora-clean-2019" alt="Credit to Igor Ovsyannykov on Unsplash"/>
        <b>Drunk Elephant</b>
          <p>Beste™ No. 9 Jelly Cleanser</p>
          
        </div>

        <div><img src="https://www.sephora.com/productimages/sku/s1785856-main-zoom.jpg?pb=2020-03-sephora-clean-2019" alt="Credit to Pierre Châtel-Innocenti on Unsplash"/>
        <b>Drunk Elephant</b>
         <p>B-Hydra™ Intensive Hydration Serum with Hyaluronic Acid</p>
        </div>


        <div><img src="https://www.sephora.com/productimages/sku/s2429710-main-zoom.jpg?" alt="Credit to Richard Nolan on Unsplash"/>
        <b>Drunk Elephant</b>
            <p>Protini™ Powerpeptide Resurfacing Serum with Lactic Acid</p>
        </div>

        <div><img src="https://www.sephora.com/productimages/sku/s1679315-main-zoom.jpg?pb=2020-03-sephora-clean-2019" alt="Credit to Cristina Gottardi on Unsplash"/>
        <b>Drunk Elephant</b>
         <p>Virgin Marula Luxury Face Oil</p>
        </div>


        <div><img src="https://www.sephora.com/productimages/sku/s2427714-main-zoom.jpg?pb=2020-03-sephora-clean-2019" alt="Credit to Cristina Gottardi on Unsplash"/>
        <b>Drunk Elephant</b>
         <p>T.L.C. Framboos™ Glycolic Resurfacing Night Serum</p>
        </div>

        <div><img src="https://www.sephora.com/productimages/sku/s2181006-main-zoom.jpg?pb=2020-03-sephora-clean-2019" alt="Credit to Cristina Gottardi on Unsplash"/>
        <b>Drunk Elephant</b>
         <p>The Dewy Skin Cream Plumping & Hydrating Moisturizer</p>
        </div>

        <div><img src="https://www.sephora.com/productimages/sku/s1966258-main-zoom.jpg?pb=2020-03-allure-best-2019" alt="Credit to Cristina Gottardi on Unsplash"/>
        <b>Drunk Elephant</b>
         <p>Lip Sleeping Mask Intense Hydration with Vitamin C</p>
        </div>

        <div><img src="https://www.sephora.com/productimages/sku/s2464949-main-zoom.jpg?pb=2020-03-sephora-clean-2019" alt="Credit to Cristina Gottardi on Unsplash"/>
        <b>Drunk Elephant</b>
         <p>C-Firma Fresh Vitamin-C Day Serum</p>
        </div>

        <div><img src="https://www.sephora.com/productimages/sku/s1932920-main-zoom.jpg?pb=2020-03-sephora-clean-2019" alt="Credit to Cristina Gottardi on Unsplash"/>
        <b>Drunk Elephant</b>
         <p>The Water Cream Oil-Free Pore Minimizing Moisturizer</p>
        </div>

        <div><img src="https://www.sephora.com/productimages/sku/s2215945-main-zoom.jpg?pb=clean-planet-positive-badge-2021"  alt="Credit to Cristina Gottardi on Unsplash"/>
        <b>Drunk Elephant</b>
         <p>Barrier+ Triple Lipid-Peptide Face Cream</p>
        </div>
        </Slider>
      </div>
    );
  }
}

export default Cpp;
