import { memo, useEffect, useState } from "react";
import { Button, Card, Carousel, Spinner } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "const/env";
import { getPlainText } from "utils/helpers";
import { AiFillStar } from 'react-icons/ai';

const Stars = ({officialRating}) => {
  const number = getPlainText(officialRating).length;
  let stars = [];
  for(let i = 0; i < number; i++) {
    stars = [...stars, <AiFillStar size={20} color="orange" />]
  }
  return stars.map((star) => star);
}

const Hotel = () => {
  const [hotel, setHotel] = useState();

  useEffect(() => {
    axios.get(`${BASE_URL}/`).then((response) => {
      setHotel(response.data);
    });
  }, []);

  if (!hotel) {
    return <Spinner animation="border" />;
  }

  return (
    <>
      <Card>
        <Card.Img variant="top" as="div">
          <Carousel>
            {hotel.images.map((data) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={data.url}
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Card.Img>
        <Card.Body>
          <Card.Title>
            {hotel.name} <Stars officialRating={hotel.textInfo.officialRating} />
          </Card.Title>
          <Card.Text>
            {getPlainText(hotel.textInfo.situation)}
          </Card.Text>
          <Button variant="danger">Book it now</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default memo(Hotel);
