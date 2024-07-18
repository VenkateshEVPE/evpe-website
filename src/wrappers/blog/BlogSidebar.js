
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import blogs from "../../data/blogs.json";

const BlogSidebar = () => {
  const { id } = useParams(); 
  const blog = blogs.filter((b) => b.id !== id); 
  return (
    <div className="sidebar-style">
      {/* <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Search </h4>
        <div className="pro-sidebar-search mb-55 mt-25">
          <form className="pro-sidebar-search-form" action="#">
            <input type="text" placeholder="Search here..." />
            <button>
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div> */}
      <div className="sidebar-widget ">
        <h4 className="pro-sidebar-title">Recent Blogs </h4>
        <div className="sidebar-project-wrap mt-30 ">
        {blog.map((blog, index) => (
          <div key={index}  className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={`${process.env.PUBLIC_URL}/blog-details-standard/${blog.id}`}>  
                <img
                  src={process.env.PUBLIC_URL + blog.image}
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>{blog.title.length > 20 ? `${blog.title.slice(0, 20)}...` : blog.title}</span>
              <h4>
                <Link to={`${process.env.PUBLIC_URL}/blog-details-standard/${blog.id}`}>
                {blog.description.length > 25 ? `${blog.description.slice(0, 25)}...` : blog.description}
                </Link>
              </h4>
            </div>
          </div>         
        ))}
        </div>
      </div>
      {/* <div className="sidebar-widget mt-35">
        <h4 className="pro-sidebar-title">Categories</h4>
        <div className="sidebar-widget-list sidebar-widget-list--blog mt-20">
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Women <span>4</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Men <span>4</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Bags <span>4</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Accessories <span>4</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-widget mt-50">
        <h4 className="pro-sidebar-title">Tag </h4>
        <div className="sidebar-widget-tag mt-25">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Clothing
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Accessories
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                For Men
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>Women</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Fashion
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default BlogSidebar;
