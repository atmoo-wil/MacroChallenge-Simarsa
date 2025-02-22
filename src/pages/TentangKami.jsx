import { Card, Container, Row, Col } from "react-bootstrap";
import Rs from "../assets/images/rs.png";
import logoRs from "../assets/images/logoRs.png";
const TentangKami = () => {
  return (
    <div className="tentangKami">
      <Card className="bg-light text-dark tentang">
        <Card.Img src={Rs} alt="Card image" />
        <Card.ImgOverlay>
          <Container>
            <h1 className="tentang">Tentang Kami</h1>
          </Container>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <Row>
          <Col>
            <img src={logoRs} alt="logo" className="logoRs" />
          </Col>
          <Col>
            <h1>SELAMAT DATANG DI RUMAH SAKIT BUNDA PURWOKERTO</h1>
            <h2>kesehatan adalah hal yang penting</h2>
            <p>
              Rumah Sakit Bunda Purwokerto merupakan Rumah sakit swasta di bawah
              naungan Yayasan Bunda Purwokerto. Di bangun sejak 09 Agustus 1989
              dan beroperasi sebagai Rumah Bersalin pada 14 juni 1990 yang
              diresmikan oleh Bapak Kepala Kandep Kesehatan Banyumas (Bapak dr.
              Koentoro)
            </p>
            <p>
              Seiring berjalannya waktu RB tersebut terus berkembang dengan
              meningkatnya statsu RB tersebut kearah yang lebih besar. Pada
              tanggal 1 September 1991 status Rumah Bersalin “BUNDA” berubah dan
              meningkat menjadi Rumah Sakit Khusus Ibu dan Anak “BUNDA” yang
              operasioanalnya membawahi persalinan.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TentangKami;
