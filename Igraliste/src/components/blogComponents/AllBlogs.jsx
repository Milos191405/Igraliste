import { Link } from "react-router-dom";
import blogData from "../../data/blogData.jsx";

function AllBlogs() {
  // const blogData = blogData.sort((a, b) => b.id - a.id);

  return (
    <>
      <article className=" w-[80%] pt-4 h-full mx-auto lg:grid grid-cols-3 gap-5   ">
        {blogData
          .sort((a, b) => b.id - a.id)
          .slice(1)
          .map((blog) => (
            <div
              key={blog.id}
              className="w-full py-2  px-2 mb-2 md:px-4 md:py-4 lg:px-8 lg:py-2 mx-auto  "
            >
              <Link to={`/blog/${encodeURIComponent(blog.title)}`} className="">
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
    </>
  );
}

export default AllBlogs;
