import { Fragment } from "react"; 
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";


const Leasing = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Contact"
        description="Contact page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        {/* <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Faq's", path: process.env.PUBLIC_URL + pathname }
          ]} 
        /> */}
         <div className="blog-area pt-100 pb-100">
          <div className="container mt-3">
            <div className="row flex-row-reverse">
              <div className="col-lg-12">
                <div className="ml-20">
                  <div className="row">                  
                    <h1>Coming Soon.....</h1>
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

export default Leasing;
