import { Link } from "react-router-dom";
import blogData from "../data/blogData.jsx"; // Make sure the path is correct

function BlogPostHome() {
  // Slice the last 3 items from blogData
  const lastThreeBlogs = blogData.slice(-3);

  return (
    <section className="py-4">
      <h2 className="text-2xl font-bold mb-4">Recent Blog Posts</h2>
      <article className="flex flex-wrap justify-center">
        {lastThreeBlogs.map((blog) => (
          <div
            key={blog.id}
            className="w-full sm:w-1/2 lg:w-1/3 p-2"
          >
            <Link to={`/blog/${encodeURIComponent(blog.title)}`} className="block">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto mb-4"
              />
              <p className="text-center text-sm md:text-lg font-semibold">
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
