
import { Link } from "react-router-dom";
import Carousel from "../components/CarouselHome/Carousel.jsx";
import blogData from "../data/blogData.jsx"; // Ensure this import is correct

function Blog() {
  return (
    <>
      <Carousel />
      <article className=" h-[500px] flex">
        {blogData.map((blog) => (
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
      <article>
        nisi
        aperiam ipsam nemo! Sequi iste aspernatur velit pariatur quia magnam,
        illum asperiores deserunt illo quam odit maiores voluptates. Laboriosam
        ratione natus temporibus! Facere non consequatur atque quae minus
        impedit architecto est obcaecati itaque ab, amet eligendi porro
        excepturi explicabo, ratione magni cumque, repudiandae sequi earum
        adipisci in quos corrupti natus voluptatum. Nesciunt consequuntur facere
        cum dolorem accusamus, perspiciatis laboriosam mollitia at iusto, minus
        sequi laudantium in, fugiat laborum unde debitis qui earum accusantium
        
  
      </article>
    </>
  );
}

export default Blog;
