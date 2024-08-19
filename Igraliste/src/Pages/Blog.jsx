// import { Link } from "react-router-dom";
import Layout from '../components/Layout/Layout.jsx'
import Carousel from "../components/CarouselHome/Carousel.jsx";
// import blogData from "../data/blogData.jsx"; 
// import BlogPostHome from "./BlogPostHome.jsx";
import LastBlog from "../components/blogComponents/LastBlog.jsx";
import AllBlogs from '../components/blogComponents/AllBlogs.jsx'



function Blog() {

  return (
    <>
      <Layout>
        <Carousel />
        <LastBlog
          const
          title="Nas najnoviji blog"
          className=" lg:block w-[100%] mx-auto "
        />
        <AllBlogs/>
        {/* <BlogPostHome
          title="Najnoviji blog"
          className="hidden lg:block w-[80%] mx-auto "
        />  */}
         {/* <div className="bg-white">
          <article className=" w-[80%] pt-4 h-full mx-auto lg:grid grid-cols-3 gap-5   ">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full py-2  px-2 mb-2 md:px-4 md:py-4 lg:px-8 lg:py-2 mx-auto border "
              >
                <Link
                  to={`/blog/${encodeURIComponent(blog.title)}`}
                  className=""
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-auto mb-4"
                  />
                  <p className=" text-center text-base  md:text-lg px-4 pt-4  ">
                    {blog.title}
                  </p>
                </Link>
              </div>
            ))}
          </article>
        </div> */}
      </Layout>
    </>
  );
}

export default Blog;
