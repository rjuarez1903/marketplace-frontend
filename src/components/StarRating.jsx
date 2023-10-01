import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const StarRating = ({ rating }) => {
  if (rating === 0) {
    return <p className="text-gray-600">Sin calificaciones</p>;
  }

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const fullStarElements = Array.from({ length: fullStars }, (_, index) => (
    <StarIcon key={index} fontSize="small" />
  ));
  const halfStarElement = hasHalfStar ? (
    <StarHalfIcon fontSize="small" />
  ) : null;
  const emptyStarsCount = hasHalfStar ? 5 - fullStars - 1 : 5 - fullStars;
  const emptyStarElements = Array.from(
    { length: emptyStarsCount },
    (_, index) => <StarOutlineIcon key={index} fontSize="small" />
  );

  return (
    <div>
      {fullStarElements}
      {halfStarElement}
      {emptyStarElements}
    </div>
  );
};

export default StarRating;
