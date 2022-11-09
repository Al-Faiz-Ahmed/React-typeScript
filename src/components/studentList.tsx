type PropsTypes = {
  fullName: {
    firstName: string;
    lastName: string;
  }[];
};

const StudentList = (props: PropsTypes) => {
  return (
    <>
      {props.fullName.map(({ firstName, lastName }) => (
        <div>
          {firstName} + {lastName}
        </div>
      ))}
    </>
  );
};

export default StudentList;
