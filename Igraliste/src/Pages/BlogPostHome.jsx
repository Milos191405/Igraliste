import { Link } from "react-router-dom";
import blogData from "../data/blogData.jsx"; // Make sure the path is correct

function BlogPostHome() {
  // Slice the last 3 items from blogData
  const lastThreeBlogs = blogData.slice(-3);

  return (
    <section className="py-4 bg-gray-200">
      <article className="flex  flex-wrap justify-center bg-gray-200 mx-2    ">
        {lastThreeBlogs.map((blog) => (
          <div key={blog.id} className="w-full sm:w-1/2 md:w-2/3 lg:w-[30%] xl:w-[30%] p-2 bg-white mb-2 mx-2  border border-red-500 ">
            <Link
              to={`/blog/${encodeURIComponent(blog.title)}`}
              className="block"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto mb-4   "
              />
              <p className="text-center text-sm md:text-lg font-style: italic">
                {blog.title}
              </p>
            </Link>
          </div>
        ))}
      </article>
    </section>
  );
}

export default BlogPostHome;
