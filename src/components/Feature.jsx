import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Feature = (props) => {
  return (
    <div className="flex flex-col items-center">
      {props.icon}
      <h2 className="font-inter text-2xl font-bold mt-2 text-white text-center">
        {props.title}
      </h2>
      <p className="font-inter text-md text-white text-center px-10">
        {props.text}
      </p>
    </div>
  );
};

export default Feature;
