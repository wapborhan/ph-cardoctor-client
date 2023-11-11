import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:3300",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  // console.log(logOut);

  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        console.log("logout");
        logOut()
          .then(() => {
            navigate("/signin");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
