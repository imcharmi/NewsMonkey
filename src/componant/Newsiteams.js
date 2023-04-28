import Card from "react-bootstrap/Card";

import React from "react";

export default function Newsiteams(props) {
  {
    let { title, desc, img, url } = props;
    return (
      <div>
        <Card style={{ width: "22rem", height: "25rem" }} className="mb-4">
          <Card.Img
            style={{ height: "200px" }}
            variant="top"
            src={
              img
                ? img
                : "https://www.hindustantimes.com/ht-img/img/2023/02/20/1600x900/WhatsApp_Image_2021-09-18_at_094218_1676852219810_1676852219960_1676852219960.jpeg"
            }
          />
          <Card.Body>
            <Card.Title>{title}...</Card.Title>
            <Card.Text>
              {desc ? desc : "this news description is not available"}...
            </Card.Text>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              className="btn btn-primary btn-sm"
            >
              Read more
            </a>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

// export class Newsiteams extends Component {
//   render()
// }

// export default Newsiteams;
