import { Fragment } from "react"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";

const Service = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Service"
        description="Service."
      />
      <LayoutOne headerTop="visible">       
        <div className="blog-area pt-100 pb-100">
          <div className="container mt-3">
            <div className="row flex-row-reverse">
              <div className="col-lg-12">
                <div className="ml-20">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="service-wrap-2 mb-30">
                                <div className="blog-img-2" style={{ display: 'flex', justifyContent: 'center',  alignItems: 'center' }}>                                   
                                    <img src={process.env.PUBLIC_URL + "/assets/img/icon-img/support-4.webp"} className="blog_image mt-4"  style={{width: '80px',height: '80px', objectFit: 'cover'  }}  alt=""/>                                    
                                </div>
                                <div className="blog-content-2">                                   
                                    <h4>Charging and Swapping</h4>
                                    <p> We are partnering with charging & battery-swapping service providers to provide widespread access to energy points, removing range anxiety and providing more reliability.</p>                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="service-wrap-2 mb-30">
                                <div className="blog-img-2" style={{ display: 'flex', justifyContent: 'center',  alignItems: 'center' }}>                                   
                                    <img src={process.env.PUBLIC_URL + "/assets/img/icon-img/support-3.png"} className="blog_image mt-4"  style={{width: '80px',height: '80px', objectFit: 'cover'    }}  alt=""/>                                    
                                </div>
                                <div className="blog-content-2">                                   
                                    <h4>Maintenance and Repair</h4>
                                    <p>evpe’s partner service providers will offer maintenance and repair services for EV vehicles, offering seamless availability for their service requirements.</p>

                                    </div>
                            </div>
                        </div>   
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="service-wrap-2 mb-30">
                                <div className="blog-img-2" style={{ display: 'flex', justifyContent: 'center',  alignItems: 'center' }}>                                   
                                    <img src={process.env.PUBLIC_URL + "/assets/img/icon-img/support-2.webp"} className="blog_image mt-5"  style={{width: '80px',height: '60px', objectFit: 'cover'  }}  alt=""/>                                    
                                </div>
                                <div className="blog-content-2">                                   
                                    <h4>Road Side Assistance</h4>
                                    <p>evpe provides RSA services as a part of their offerings to make the experience seamless, to ensure lesser downtimes for businesses. </p>                                   
                                </div>
                            </div>
                        </div> 
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="service-wrap-2 mb-30">
                                <div className="blog-img-2" style={{ display: 'flex', justifyContent: 'center',  alignItems: 'center' }}>                                   
                                    <img src={process.env.PUBLIC_URL + "/assets/img/icon-img/fleet-management.webp"} className="blog_image mt-4"  style={{width: '70px',height: '70px', objectFit: 'cover'   }}  alt=""/>                                    
                                </div>
                                <div className="blog-content-2">                                   
                                    <h4>Fleet Management Solutions</h4>
                                    <p>A robust Fleet Management System enabling businesses to operate efficiently without requiring to invest in additional enabling infrastructure and technology. </p>                                   
                                </div>
                            </div>
                        </div> 
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="service-wrap-2 mb-30">
                                <div className="blog-img-2" style={{ display: 'flex', justifyContent: 'center',  alignItems: 'center' }}>                                   
                                    <img src={process.env.PUBLIC_URL + "/assets/img/icon-img/insurance.png"} className="blog_image mt-4"  style={{width: '70px',height: '70px', objectFit: 'cover'  }}  alt=""/>                                    
                                </div>
                                <div className="blog-content-2">                                   
                                    <h4>Insurance</h4>
                                    <p>Our partnerships with insurance firms streamline the insurance experience, simplifying policy renewals and claims to relieve our customers of administrative hassles. </p>                                   
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
