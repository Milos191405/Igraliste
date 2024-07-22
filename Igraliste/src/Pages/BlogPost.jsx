import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import blogData from "../data/blogData.jsx";

function BlogPost() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title); // Decode the title from URL
  console.log("Decoded Title:", decodedTitle); // Debug log

  const blog = blogData.find((post) => post.title === decodedTitle);

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{blog.title}</title>
      </Helmet>
      <div className="pt-[100px] mx-auto p-4">
        <img src={blog.image} alt={blog.title} className="w-3/4 h-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4 text-center">{blog.title}</h1>
        <div
          className="text-sm md:text-lg px-4 pt-4"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </>
  );
}

export default BlogPost;
