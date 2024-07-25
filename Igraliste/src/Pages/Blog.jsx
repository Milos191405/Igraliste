import { Link } from "react-router-dom";
import Carousel from "../components/CarouselHome/Carousel.jsx";
import blogData from "../data/blogData.jsx"; 

function Blog() {
  return (
    <>
      <div className="w-70%">
        <Carousel />
      </div>

      {/* <article className="h-[500px] px-60  grid grid-cols-3">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="py-2 px-2 mb-2 md:px-4 md:py-4 lg:px-8 lg:py-2 bg-gray-500 mx-4"
          >
            <Link to={`/blog/${encodeURIComponent(blog.title)}`} className="">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto mb-4"
              />
              <p className="text-center text-sm md:text-lg px-4 pt-4">
                {blog.title}
              </p>
            </Link>
          </div>
        ))}
      </article> */}
    </>
  );
}

export default Blog;
