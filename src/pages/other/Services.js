import { Fragment } from "react"; 
// import { useLocation } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
// import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import BannerOne from "../../wrappers/banner/BannerOne";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";

const Service = () => {
  // let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="About us"
        description="About page of flone react minimalist eCommerce template."
      /> 
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        {/* <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "About us", path: process.env.PUBLIC_URL + pathname }
          ]} 
        /> */}

        <div className="blog-area pt-100 pb-100">
          <div className="container mt-3">
            <div className="row flex-row-reverse">
              <div className="col-lg-12">
                <div className="ml-20">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="services-wrap-2 mb-30">
                        <div className="blog-img-2" style={{textAlign:"center"}}>           
                            <img src={process.env.PUBLIC_URL + "/assets/img/icon-img/support-1.webp"} className="blog_image mt-4"
                              alt="" style={{height:"90px", width:"100px"}}
                            />
                        </div>
                        <div className="blog-content-2">           
                          <h4>
                          Leasing and Financing
                          </h4>
                          <p>
                          The evpe platform offers a variety of leasing and financing options including traditional leasing, lease-to-own plans, and instalment plans, swap & upgrade plans. 
                          </p>           
                        </div>
                      </div>                    
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="services-wrap-2 mb-30">
                        <div className="blog-img-2" style={{textAlign:"center"}}>           
                            <img
                              src={process.env.PUBLIC_URL + "/assets/img/icon-img/support-2.webp"} className="blog_image mt-4"
                              alt="" style={{height:"70px", width:"90px"}}
                            />
                        </div>
                        <div className="blog-content-2">           
                          <h4>
                          Road Side Assistance
                          </h4>
                          <p>
                          evpe provides RSA services as a part of their offerings to make the experience seamless, to ensure lesser downtimes for businesses. evpe provides RSA services as a part of their offerings to make the experience seamless, to ensure lesser downtimes for businesses. ..
                          </p>           
                        </div>
                      </div>                    
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                      <div className="services-wrap-2 mb-30">
                        <div className="blog-img-2" style={{textAlign:"center"}}>           
                            <img
                              src={process.env.PUBLIC_URL + "/assets/img/icon-img/support-3.png"} className="blog_image mt-4"
                              alt="" style={{height:"80px", width:"90px"}}
                            />
                        </div>
                        <div className="blog-content-2">           
                          <h4>
                          Maintenance and Repair
                          </h4>
                          <p>
                          evpe’s partner service providers will offer maintenance and repair services for EV vehicles, offering seamless availability for their service requirements. 
                          </p>           
                        </div>
                      </div>                    
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                      <div className="services-wrap-2 mb-30">
                        <div className="blog-img-2" style={{textAlign:"center"}}>           
                            <img
                              src={process.env.PUBLIC_URL + "/assets/img/icon-img/support-4.webp"} className="blog_image mt-4"
                              alt="" style={{height:"80px", width:"80px"}}
                            />
                        </div>
                        <div className="blog-content-2">           
                          <h4>
                          Charging and Swapping
                          </h4>
                          <p>
                          We are partnering with charging & battery-swapping service providers to provide widespread access to energy points, removing range anxiety and providing more reliability. 
                          </p>           
                        </div>
                      </div>                    
                    </div>
                    
                  </div>                 
                </div>
              </div>             
            </div>
          </div>
        </div>  

        
      </LayoutOne>
    </Fragment>
  );
};

export default Service;
