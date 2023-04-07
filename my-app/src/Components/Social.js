import ig from "../Pictures/ig.png";
import tiktok from "../Pictures/tiktok.png";
import spotify from "../Pictures/spotify.png";
import "./Social.css";

const Social = () => {
    return(
        <section id="socials-lol">
            <a href="https://www.instagram.com/bachyardghost/?hl=en"><img className="social" src={ig} alt="instagram-logo" /></a>
            <a href="https://open.spotify.com/artist/6lUIj87Yum6daz5pdBeEYq"><img className="social" src={spotify} alt="spotify-logo" /></a>
            <a href="https://www.tiktok.com/@bachyardghost?lang=en"><img className="social" src={tiktok} alt="tiktok-logo" /></a>
        </section>
    )
};

export default Social;