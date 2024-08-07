import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
// home pages
const HomeFashion = lazy(() => import("./pages/home/HomeFashion"));
const Faq = lazy(() => import("./pages/other/Faq"));
const Leasing = lazy(() => import("./pages/other/Leasing"));
const Service = lazy(() => import("./pages/other/Service"));
//template cmd : npx create-react-app my-app --template cra-template-pwa 

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));
const ShopGridTwoColumn = lazy(() => import("./pages/shop/ShopGridTwoColumn"));
const ShopGridNoSidebar = lazy(() => import("./pages/shop/ShopGridNoSidebar"));
const ShopGridFullWidth = lazy(() => import("./pages/shop/ShopGridFullWidth"));
const ShopGridRightSidebar = lazy(() =>
  import("./pages/shop/ShopGridRightSidebar")
);
const ShopListStandard = lazy(() => import("./pages/shop/ShopListStandard"));
const ShopListFullWidth = lazy(() => import("./pages/shop/ShopListFullWidth"));
const ShopListTwoColumn = lazy(() => import("./pages/shop/ShopListTwoColumn"));

//used product
const UsedProducts = lazy(() => import("./pages/used/Used"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);

// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"));
const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"));
const BlogRightSidebar = lazy(() => import("./pages/blog/BlogRightSidebar"));
const BlogDetailsStandard = lazy(() =>
  import("./pages/blog/BlogDetailsStandard")
);

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));
const NotFound = lazy(() => import("./pages/other/NotFound"));



const App = () => {
  return (
      <Router>
        <ScrollToTop>
          <Suspense
            fallback={
              <div className="flone-preloader-wrapper">
                <div className="flone-preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <Routes>
              

              {/* Homepages */}
              {/* <nav>
                <NavLink 
                    to={process.env.PUBLIC_URL + "/"} 
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    HomeFashion
                </NavLink>
            </nav> */}


              <Route
                path={process.env.PUBLIC_URL + "/"}
                element={<HomeFashion/>}
              />
               {/* Faq pages */}
               <Route
                path={process.env.PUBLIC_URL + "/faq"}
                element={<Faq/>}
              />
               {/* Leasing pages */}
               <Route
                path={process.env.PUBLIC_URL + "/leasing"}
                element={<Leasing/>}
              />   
               {/* service pages */}
               <Route
                path={process.env.PUBLIC_URL + "/services"}
                element={<Service/>}
              />            

              {/* Shop pages */}
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-standard"}
                element={<ShopGridStandard/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-filter"}
                element={<ShopGridFilter/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-two-column"}
                element={<ShopGridTwoColumn/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}
                element={<ShopGridNoSidebar/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-full-width"}
                element={<ShopGridFullWidth/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}
                element={<ShopGridRightSidebar/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-list-standard"}
                element={<ShopListStandard/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-list-full-width"}
                element={<ShopListFullWidth/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-list-two-column"}
                element={<ShopListTwoColumn/>}
              />         

              {/* Used product pages */}
              <Route
                path={process.env.PUBLIC_URL + "/used"}
                element={<UsedProducts />}
              />

               {/* Shop product pages */}
              <Route
                path={process.env.PUBLIC_URL + "/product/:id"}
                element={<Product />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
                element={<ProductTabLeft/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
                element={<ProductTabRight/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-sticky/:id"}
                element={<ProductSticky/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-slider/:id"}
                element={<ProductSlider/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
                element={<ProductFixedImage/>}
              />     

              {/* Blog pages */}
              <Route
                path={process.env.PUBLIC_URL + "/blog-standard"}
                element={<BlogStandard/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
                element={<BlogNoSidebar/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/blog-right-sidebar"}
                element={<BlogRightSidebar/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/blog-details-standard/:id"}
                element={<BlogDetailsStandard/>}
              /> 

              {/* Other pages */}
              <Route
                path={process.env.PUBLIC_URL + "/about"}
                element={<About/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/contact"}
                element={<Contact/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/my-account"}
                element={<MyAccount/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/login-register"}
                element={<LoginRegister/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/cart"}
                element={<Cart/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/wishlist"}
                element={<Wishlist/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/compare"}
                element={<Compare/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/checkout"}
                element={<Checkout/>}
              /> 
              
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </Router>
  );
};

export default App;