import axios from "axios";
import { BASE_URL } from "const/env";

export const getHotels = () => {
  axios
    .get(`${BASE_URL}/`)
    .then((response) => {
        console.log(response);
    });
};
