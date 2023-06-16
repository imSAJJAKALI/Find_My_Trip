import React from 'react'
import style from '../styles/home.module.css'
import { TabList, TabPanel, TabPanels, Tabs, Tab } from '@chakra-ui/react'
import DownloadApp from '../Components/DownloadApp'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate=useNavigate()


  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
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
              <button onClick={()=>Navigate('/Destinations')}>{'Plan a Trip >'}</button>
              <button>Learn more</button>
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
                      </select>
                    </div>
                    <div className={style.locationSelecter}>
                      <label htmlFor="to">To</label>
                      <select id="to">
                        <option value="Canada">Canada</option>
                      </select>
                    </div>
                    <div className={style.calenderSelecter}>
                      <label htmlFor="expected">Expected Date</label>
                      <input type='date' id="expected" />
                    </div>
                    <div className={style.searchInput}>
                      <label htmlFor="serach">Search Flight</label>
                      <input style={{paddingLeft:'0px'}} type="submit" value='Search' id='serach' />
                    </div>
                  </form>
                </TabPanel>
                <TabPanel>
                  <form className={style.FlightForm} onSubmit={handleSubmit}>
                    <div className={style.locationSelecter}>
                      <label htmlFor="form">Location</label>
                      <select id="form">
                        <option value="India">India</option>
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
                      <input style={{paddingLeft:'0px'}} type="submit" value='Search' id='serach' />
                    </div>
                  </form>
                </TabPanel>
                <TabPanel>
                  <form className={style.FlightForm} onSubmit={handleSubmit}>
                    <div className={style.locationSelecter}>
                      <label htmlFor="form">From</label>
                      <select id="form">
                        <option value="India">India</option>
                      </select>
                    </div>
                    <div className={style.locationSelecter}>
                      <label htmlFor="to">Destination</label>
                      <select id="to">
                        <option value="Canada">Canada</option>
                      </select>
                    </div>
                    <div className={style.calenderSelecter}>
                      <label htmlFor="expected">Travel Date</label>
                      <input type='date' id="expected" />
                    </div>
                    <div className={style.searchInput}>
                      <label htmlFor="serach">Search</label>
                      <input style={{paddingLeft:'0px'}} type="submit" value='Search' id='serach' />
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

      <DownloadApp/>
      
    </>
  )
}

export default Home