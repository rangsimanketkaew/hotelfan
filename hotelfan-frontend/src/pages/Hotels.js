import axios from "axios";
import Hotel from "components/Hotel";
import { BASE_URL } from "const/env";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { getHotels } from "utils/server";

const Hotels = ({ carousel, baseHotels }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    if (!!baseHotels) {
      setHotels(baseHotels);
    } else {
      //   axios.get(`${BASE_URL}/`).then((response) => {
      //     setHotels([response.data]);
      //   });
      setHotels(getHotels(10));
    }
  }, [baseHotels]);

  if (!hotels) return;

  if (carousel) {
    return (
      <>
        {hotels.length === 1 ? (
          <Hotel hotel={hotels[0]} />
        ) : (
          <Carousel color="black" indicators="false">
            {hotels.map((hotel) => {
              return (
                <Carousel.Item>
                  <Hotel hotel={hotel} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        )}
      </>
    );
  }

  return (
    <div>
      {hotels.map((hotel) => (
        <Hotel hotel={hotel} className="hotels" />
      ))}
    </div>
  );
};

export default Hotels;
