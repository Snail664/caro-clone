import React from 'react'
import BlackBar from "../BlackBar/BlackBar";
import WhiteBar from "../WhiteBar/WhiteBar";
import CategorySlider from "../CategorySlider/CategorySlider";
import ProductList from "../ProductsList/ProductsList";
import Gallery from "../Gallery";
import blockMenu from "./blockMenu.css"

const Home = () => {
  return (
    <div>
      <div className="blockMenu">
        <div>
        <a class="D_fa D_fQ" href="/"><svg height="20" viewBox="0 0 80 80" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M69.57 6.55V3.69A3.69 3.69 0 0065.87 0h-9.3a3.69 3.69 0 00-3.7 3.7v2.04H15.05C10.21 5.74 3 8.94 3 17.79v49.83c0 4.85 3.21 12.06 12.05 12.06H64.9c4.85 0 12.05-3.21 12.05-12.06V17.8c0-3.87-2.05-9.23-7.37-11.24" fill="#ffffff"></path><path d="M63.64 40.5h-6.1a2.2 2.2 0 100 4.42h6.1a2.21 2.21 0 100-4.42m-9.63-4.04a2.2 2.2 0 002.91 1.12l5.57-2.48a2.2 2.2 0 10-1.8-4.04l-5.56 2.48A2.2 2.2 0 0054 36.46m-.64-5.33l4.08-4.53a2.2 2.2 0 10-3.28-2.96l-4.08 4.53a2.2 2.2 0 00.16 3.12 2.2 2.2 0 003.12-.16" fill="#2c2c2d"></path><path d="M47.5 58.74a2.2 2.2 0 00-2.78-1.42 15.37 15.37 0 11-4.75-29.97 15.37 15.37 0 014.75.75 2.21 2.21 0 002.78-1.42l1.89-5.8a2.21 2.21 0 00-1.42-2.78 25.87 25.87 0 00-8-1.27 25.88 25.88 0 108 50.5 2.2 2.2 0 001.42-2.8l-1.89-5.8" fill="#2c2c2d"></path><path d="M53.37 54.29a2.21 2.21 0 00-3.28 2.96l4.08 4.53a2.21 2.21 0 003.28-2.96l-4.08-4.53m9.13-3.97l-5.58-2.48a2.21 2.21 0 00-1.8 4.03l5.58 2.49a2.21 2.21 0 001.8-4.04" fill="#2c2c2d"></path></g></svg></a>
          {/* <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#temp">temp</a> */}
          <div class="dropdownMenu">
            <button class="dropdownButton">Cars & Property</button>
            <div class="dropdownContent">
              <table className="dropdownTable">
                <tr>
                  <th><img className="icon" src={require("../img/56-Cars-cxxhdpi_1579663915.34.png")} />Cars</th>
                  <th><img className="icon" src={require("../img/56-Car_Accessories-cxxhdpi_1579663910.07.png")} />Car Accessories</th>
                  <th><img className="icon" src={require("../img/56-Property-cxxhdpi_1579664037.67.png")} />Property</th>
                  <th><img className="icon" src={require("../img/56-Motorbikes-cxxhdpi_1579664016.29.png")} />Motorcycles</th>
                </tr>
                <tr>
                  <td><span className="menuItem"><a href="#">Used Cars</a></span><span className="menuItem"><a href="#">Parallel Imports</a></span><span className="menuItem"><a href="#">New Cars</a></span><span className="menuItem"><a href="#">Commercial Vehicles</a></span><span className="menuItem"><a href="#">Car Rental</a></span><span className="menuItem"><a href="#">Other Vehicles</a></span><span className="menuItem"><a href="#">Specials</a></span></td>
                  <td><span className="menuItem"><a href="#">Accessories</a></span><span className="menuItem"><a href="#">Tyres & Rims</a></span><span className="menuItem"><a href="#">Electronics & Lights</a></span><span className="menuItem"><a href="#">Car Workshops & Services</a></span><span className="menuItem"><a href="#">Car Plates</a></span></td>
                  <td><span className="menuItem"><a href="#">For Sale</a></span><span className="menuItem"><a href="#">Rentals</a></span><span className="menuItem"><a href="#">Others</a></span><span className="menuItem"><a href="#">Recommended</a></span></td>
                  <td><span className="menuItem"><a href="#">Motorcycles for Sale</a></span><span className="menuItem"><a href="#">Motorcycle Rental</a></span><span className="menuItem"><a href="#">Motorcycle Apparel</a></span><span className="menuItem"><a href="#">Motorcycle Accessories</a></span></td>
                </tr>
              </table>
            </div>
          </div>
          <div class="dropdownMenu">
            <button class="dropdownButton">Fashion</button>
            <div class="dropdownContent">
            <table className="dropdownTable">
                <tr>
                  <th><img className="icon" src={require("../img/08_womens_fashion.png")} />Women's Fashion</th>
                  <th><img className="icon" src={require("../img/10_luxury.png")} />Luxury</th>
                  <th><img className="icon" src={require("../img/09_mens_fashion.png")} />Men's Fashion</th>
                  <th><img className="icon" src={require("../img/13_beauty_personal_care.png")} />Beauty & Personal Care</th>
                </tr>
                <tr>
                  <td><span className="menuItem"><a href="#">Activewear</a></span><span className="menuItem"><a href="#">Maternity Wear</a></span><span className="menuItem"><a href="#">Tops</a></span><span className="menuItem"><a href="#">Bottoms</a></span><span className="menuItem"><a href="#">Dresses & Sets</a></span><span className="menuItem"><a href="#">Footwear</a></span><span className="menuItem"><a href="#">Swimwear</a></span><span className="menuItem"><a href="#">Muslimah Fashion</a></span><span className="menuItem"><a href="#">Coats, Jackets and Outerwear</a></span><span className="menuItem"><a href="#">Bags & Wallets</a></span><span className="menuItem"><a href="#">Jewelry & Organisers</a></span><span className="menuItem"><a href="#">Watches & Accessories</a></span><span className="menuItem"><a href="#">New Undergarments & Loun...</a></span></td>
                  <td><span className="menuItem"><a href="#">Bags & Wallets</a></span><span className="menuItem"><a href="#">Apparel</a></span><span className="menuItem"><a href="#">Accessories</a></span><span className="menuItem"><a href="#">Watches</a></span><span className="menuItem"><a href="#">Sneakers & Footwear</a></span></td>
                  <td><span className="menuItem"><a href="#">Activewear</a></span><span className="menuItem"><a href="#">Tops & Sets</a></span><span className="menuItem"><a href="#">Bottoms</a></span><span className="menuItem"><a href="#">Muslim Wear</a></span><span className="menuItem"><a href="#">Coats, Jackets and Outerwear</a></span><span className="menuItem"><a href="#">Bags</a></span><span className="menuItem"><a href="#">Watches & Accessories</a></span></td>
                  <td><span className="menuItem"><a href="#">Sanitisers & Disinfectants</a></span><span className="menuItem"><a href="#">Hands & Nails</a></span><span className="menuItem"><a href="#">Ear Care</a></span><span className="menuItem"><a href="#">Vision Care</a></span><span className="menuItem"><a href="#">Foot Care</a></span><span className="menuItem"><a href="#">Oral Care</a></span><span className="menuItem"><a href="#">Sanitary Hygiene</a></span><span className="menuItem"><a href="#">Fragrance & Deodorants</a></span><span className="menuItem"><a href="#">Bath & Body</a></span><span className="menuItem"><a href="#">Face</a></span><span className="menuItem"><a href="#">Hair</a></span><span className="menuItem"><a href="#">Men's Grooming</a></span></td>
                </tr>
              </table>
            </div>
          </div>
          <div class="dropdownMenu">
            <button class="dropdownButton">Home & Living</button>
            <div class="dropdownContent">
            <table className="dropdownTable">
                <tr>
                  <th><img className="icon" src={require("../img/06_furniture_home_living.png")} />Furniture & Home Living</th>
                  <th><img className="icon" src={require("../img/11_babies_kids.png")} />Babies & Kids</th>
                  <th><img className="icon" src={require("../img/14_health_nutrition.png")} />Health & Nutrition</th>
                  <th><img className="icon" src={require("../img/16_food_drinks.png")} />Food & Drinks</th>
                  <th><img className="icon" src={require("../img/17_pet_supplies.png")} />Pet Supplies</th>
                </tr>
                <tr>
                  <td><span className="menuItem"><a href="#">Furniture</a></span><span className="menuItem"><a href="#">Outdoor Furniture</a></span><span className="menuItem"><a href="#">Lighting & Fans</a></span><span className="menuItem"><a href="#">Home Decor</a></span><span className="menuItem"><a href="#">Home Fragrance</a></span><span className="menuItem"><a href="#">Bedding & Towels</a></span><span className="menuItem"><a href="#">Bathroom & Kitchen Fixtures</a></span><span className="menuItem"><a href="#">Home Improvement & Organ...</a></span><span className="menuItem"><a href="#">Cleaning & Homecare Supplies</a></span><span className="menuItem"><a href="#">Kitchenware & Tableware</a></span><span className="menuItem"><a href="#">Security & Locks</a></span><span className="menuItem"><a href="#">Gardening</a></span></td>
                  <td><span className="menuItem"><a href="#">Babies & Kids Fashion</a></span><span className="menuItem"><a href="#">Baby Nursery & Kids Furniture</a></span><span className="menuItem"><a href="#">Going Out</a></span><span className="menuItem"><a href="#">Bathing & Changing</a></span><span className="menuItem"><a href="#">Nursing & Feeding</a></span><span className="menuItem"><a href="#">Baby Monitors</a></span><span className="menuItem"><a href="#">Maternity Care</a></span><span className="menuItem"><a href="#">Infant Playtime</a></span></td>
                  <td><span className="menuItem"><a href="#">Insect Repellant</a></span><span className="menuItem"><a href="#">Massage Devices</a></span><span className="menuItem"><a href="#">Assisstive & Rehabilatory Aids</a></span><span className="menuItem"><a href="#">Face Masks & Face Shields</a></span><span className="menuItem"><a href="#">Thermometers</a></span><span className="menuItem"><a href="#">Medical Supplies & Tools</a></span><span className="menuItem"><a href="#">Braces, Support & Protection</a></span><span className="menuItem"><a href="#">Health Supplements</a></span><span className="menuItem"><a href="#">Health Monitors & Weighing...</a></span></td>
                  <td><span className="menuItem"><a href="#">Local Eats</a></span><span className="menuItem"><a href="#">Rice & Noodles</a></span><span className="menuItem"><a href="#">Homemade bakes</a></span><span className="menuItem"><a href="#">Beverages</a></span><span className="menuItem"><a href="#">Packaged & Instant Food</a></span><span className="menuItem"><a href="#">Fresh Produce</a></span><span className="menuItem"><a href="#">Spice & Seasoning</a></span><span className="menuItem"><a href="#">Chilled & Frozen Food</a></span><span className="menuItem"><a href="#">Alcoholic Beverages</a></span><span className="menuItem"><a href="#">Gift Baskets & Hampers</a></span><span className="menuItem"><a href="#">Other Food & Drinks</a></span></td>
                  <td><span className="menuItem"><a href="#">Homes & Other Pet Accessori...</a></span><span className="menuItem"><a href="#">Pet Food</a></span><span className="menuItem"><a href="#">Health & Grooming</a></span></td>
                </tr>
              </table>
            </div>
          </div>
          <div class="dropdownMenu">
            <button class="dropdownButton">Electronics & Mobiles</button>
            <div class="dropdownContent">
            <table className="dropdownTable">
                <tr>
                  <th><img className="icon" src={require("../img/01_computers_tech.png")} />Computers & Tech</th>
                  <th><img className="icon" src={require("../img/03_video_gaming.png")} />Video Gaming</th>
                  <th><img className="icon" src={require("../img/02_mobile_phones_gadgets.png")} />Mobile Phones & Gadgets</th>
                  <th><img className="icon" src={require("../img/04_audio.png")} />Audio</th>
                  <th><img className="icon" src={require("../img/05_photography.png")} />Photography</th>
                </tr>
                <tr>
                  <td><span className="menuItem"><a href="#">Desktops</a></span><span className="menuItem"><a href="#">Laptops & Notebooks</a></span><span className="menuItem"><a href="#">Parts & Accessories</a></span><span className="menuItem"><a href="#">Printers, Scanners & Copiers</a></span><span className="menuItem"><a href="#">Office & Business Technology</a></span><span className="menuHeading"><img className="icon" src={require("../img/07_tv_home_appliances.png")} /><a href="#">TV & Home Appliances</a></span><span className="menuItem"><a href="#">TV & Entertainment</a></span><span className="menuItem"><a href="#">Kitchen Appliances</a></span><span className="menuItem"><a href="#">Air Conditioning & Heating</a></span><span className="menuItem"><a href="#">Washing Machines & Dryers</a></span><span className="menuItem"><a href="#">Vacuum Cleaner & Housekee...</a></span><span className="menuItem"><a href="#">Water Heater & Instant Show...</a></span><span className="menuItem"><a href="#">Air Purifiers & Dehumidifiers</a></span><span className="menuItem"><a href="#">Electrical, Adaptors & Socket</a></span><span className="menuItem"><a href="#">Irons & Steamers</a></span></td>
                  <td><span className="menuItem"><a href="#">Video Game Consoles</a></span><span className="menuItem"><a href="#">Video Games</a></span><span className="menuItem"><a href="#">Gaming Accessories</a></span></td>
                  <td><span className="menuItem"><a href="#">Mobile Phones</a></span><span className="menuItem"><a href="#">Tables</a></span><span className="menuItem"><a href="#">E-Readers</a></span><span className="menuItem"><a href="#">Wearables & Smart Watches</a></span><span className="menuItem"><a href="#">Mobile & Gadget Accessories</a></span><span className="menuItem"><a href="#">Walkie-Talkie</a></span><span className="menuItem"><a href="#">Other Gadgets</a></span></td>
                  <td><span className="menuItem"><a href="#">Earphones</a></span><span className="menuItem"><a href="#">Headphones & Headsets</a></span><span className="menuItem"><a href="#">Microphones</a></span><span className="menuItem"><a href="#">Voice Recorders</a></span><span className="menuItem"><a href="#">Portable Music Players</a></span><span className="menuItem"><a href="#">Portable Audio Accessories</a></span><span className="menuItem"><a href="#">Soundbars, Speakers & Ampli...</a></span><span className="menuItem"><a href="#">Other Audio Equipment</a></span></td>
                  <td><span className="menuItem"><a href="#">Cameras</a></span><span className="menuItem"><a href="#">Lens & Kits</a></span><span className="menuItem"><a href="#">Drones</a></span><span className="menuItem"><a href="#">Video Cameras</a></span><span className="menuItem"><a href="#">Photography Accessories</a></span></td>
                </tr>
              </table>
            </div>
          </div>
          <div class="dropdownMenu">
            <button class="dropdownButton">Hobbies & Games</button>
            <div class="dropdownContent">
            <table className="dropdownTable">
                <tr>
                  <th><img className="icon" src={require("../img/toys.png")} />Toys & Games</th>
                  <th><img className="icon" src={require("../img/cd.png")} />Music & Media</th>
                  <th><img className="icon" src={require("../img/magazines.png")} />Books & Magazines</th>
                  <th><img className="icon" src={require("../img/stationery.png")} />Stationery & Craft</th>
                  <th><img className="icon" src={require("../img/vintage.png")} />Memorabilia & Collectibles</th>
                </tr>
                <tr>
                  <td><span className="menuHeading"><img className="subheadingIcon" src={require("../img/plane.png")} /><a href="#">Travel</a></span><span className="menuItem"><a href="#">Luggage</a></span><span className="menuItem"><a href="#">Car Rentals</a></span><span className="menuItem"><a href="#">Travel Essentials & Accessories</a></span><span className="menuItem"><a href="#">Umbrellas</a></span></td>
                  <td><span className="menuItem"><a href="#">Musical Instruments</a></span><span className="menuItem"><a href="#">Music Accessories</a></span><span className="menuItem"><a href="#">CDs & DVDs</a></span><span className="menuItem"><a href="#">Vinyls</a></span><span className="menuItem"><a href="#">Music Scores</a></span><span className="menuHeading"><img className="subheadingIcon" src={require("../img/ball.png")} /><a href="#">Sports Equipment</a></span><span className="menuItem"><a href="#">Sports & Games</a></span><span className="menuItem"><a href="#">Exercise & Fitness</a></span><span className="menuItem"><a href="#">Bicycles & Parts</a></span><span className="menuItem"><a href="#">PMDs, E-Scooters & E-Bikes</a></span><span className="menuItem"><a href="#">Fishing</a></span><span className="menuItem"><a href="#">Hiking & Camping</a></span><span className="menuItem"><a href="#">Other Sports Equipment and...</a></span></td>
                  <td><span className="menuItem"><a href="#">Fiction & Non-Fiction</a></span><span className="menuItem"><a href="#">Textbooks</a></span><span className="menuItem"><a href="#">Assessment Books</a></span><span className="menuItem"><a href="#">Children's Books</a></span><span className="menuItem"><a href="#">Comics & Manga</a></span><span className="menuItem"><a href="#">Magazines</a></span><span className="menuItem"><a href="#">Travel & Holiday Guides</a></span><span className="menuItem"><a href="#">Religion Books</a></span><span className="menuHeading"><img className="subheadingIcon" src={require("../img/ticket.png")} /><a href="#">Tickets & Vouchers</a></span><span className="menuItem"><a href="#">Local Attractions & Transport</a></span><span className="menuItem"><a href="#">Vouchers</a></span><span className="menuItem"><a href="#">Event Tickets</a></span><span className="menuItem"><a href="#">Store Credits</a></span><span className="menuItem"><a href="#">Flights & Overseas Attractions</a></span></td>
                  <td><span className="menuItem"><a href="#">Arts & Print</a></span><span className="menuItem"><a href="#">Handmade Craft</a></span><span className="menuItem"><a href="#">Flowers & Bouquets</a></span><span className="menuItem"><a href="#">Craft Supplies & Tools</a></span><span className="menuItem"><a href="#">Stationery & Schools Supplies</a></span><span className="menuItem"><a href="#">Occasions & Party Supplies</a></span><span className="menuItem"><a href="#">Other Stationery & Craft</a></span></td>
                  <td><span className="menuItem"><a href="#">Stamps & Prints</a></span><span className="menuItem"><a href="#">Religious Items</a></span><span className="menuItem"><a href="#">Currency</a></span><span className="menuItem"><a href="#">Vintage Collectibles</a></span><span className="menuItem"><a href="#">Fan Merchandise</a></span><span className="menuItem"><a href="#">J-Pop</a></span><span className="menuItem"><a href="#">K-Wave</a></span></td>
                </tr>
              </table>
            </div>
          </div>
          <div class="dropdownMenu">
            <button class="dropdownButton">Jobs & Services</button>
            <div class="dropdownContent">
            <table className="dropdownTable">
                <tr>
                  <th><img className="icon" src={require("../img/job.png")} />Jobs</th>
                  <th><img className="icon" src={require("../img/balloon.png")} />Lifestyle Services</th>
                  <th><img className="icon" src={require("../img/laptop.png")} />Business Services</th>
                  <th><img className="icon" src={require("../img/hammer.png")} />Home Services</th>
                  <th><img className="icon" src={require("../img/hat.png")} />Learning & Enrichment</th>
                </tr>
                <tr>
                  <td><span className="menuItem"><a href="#">Computer & IT</a></span><span className="menuItem"><a href="#">Customer Service</a></span><span className="menuItem"><a href="#">Cleaning</a></span><span className="menuItem"><a href="#">Sales, Retail & Marketing</a></span><span className="menuItem"><a href="#">Transport & Delivery</a></span><span className="menuItem"><a href="#">Hospitality, F&B</a></span><span className="menuItem"><a href="#">Admin & Finance</a></span><span className="menuItem"><a href="#">Warehouse & Logistics</a></span><span className="menuItem"><a href="#">Ecucation & Training</a></span><span className="menuItem"><a href="#">Nursing & Healthcare</a></span><span className="menuItem"><a href="#">Internships & Others</a></span></td>
                  <td><span className="menuItem"><a href="#">Beauty & Health Services</a></span><span className="menuItem"><a href="#">Photography & Video Services</a></span><span className="menuItem"><a href="#">Tailoring & Restoration</a></span><span className="menuItem"><a href="#">Event & Party Services</a></span><span className="menuItem"><a href="#">Caregiving Services</a></span><span className="menuItem"><a href="#">Eletronics & Gadget Repairs</a></span><span className="menuItem"><a href="#">Pet Care Services</a></span><span className="menuItem"><a href="#">Others</a></span></td>
                  <td><span className="menuItem"><a href="#">Printing, Design & Marketing</a></span><span className="menuItem"><a href="#">IT & Programming</a></span><span className="menuItem"><a href="#">Admin, Finance, Legal</a></span></td>
                  <td><span className="menuItem"><a href="#">Renovations</a></span><span className="menuItem"><a href="#">Home Repairs</a></span><span className="menuItem"><a href="#">Movers & Delivery</a></span><span className="menuItem"><a href="#">Home Cleaning</a></span><span className="menuItem"><a href="#">Aircon Services</a></span><span className="menuItem"><a href="#">Others</a></span></td>
                  <td><span className="menuItem"><a href="#">Enrichment & Tuition</a></span><span className="menuItem"><a href="#">Sport & Fitness Classes</a></span><span className="menuItem"><a href="#">Music & Art Classes</a></span><span className="menuItem"><a href="#">Professional Skills</a></span><span className="menuItem"><a href="#">Workshops</a></span></td>
                </tr>
              </table>
            </div>
          </div>
          <div class="dropdownMenu">
            <button class="dropdownButton">Others</button>
            <div class="dropdownContent">
            <table className="dropdownTable">
                <tr>
                  <th><img className="icon" src={require("../img/else.png")} />Everything Else</th>
                  <th><img className="icon" src={require("../img/board.png")} />Bulletin Board</th>
                  <th><img className="icon" src={require("../img/eye.png")} />Following</th>
                  <th><img className="icon" src={require("../img/free.png")} />Free Items</th>
                </tr>
                <tr>
                  <td></td>
                  <td><span className="menuItem"><a href="#">Looking For</a></span><span className="menuItem"><a href="#">Preorders</a></span></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
          <span className="rightButtons">
            <a href="#">Register</a>
            <a href="#">Sign in</a>
          </span>
          <span className="clearfix" />
        </div>
      </div>
      {/* <BlackBar /> */}
      <WhiteBar />
      <Gallery />
      <CategorySlider />
      <ProductList />
    </div>
  )
}

export default Home