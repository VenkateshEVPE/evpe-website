import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import blogs from "../../data/blogs.json";

const BlogPost = () => {
  const { id } = useParams(); 
  const blog = blogs.find((b) => b.id === id); 

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt={blog.title}
            src={process.env.PUBLIC_URL + blog.image}
            className="blog_single"
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>{blog.date}</li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/blog-details-standard/${blog.id}`}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
          {/* Optional: You can add more content here */}
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;
