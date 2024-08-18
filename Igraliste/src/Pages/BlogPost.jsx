import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import blogData from "../data/blogData.jsx";

function BlogPost() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title); 
  console.log("Decoded Title:", decodedTitle); 
  const blog = blogData.find((blog) => blog.title === decodedTitle);
    

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

 
  return (
    <>
      <Helmet>
        <title>{blog.title}</title>
      </Helmet>
      <div className="mt-[110px] mx-auto p-4 w-3/4  bg-white">
        <img src={blog.image} alt={blog.title} className="w-full h-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4 text-center ">{blog.title}</h1>
        <div
          className=" text-sm md:text-lg px-4 style italic text-center tracking-wide  "
          dangerouslySetInnerHTML={{ __html: blog.content }}
         
        />
        <p></p>
      </div>
    </>
  );
}

export default BlogPost;
