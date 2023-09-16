import Hotels from "pages/Hotels";
import { memo } from "react";
import { Accordion, Button, Form, InputGroup } from "react-bootstrap";
import useSetTitle from "utils/hooks/useSetTitle";
import { BiWorld } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlineKingBed } from "react-icons/md";

const Explore = () => {
  useSetTitle("Explore");

  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Filter</Accordion.Header>
          <Accordion.Body>
            <div>
              <div>
                Reiseziel
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <BiWorld />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="z.B. Zypern oder Badeferien"
                    aria-label="Reiseziel"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <div>
                Reisezeitraum und Dauer
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <AiOutlineCalendar />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Reisezeitraum und Dauer"
                    aria-label="Reisezeitraum und Dauer"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <div>
                Zimmer und Reisende
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <MdOutlineKingBed />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="1 Zimmer, 2 Erwachsene"
                    aria-label="Zimmer und Reisende"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <Button variant="danger">Suchen</Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Hotels />
    </>
  );
};

export default memo(Explore);
