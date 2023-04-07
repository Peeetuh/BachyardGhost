import { Container } from "react-bootstrap";

const Music = () => {
    return(
        <section id="youtube-container">
      <Container>
      <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/iAUtSLSXaWU" id="youtube-vid"  title="YouTube video" allowfullscreen></iframe>
      </div>
      </Container>
      </section>
    )
};

export default Music;