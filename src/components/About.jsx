import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function About() {
  return (
    <section class="social-section" id="socials">
      <h2 class="section-title"></h2>
      <div class="social-links">
        <a href="mailto:raunak192209@gmail.com" class="social-icon email" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/raunak-tiwari-247b181a1/" target="_blank" class="social-icon linkedin" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/19Raunak" target="_blank" class="social-icon github" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/RaunakT19" target="_blank" class="social-icon twitter" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </section>
  );
}
