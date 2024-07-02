import { Fragment } from "react"; 
import { useLocation } from "react-router-dom"; 
import React, { useState } from 'react';
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import BannerOne from "../../wrappers/banner/BannerOne";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";

const About = () => {
  let { pathname } = useLocation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoPlaying(true);
  };
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

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-50" spaceBottomClass="pb-95" />
        <div className="blog-area  pb-100">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-12">
                <div className="ml-20">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="blog-wrap-2 mb-30">
                          <div className="blog-img-2">
                              <img src={process.env.PUBLIC_URL + "/assets/img/about/green-mobility.webp"} className="blog_image" style={{width:'100%'}} alt=""/>
                          </div>
                          <div className="blog-content-2">                          
                            <h4>Green Mobility</h4>
                            <p>
                             evpe provides access to affordable electric two and three-wheelers. Our lease models lower upfront costs, offer higher cost-efficiencies & align with a greener, cleaner future, substantially & sustainably reducing carbon emissions.
                            </p>                        
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="blog-wrap-2 mb-30">
                          <div className="blog-img-2">
                              <img src={process.env.PUBLIC_URL + "/assets/img/about/platform.webp"} className="blog_image" style={{width:'100%'}} alt=""/>
                          </div>
                          <div className="blog-content-2">                          
                            <h4>The Platform</h4>
                            <p>
                              Our intuitive platform fuses clean mobility with value added services, offering a comprehensive suite of tools from live vehicle tracking to maintenance alerts. Our technology not only elevates the driving experience but also maximizes vehicle longevity,and your profits.
                            </p>                        
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="blog-wrap-2 mb-30">
                          <div className="blog-img-2">
                              <img src={process.env.PUBLIC_URL + "/assets/img/about/network.webp"} className="blog_image" style={{width:'100%'}} alt=""/>
                          </div>
                          <div className="blog-content-2">                          
                            <h4>Network Integration</h4>
                            <p>
                            Our integration with ecosystem partners connects you to an extensive network of charging stations, maintenance services, roadside assistance and insurance, ensuring your journeys are uninterrupted and efficient
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
        <div className="container-fluid  pt-70 pb-70" style={{backgroundColor:"#4d96c8"}} >
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="text-section centered-content">
              <h1 style={{color:"white"}}><b>Watch us in action!</b></h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="video-section" style={{ position: 'relative' }}>
              {isVideoPlaying ? (
                <iframe
                  width="100%"
                  height="330"
                  src="https://www.youtube.com/embed/8A-etRMnqBc?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="video-thumbnail" onClick={handleThumbnailClick} style={{ cursor: 'pointer' }}>
                  <img
                    src="https://img.youtube.com/vi/8A-etRMnqBc/0.jpg"
                    alt="Video Thumbnail"
                    style={{ width: '100%', height: '330px' }}
                  />
                  <div className="play-button-overlay">
                      <svg
                        width="68"
                        height="48"
                        viewBox="0 0 68 48"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                      >
                       <rect width="100%" height="100%" fill="red" />
                       <polygon points="25,16 25,32 40,24" fill="#FFF" />                    
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>     


       
     
        {/* banner */}
        {/* <BannerOne spaceBottomClass="pb-70" /> */}

        {/* text grid */}
        <TextGridOne spaceBottomClass="pb-70 pt-100" />
       

        {/* fun fact */}
        <FunFactOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          bgClass="bg-gray-3"
        />

        {/* team member */}
        <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" />

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

export default About;
