const TeacherProfile = ({
  profileImgUrl,
  teacherFirstName,
  teacherLastName,
  teacherDegree,
  teacherExperience,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="aspect-w-1 aspect-h-1 w-28">
        <img
          src={
            profileImgUrl === ""
              ? "../../assets/images/dummyAvatar.jpeg"
              : profileImgUrl
          }
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-inter text-sm text-gray-400">
          Docente: {teacherFirstName} {teacherLastName}
        </p>
        <p className="font-inter text-sm text-gray-400">
          Título: {teacherDegree}
        </p>
        <p className="font-inter text-sm text-gray-400">
          Experiencia: {teacherExperience}
        </p>
      </div>
    </div>
  );
};

export default TeacherProfile;
