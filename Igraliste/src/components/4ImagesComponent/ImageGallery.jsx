
import PropTypes from "prop-types";



function ImageGallery({ title, images }) {
  return (
 <article className="text-center text-3xl bg-gray-20 border border-red-600">
      <h2 className="font-italic text-lg md:text-xl pt-5 pb-10 xl:py-5">
        {title}
      </h2>

      <div className="flex flex-col md:grid grid-cols-2 lg:flex lg:flex-row xl:flex xl:flex-row xl:justify-center lg:px-10 pb-5 gap-y-5 xl:w-[90%] xl:mx-auto gap-x-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group w-1/1 mx-20 md:mx-10 xl:w-1/4 xl:mx-auto lg  "
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
            <div className="overlay group-hover:opacity-100">
              <span className="overlay-text">{image.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}


ImageGallery.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
