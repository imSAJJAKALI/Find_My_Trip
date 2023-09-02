import React from 'react'



import style from '../styles/home.module.css'
import { TabList, TabPanel, TabPanels, Tabs, Tab } from '@chakra-ui/react'
import DownloadApp from '../Components/DownloadApp'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const {isLoading,isError,isAuth,isSuccess} =useSelector((store:any)=>store.authReducer)
console.log("private Routes",isAuth)
  const Navigate = useNavigate()


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    Navigate('/Destinations')
  }

  return (

    <>
      <div className={style.TopDiv}>
        <div>
          <div className={style.headings}>
            <p className={style.goldenHeading}>Budget Travel. Rich Life</p>
            <h2>Enjoy The Best Moments <br /> Of Your Life</h2>
            <p>We have more than 1 million happy customers around the world & <br /> More than 70+ Destinations around the globe
            </p>
            <div>
              <button onClick={() => Navigate('/Destinations')}>{'Plan a Trip >'}</button>
              <button onClick={() => Navigate('/Destinations')}>Learn more</button>
            </div>
            <p><span>&#9679;</span><span>&#9679;</span><span>&#9679;</span><span>&#9679;</span><span>&#9679;</span></p>
          </div>
          <div className={style.TabDiv}>
            <Tabs isFitted variant='unstyled' colorScheme='#1071DB'>
              <TabList>
                <Tab _selected={{ bg: '#1071DB' }} p='10px 0px' m='1% 4%' borderRadius='10px'>
                  <span style={{ marginRight: '10px', transform: 'scale(1.5)' }} className="material-symbols-outlined">flightsmode</span> <span className={style.tabName}>Flights</span></Tab>
                <div style={{ backgroundColor: 'white', width: '3px', color: 'transparent', margin: '1% 0%' }}>|</div>
                <Tab _selected={{ bg: '#1071DB' }} p='10px 0px' m='1% 4%' borderRadius='10px'>
                  <span style={{ marginRight: '10px', transform: 'scale(1.5)' }} className="material-symbols-outlined">apartment</span><span className={style.tabName}>Hotels</span></Tab>
                <div style={{ backgroundColor: 'white', width: '3px', color: 'transparent', margin: '1% 0%' }}>|</div>
                <Tab _selected={{ bg: '#1071DB' }} p='10px 0px' m='1% 4%' borderRadius='10px'>
                  <span style={{ marginRight: '10px', transform: 'scale(1.5)' }} className="material-symbols-outlined">directions_car</span><span className={style.tabName}>Transport</span></Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <form className={style.FlightForm} onSubmit={handleSubmit}>
                    <div className={style.locationSelecter}>
                      <label htmlFor="form">From</label>
                      <select id="form">
                        <option value="India">India</option>
                        <option value="Japan">Japan</option>
                        <option value="Canada">Canada</option>
                        <option value="Austrilia">Austrilia</option>
                        <option value="America">America</option>
                      </select>
                    </div>
                    <div className={style.locationSelecter}>
                      <label htmlFor="to">To</label>
                      <select id="to">
                        <option value="Canada">Canada</option>
                        <option value="India">India</option>
                        <option value="Japan">Japan</option>
                        <option value="Austrilia">Austrilia</option>
                        <option value="America">America</option>
                      </select>
                    </div>
                    <div className={style.calenderSelecter}>
                      <label htmlFor="expected">Expected Date</label>
                      <input type='date' id="expected" />
                    </div>
                    <div className={style.searchInput}>
                      <label htmlFor="serach">Search Flight</label>
                      <input style={{ paddingLeft: '0px' }} type="submit" value='Search' id='serach' />
                    </div>
                  </form>
                </TabPanel>
                <TabPanel>
                  <form className={style.FlightForm} onSubmit={handleSubmit}>
                    <div className={style.locationSelecter}>
                      <label htmlFor="form">Location</label>
                      <select id="form">
                        <option value="India">India</option>
                        <option value="Japan">Japan</option>
                        <option value="Canada">Canada</option>
                        <option value="Austrilia">Austrilia</option>
                        <option value="America">America</option>
                      </select>
                    </div>
                    <div className={style.calenderSelecter}>
                      <label htmlFor="expected">Check In</label>
                      <input type='date' id="expected" />
                    </div>
                    <div className={style.calenderSelecter}>
                      <label htmlFor="expected">Check Out</label>
                      <input type='date' id="expected" />
                    </div>
                    <div className={style.searchInput}>
                      <label htmlFor="serach">Search Hotel</label>
                      <input style={{ paddingLeft: '0px' }} type="submit" value='Search' id='serach' />
                    </div>
                  </form>
                </TabPanel>
                <TabPanel>
                  <form className={style.FlightForm} onSubmit={handleSubmit}>
                    <div className={style.locationSelecter}>
                      <label htmlFor="form">From</label>
                      <select id="form">
                        <option value="India">India</option>
                        <option value="Japan">Japan</option>
                        <option value="Canada">Canada</option>
                        <option value="Austrilia">Austrilia</option>
                        <option value="America">America</option>
                      </select>
                    </div>
                    <div className={style.locationSelecter}>
                      <label htmlFor="to">Destination</label>
                      <select id="to">
                        <option value="Canada">Canada</option>
                        <option value="Japan">Japan</option>
                        <option value="India">India</option>
                        <option value="Austrilia">Austrilia</option>
                        <option value="America">America</option>
                      </select>
                    </div>
                    <div className={style.calenderSelecter}>
                      <label htmlFor="expected">Travel Date</label>
                      <input type='date' id="expected" />
                    </div>
                    <div className={style.searchInput}>
                      <label htmlFor="serach">Search</label>
                      <input style={{ paddingLeft: '0px' }} type="submit" value='Search' id='serach' />
                    </div>
                  </form>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>

      <div className={style.popularDestinations}>
        <h2>Popular <span>Destinations</span></h2>
        <p>From historical cites to natural spiendours,come see the best of world!</p>
        <span>View All <span className="material-symbols-outlined">trending_flat</span></span>
        <div>
          <div className={style.popular_card}>
            <img src="https://www.revv.co.in/blogs/wp-content/uploads/2019/11/self-drive-car-rental-delhi-gurgaon-noida_revv-blog.jpg" alt="" />
            <h4>India</h4>
          </div>
          <div className={style.popular_card}>
            <img src="https://3.bp.blogspot.com/-xWp2HP198u4/V_V9mUmHD6I/AAAAAAAAAuo/tjx1UBSzUYQxsU-w4lCXxxrOrJAqzjJRQCLcB/s1600/514226556.jpg" alt="" />
            <h4>France</h4>
          </div>
          <div className={style.popular_card}>
            <img src="https://www.who.com.au/media/34685/travelsydneygetty-951374324.jpg?width=720%C2%A2er=0.0,0.0" alt="" />
            <h4>Australia</h4>
          </div>
          <div className={style.popular_card}>
            <img src="https://cdn.wallpapersafari.com/67/35/5z4ZET.jpg" alt="" />
            <h4>USA</h4>
          </div>
          <div className={style.popular_card}>
            <img src="https://i.pinimg.com/736x/29/16/2c/29162cb6133746d7e0386720a56c848a.jpg" alt="" />
            <h4>UAE</h4>
          </div>
          <div className={style.popular_card}>
            <img src="https://www.travelweekly.com/uploadedImages/All_TW_Art/2016/020116/T0201BLUEMOSQUE_HR.jpg?n=6696&width=1540&height=866&mode=crop&Anchor=MiddleCenter" alt="" />
            <h4>Turkey</h4>
          </div>
        </div>
      </div>

      <div className={style.tripPackage}>
        <h2>Our<span>Trip Packages</span></h2>
        <p>Here you will find all your Luxurious tour packagehey in a reasonable range of cost !</p>
        <span>View All <span className="material-symbols-outlined">trending_flat</span></span>
        <div>
          <div className={style.tripPackage_card}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Toronto_-_ON_-_CN_Tower_bei_Nacht2.jpg" alt="" />
            <div>
              <p>Toronto, Canada</p>
              <p>3 Nights 3 Days</p>
              <div>
                <span>from<b>$800</b></span>
                <button>Find Details</button>
              </div>
            </div>
          </div>
          <div className={style.tripPackage_card}>
            <img src="https://i.pinimg.com/736x/29/16/2c/29162cb6133746d7e0386720a56c848a.jpg" alt="" />
            <div>
              <p>Dubai, UAE</p>
              <p>3 Nights 2 Days</p>
              <div>
                <span>from<b>$500</b></span>
                <button>Find Details</button>
              </div>
            </div>
          </div>
          <div className={style.tripPackage_card}>
            <img src="https://wallpapercave.com/wp/wp6770766.jpg" alt="" />
            <div>
              <p>Madrid, Spain</p>
              <p>4 Nights 4 Days</p>
              <div>
                <span>from<b>$600</b></span>
                <button>Find Details</button>
              </div>
            </div>
          </div>
          <div className={style.tripPackage_card}>
            <img src="https://www.honeyandlime.co/wp-content/uploads/2017/05/Canal-bridge-in-Venice-Italy.jpg" alt="" />
            <div>
              <p>Venice, Italy</p>
              <p>2 Nights 3 Days</p>
              <div>
                <span>from<b>$300</b></span>
                <button>Find Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.packageBanner}>
        <p>Southern aegean sea, Santorini, Greece</p>
        <h3>3 Nights Oasis Hotel</h3>
        <p>From all Inclusive vacation to safari in Africa or escorted tours in <br /> furoan ,carefine vacations provides in best travel packages.</p>
        <div>
          <button>View This Offer</button>
          <span>Starting from <br /> <b>$1000</b></span>
        </div>
      </div>

      <div className={style.QuickSafe}>
        <div className={style.QS_leftDiv}>
          <h3>Quick <span>& Safe</span></h3>
          <p>Start Your Next Trip In <span>3 Easy Steps</span></p>
          <div>
            <span className="material-symbols-outlined">flag</span>
            <div>
              <h4>Choose Destination</h4>
              <p>We helpe you to choose your next holiday destination, trip help you to make the best of your journey</p>
            </div>
            <span className="material-symbols-outlined">account_balance_wallet</span>
            <div>
              <h4>Make Payment</h4>
              <p>We provide you multiple online secure payment methods after completing payment method you are ready to go</p>
            </div>
            <span className="material-symbols-outlined">flight_takeoff</span>
            <div>
              <h4>Reach Airport On Selected Date</h4>
              <p>On selected date reach airport before 2 hours of departure, complete your boarding process,it will help you to check in plane on time</p>
            </div>
          </div>
        </div>
        <div className={style.QS_rightDiv}>
          <div className={style.QS_BigCard}>
            <img src="https://c.stocksy.com/a/nlM300/z9/802515.jpg" alt="" />
            <p><b>Trip To Canada</b></p>
            <p>01-06 June | by Find My Trip</p>
            <div>
              <span className="material-symbols-outlined">eco</span>
              <span className="material-symbols-outlined">map</span>
              <span className="material-symbols-outlined">send</span>
            </div>
            <p><span className="material-symbols-outlined">group_add</span> 45 peoples are going</p>
            <div className={style.QS_smallCard}>
              <img src="https://c.stocksy.com/a/nlM300/z9/802515.jpg" alt="" />
              <div>
                <p>ongoing</p>
                <p><b>Trip To Canada</b></p>
                <p><span>40% </span> Completed</p>
                <input type="range" value='40' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <DownloadApp />

      <div className={style.popularDestinations} style={{marginBottom:'30px'}}>
      <h2>Follow Us<span> ON Instagram</span></h2>
        <p>Find hear all our happy customers shared their golden memories with us</p>
        <span>View All <span className="material-symbols-outlined">trending_flat</span></span>
        <div>
          <div className={style.popular_card}>
            <img src="https://thumbs.dreamstime.com/b/summer-car-trip-two-young-people-enjoy-vacation-couple-tourist-map-enjoying-156270951.jpg" alt="" />
           
          </div>
          <div className={style.popular_card}>
            <img src="https://image.freepik.com/free-photo/stylish-young-man-enjoying-trip_23-2148727089.jpg" alt="" />
            
          </div>
          <div className={style.popular_card}>
            <img src="https://i.pinimg.com/originals/37/3b/56/373b56517b7ebd4c1c0ebc64e7368539.jpg" alt="" />
            
          </div>
          <div className={style.popular_card}>
            <img src="https://cdn.shopify.com/s/files/1/0059/0056/6597/products/photo-id-2005746647109-woman-enjoying-herself-on-road-trip_1200x800.jpg?v=1563840217" alt="" />
            
          </div>
          <div className={style.popular_card}>
            <img src="https://img.freepik.com/free-photo/pretty-young-woman-enjoying-road-trip_23-2148732199.jpg?size=338&ext=jpg" alt="" />
            
          </div>
          <div className={style.popular_card}>
            <img src="https://www.theknot.com/tk-media/images/1dc24221-13f0-413f-864a-30698c62b50d~rs_768.h-cr_71.0.1031.720" alt="" />
            
          </div>
        </div>
      </div>

      <div className={style.CustomersReveiw}>
        <div>
        <h2>What <span>Our Customers Say ?</span></h2>
        <span>View All <span className="material-symbols-outlined">trending_flat</span></span>
        </div>
        <div className={style.reviewDiv}>
          <div>
            <div className={style.reviewCard}>
              <img src="https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&ixlib=php-2.1.1&q=35&w=1024&s=d877834568578388ef13b78e3cd7ba2b" alt="" />
              <p><b>Mr.Andrew</b></p>
              <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              <p>Really enjoyed the service of may find my trip never seen such a valuable an amazing service provided bycompany like theseopen cheap trip package andfully very method</p>
            </div>
            <div className={style.reviewCard}>
              <img src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg" alt="" />
              <p><b>Miss.Lucy</b></p>
              <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              <p>Really enjoyed the service of may find my trip never seen such a valuable an amazing service provided bycompany like theseopen cheap trip package andfully very method</p>
            </div>
            <div className={style.reviewCard}>
              <img src="https://i.pinimg.com/736x/a2/de/39/a2de3954697c636276192afea0a6f661--web-design-tools-extension.jpg" alt="" />
              <p><b>Mr.Jack</b></p>
              <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              <p>Really enjoyed the service of may find my trip never seen such a valuable an amazing service provided bycompany like theseopen cheap trip package andfully very method</p>
            </div>
            <div className={style.reviewCard}>
              <img src="http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg" alt="" />
              <p><b>Miss. Katy</b></p>
              <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              <p>Really enjoyed the service of may find my trip never seen such a valuable an amazing service provided bycompany like theseopen cheap trip package andfully very method</p>
            </div>
          </div>

          <div className={style.newsLetter}>
            <h2>Subscribe To Our Newsletter</h2>
            <p>We will keep your information secret & send you offer updates</p>
            <div>
              <input type="text" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home