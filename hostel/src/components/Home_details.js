import Slide1 from "../image/front gate.jpeg";
import Slide2 from "../image/hostel office.jpeg";
import Slide3 from "../image/hostel area.jpeg";
import Slide4 from "../image/canteen area.jpeg";
import Slide5 from "../image/new hostel.jpeg";
import Slide6 from "../image/new hostel loby.jpeg";
import Slide7 from "../image/new hostel stairs.jpeg";

import { useState } from 'react';
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


function Home_details() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
   <Container>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img className="d-block w-100" src={Slide1} alt="First slide" style={{ maxHeight: '600px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h2 className="bg-secondary">Front Gate</h2>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={Slide2} alt="First slide" style={{ maxHeight: '750px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h2 className="bg-secondary">Girls Hostel Office</h2>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={Slide3} alt="First slide" style={{ maxHeight: '600px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h2 className="bg-secondary">Hostel Area</h2>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={Slide4} alt="First slide" style={{ maxHeight: '500px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h2 className="bg-secondary">Canteen Area</h2>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={Slide5} alt="First slide" style={{ maxHeight: '600px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h2 className="bg-secondary">New Hostel</h2>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={Slide6} alt="First slide" style={{ maxHeight: '600px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h3 className="bg-secondary">New hostel loby</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={Slide7} alt="First slide" style={{ maxHeight: '600px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h3 className="bg-secondary">New Hostel Stairs</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Home_details;
