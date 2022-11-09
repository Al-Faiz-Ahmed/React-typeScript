import React from "react";

type PropsTypes = {
  children: React.ReactNode;
};

const Cars = (props: PropsTypes) => {
  let { children } = props;
  return <div>{children}</div>;
};

export default Cars;
