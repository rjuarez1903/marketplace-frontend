const TestimonialCard = (props) => {
  return (
    <div className="glassmorphism">
      <div className="w-40 h-40 relative mx-auto mb-4">
        <img
          src={props.src}
          alt="testimonial pic"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <h3 className="font-satoshi font-semibold text-gray-700 text-center text-xl">
        {props.name}
      </h3>
      <img
        src="../public/assets/images/five_stars.png"
        alt="five stars"
        className="w-20 mx-auto"
      />
      <p className="my-4 font-satoshi text-lg text-center text-gray-700">
        {props.review}
      </p>
    </div>
  );
};

export default TestimonialCard;
