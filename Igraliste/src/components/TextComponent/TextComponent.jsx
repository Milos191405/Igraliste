import PropTypes from 'prop-types'

function TextComponent({leftImage, rightImage, text}) {
return (
  <article className="flex flex-col md:flex-row px-2 w-full bg-white ">
    {/* Left Image */}
    <img
      src={leftImage}
      alt="Left visual representation"
      className="w-1/2 md:w-1/5 xl:w-[30%] my-auto mx-auto md:px-2 xl:mx-auto"
    />

    {/* Text Content */}
    <div className="text-center text-sm md:text-lg italic px-4 md:px-8 md:py-4 xl:px-4 tracking-widest leading-relaxed">
      {text.map((paragraph, index) => (
        <p className="mb-4" key={index}>
          {paragraph}
        </p>
      ))}
    </div>

    {/* Right Image */}
    <img
      src={rightImage}
      alt="Right visual representation"
      className="w-1/2 md:w-1/5 xl:w-[30%] my-auto mx-auto md:px-2 xl:mx-auto"
    />
  </article>
);
}
TextComponent.propTypes = {
  leftImage: PropTypes.string.isRequired,
  rightImage: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TextComponent