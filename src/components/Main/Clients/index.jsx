/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper';
import Split from '../../Split';
import brands from '../../../data/main/clients.json';

const Clients = ({ slides }) => {
  return (
    <section className="clients-carsouel shad up">
      <div className="container radius-15">
        <div className="row">
          <div className="col-sm-2 sm-hide">
            <div className="item flex">
              <div className="icon-flex mr-20">
                <h2 className="fz-40">42<span></span></h2>
              </div>
              <div className="cont-flex valign">
                <div>
                  <span className="text-left fz-13 fw-500">Side <br/>Partners</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 valign">
            <Swiper 
              id="content-carousel-container-unq-2"
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              /* pagination={{
                clickable: false,
              }} */
              // navigation={true}
              modules={[Autoplay]}
              // modules={[Autoplay, Pagination, Navigation]}
              className="swiper-container"
              slidesPerView={slides ? 5 : 4}
              spaceBetween={0}
              speed={1000}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: slides ? 5 : 4
                }
              }}
            >
              {
                brands.map((brand, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="item">
                      <div className="img">
                        <img src={brand.image} alt="" />
                        {/* <Split>
                          <a href="#0" className="link" data-splitting>{ brand.title }</a>
                        </Split> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients