import axios from "axios";
import { BASE_URL } from "const/env";

export async function getHotels() {
    let hotel = await axios
    .get(`${BASE_URL}/`)
    .then((response) => {
       return response.data;
    })
    console.log(hotel);
    // .catch((e) => console.error(e));
    return hotel.da;
};
