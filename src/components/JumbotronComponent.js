import React from "react";
import { Jumbotron, Container } from "reactstrap";

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">Siaga COVID-19</h1>
          <p className="lead">
            Pemerintah Desa Ngasinan Kecamatan Jetis Kabupaten Ponorogo
          </p>
          <hr className="my-2" />
          <p>
            Program pendataan warga desa dari luar daerah, dalam penanganan COVID-19
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
