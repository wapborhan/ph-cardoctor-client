import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const checkOut = useLoaderData();
  const { title } = checkOut;
  console.log(checkOut);
  return (
    <div>
      CheckOut : {title}
      <h2></h2>
    </div>
  );
};

export default CheckOut;
