import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useServices = (asc) => {
  const [services, setServices] = useState();
  useEffect(() => {
    axiosSecure(`/services?sort=${asc ? "asc" : "dsc"}`).then((res) =>
      setServices(res.data)
    );
  }, [asc]);

  return services;
};

export default useServices;
