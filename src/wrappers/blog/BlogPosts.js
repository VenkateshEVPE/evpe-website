import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import blogs from "../../data/blogs.json";
const BlogPosts = () => {
  return (
    <Fragment>
      
    {blogs.map((blog, index) => (
      <div key={index} className="col-lg-4 col-md-4 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={`${process.env.PUBLIC_URL}/blog-details-standard/${blog.id}`}>
              <img
                src={process.env.PUBLIC_URL + blog.image}
                className="blog_image"
                alt={blog.title}
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>{blog.date}</li>
              </ul>
            </div>
            <h4>
              <Link to={`${process.env.PUBLIC_URL}/blog-details-standard/${blog.id}`}>
                {blog.title}
              </Link>
            </h4>
            <p>{blog.description.substring(0, 150)}...</p> {/* Truncate description for summary */}
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={`${process.env.PUBLIC_URL}/blog-details-standard/${blog.id}`}>
                  Read more
                </Link>
              </div>
              <div className="blog-share">
                <span>Share:</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Fragment>
  );
};

export default BlogPosts;
