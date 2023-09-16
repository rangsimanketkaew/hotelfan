import axios from "axios";
import Hotel from "components/Hotel";
import { BASE_URL } from "const/env";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const Hotels = ({ carousel }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/`).then((response) => {
      setHotels([response.data]);
    });
  }, []);

  if (carousel) {
    return (
      <>
        <Carousel color="black">
          {hotels.map((hotel) => (
            <Hotel hotel={hotel} />
          ))}
        </Carousel>
      </>
    );
  }

  return (
    <>
      {hotels.map((hotel) => (
        <Hotel hotel={hotel} />
      ))}
    </>
  );
};

export default Hotels;
