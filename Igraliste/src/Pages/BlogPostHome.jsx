import { Link } from "react-router-dom";
import blogData from "../data/blogData.jsx";

function BlogList() {
  // Slice the last 3 items from blogData
  const lastThreeBlogs = blogData.slice(-3);

  return (
    <article className="h-[500px] flex">
      {lastThreeBlogs.map((blog) => (
        <div
          key={blog.id}
          className="py-2 px-2 mb-2 md:px-4 md:py-4 lg:px-8 lg:py-2 bg-gray-500 mx-4"
        >
          <Link to={`/blog/${blog.id}`} className="">
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
    </article>
  );
}

export default BlogList;
