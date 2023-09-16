import { memo } from "react";
import { Card, Carousel, ProgressBar } from "react-bootstrap";
import { getPlainText } from "utils/helpers";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const Stars = ({ officialRating }) => {
  const number = getPlainText(officialRating).length;
  let stars = [];
  for (let i = 0; i < number; i++) {
    stars = [...stars, <AiFillStar size={20} color="orange" />];
  }
  return stars.map((star) => star);
};

const Hotel = ({hotel}) => {
  // const [hotel, setHotel] = useState({});

  // useEffect(() => {
  //   axios.get(`${BASE_URL}/`).then((response) => {
  //     setHotel(response.data);
  //   });
  // }, []);

  if (!hotel) return;

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
            {hotel.name}
            <span className="align-right">
              <Stars officialRating={hotel.textInfo.officialRating} />
            </span>
          </Card.Title>
          <Card.Text>
            <div className="co2-status-bar">
              Erstellt einen CO2 Fussabdruck von {60}
              <ProgressBar
                now={60}
                label={`${60}%`}
                variant="danger"
                max={100}
                visuallyHidden
              />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: hotel.textInfo.situation }}
            />
          </Card.Text>
          <div className="hotel-link">
            p.P./ ab <span>CHF {557}.-</span>
            <IoIosArrowForward size={30} className="arrow-icon"/>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default memo(Hotel);
