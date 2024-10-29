import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function App() {

  return (
    <>
      {/* Welcome Section */}
      <div className="bg-gradient-to-b from-black to-customBlue h-[70vh] flex flex-col md:flex-row justify-center items-center mt-5 mx-0 md:mx-10 lg:mx-[170px] z-0 animate-fade-in">
        <div className="detail w-full md:w-3/5 lg:w-2/5 h-[65vh] flex flex-col gap-7">
          <div className="mt-5 text-center md:text-left px-4 lg:px-0">
            <img className="h-[80px] md:h-[90px] lg:h-[100px] invert mx-auto md:mx-0" src="/images/anubandh_logo.png" alt="photo" />
            <p className="text-white text-lg md:text-xl lg:text-2xl pb-3 md:pb-4 lg:pb-5 pt-3 md:pt-4 lg:pt-5">“Reconnecting Alumni, Redefining the Future”</p>
            <p className="text-white text-sm md:text-base lg:text-xl font-serif">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid sit explicabo adipisci labore, possimus expedita! Mollitia aperiam hic unde natus nesciunt illo nisi.</p>
          </div>
          <div className="bt h-4 flex justify-center md:justify-start">
            <button className="bg-green-500 px-3 py-1 rounded-full m-3 font-semibold text-base md:text-lg lg:text-xl w-[140px] md:w-[160px] lg:w-[200px] h-10 lg:h-12 hover:bg-green-400 animate-bounce-hover">Get Started</button>
          </div>
        </div>
        <div className="photo w-full md:w-2/5 lg:w-2/5 h-[50vh] md:h-[60vh] lg:h-[65vh] m-5 relative mt-8 md:mt-0">
          <img src="/images/mobile.png" alt="" className="w-full h-full object-contain absolute z-20" />
          <img src="" alt="home page image" className="absolute top-[40px] md:top-[50px] lg:top-[62px] left-[70px] md:left-[100px] lg:left-[144px] w-[30%] md:w-[34%] lg:w-[38%] h-[70%] md:h-[72%] lg:h-[75%] object-cover rounded-xl z-10" />
        </div>
      </div>

      {/* Aadhaar Based Login System */}
      {/* <div className="h-auto md:h-[65vh] lg:h-[70vh] flex flex-col md:flex-row justify-center items-center mt-0 mx-0 md:mx-10 lg:mx-[170px] animate-fade-in">
        <div className="imge w-full md:w-2/5 lg:w-2/5">
          <img src="/images/login_3.jpg" alt="login" className="w-full object-cover" />
        </div>
        <div className="Ques w-full md:w-3/5 lg:w-2/5 text-center md:text-left px-5 lg:px-0">
          <span className="font-bold text-lg md:text-xl lg:text-2xl p-3 md:p-[60px] lg:p-[75px] block">Aadhaar Based Login System</span>
          <p className="text-sm md:text-base lg:text-xl pt-3">Ensures secure access and matches alumni with the correct college platform, avoiding confusion due to common names or birthdates.</p>
        </div>
      </div> */}

      {/* Events Tab */}
      {/* <div className="relative h-auto md:h-[55vh] lg:h-[60vh] flex justify-center items-center mt-0 mx-0 md:mx-10 lg:mx-[170px]">
        <div className="h-[40vh] md:h-[55vh] lg:h-[60vh] flex justify-center items-center overflow-hidden w-full">
          <img src="/images/events_3.avif" alt="" className="w-full object-cover opacity-75" />
        </div>
        <div className="absolute flex items-center flex-col gap-6 md:gap-8 text-center px-4">
          <p className="bg-gradient-to-r from-black via-customBlue to-black bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl animate-pulse">Events Tab</p>
          <p className="text-sm md:text-base lg:text-xl w-full md:w-3/5 lg:w-2/5">A comprehensive section displaying photos, videos, and updates from college events, reunions, and workshops to keep alumni connected with campus life.</p>
        </div>
      </div> */}

      {/* Donation Process */}
      {/* <div className="donation relative bg-gradient-to-b from-white to-customBlue h-auto md:h-[55vh] lg:h-[60vh] flex flex-col md:flex-row justify-center gap-5 md:gap-8 lg:gap-[70px] items-center mt-0 mx-0 md:mx-10 lg:mx-[170px] py-5">
        <div className="imge w-full md:w-1/3 lg:w-1/4 mt-2 px-5 md:px-0">
          <img src="/images/donation_3.webp" alt="login" className="w-full object-cover" />
        </div>
        <div className="Ques w-full md:w-3/5 lg:w-2/5 text-center md:text-left px-5 lg:px-0">
          <span className="font-bold text-lg md:text-xl lg:text-2xl p-3 md:p-[60px] lg:p-[75px] block">Simplified Donation Process</span>
          <p className="text-sm md:text-base lg:text-xl pt-3">Easy, secure donations with real-time tracking of fund usage and progress toward goals, providing transparency and motivating alumni to support college initiatives.</p>
        </div>
      </div> */}

      <div className="w-full max-w-6xl mx-auto mt-10 px-5">
        {/* Swiper Slider Container */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }, // Show 2 slides on tablets
            1024: { slidesPerView: 3 }, // Show 3 slides on larger screens
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-md overflow-hidden w-full">
              <div className="w-full h-48 flex flex-col items-center">
                <img src="/images/login_3.jpg" alt="login" className="w-4/5 h-full object-cover" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-3">Aadhaar Based Login System</h3>
                <p className="text-sm md:text-base lg:text-lg">
                  Ensures secure access and matches alumni with the correct college platform, avoiding confusion due to common names or birthdates.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-md overflow-hidden w-full">
              <div className="w-full h-48">
                <img src="/images/events_3.avif" alt="Events Tab" className="w-full h-full object-cover opacity-75" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-3">Events Tab</h3>
                <p className="text-sm md:text-base lg:text-lg">
                  A comprehensive section displaying photos, videos, and updates from college events, reunions, and workshops to keep alumni connected with campus life.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-md overflow-hidden w-full">
              <div className="w-full h-48 flex flex-col items-center">
                <img src="/images/donation_3.webp" alt="Donation Process" className="w-3/5 h-full object-cover" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-3">Simplified Donation Process</h3>
                <p className="text-sm md:text-base lg:text-lg">
                  Easy, secure donations with real-time tracking of fund usage and progress toward goals, providing transparency and motivating alumni to support college initiatives.
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* {slide 4} */}
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-md overflow-hidden w-full">
              <div className="w-full h-48 flex flex-col items-center">
                <img src="/images/chat_1.webp" alt="Donation Process" className="w-3/5 h-full object-cover" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-3">Career Domain-Based Groups & Chat</h3>
                <p className="text-sm md:text-base lg:text-lg">
                  Alumni can
                  join profession-based groups for networking and
                  collaboration, while students gain insights into
                  their desired fields, fostering industry-specific
                  connections.
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* slide 5 */}
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-md overflow-hidden w-full">
              <div className="w-full h-48 flex flex-col items-center">
                <img src="/images/chatbot_1.jpeg" alt="Donation Process" className="w-3/5 h-full object-cover" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-3">AI Chatbot</h3>
                <p className="text-sm md:text-base lg:text-lg">
                  An intelligent assistant providing 24/7 seamless navigation and
                  instant support to boost user engagement. It offers instant assistance for a
                  smooth, user-friendly experience and can be especially helpful for alumni with
                  limited digital proficiency, such as older individuals.                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


    </>
  )
}

export default App;
