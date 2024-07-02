import { Fragment } from 'react';
import SEO from "../../components/seo";
import LayoutOne from '../../layouts/LayoutOne';

const UsedProducts = () => {  
    return (
        <Fragment>
            <SEO
                titleTemplate="Used Products"
                description="Used Products"
            />
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                {/* <Breadcrumb 
                    pages={[
                        {label: "Home", path: process.env.PUBLIC_URL + "/" },
                        {label: "Shop", path: process.env.PUBLIC_URL + pathname }
                    ]} 
                /> */}

                <div className="shop-area pt-95 pb-100">
                    <div className="container">
                        <div className="row">
                           <h1 style={{color:"red"}}>Used products are comming soon</h1>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    )
}


export default UsedProducts;