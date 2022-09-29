// Importing icons
import cellPhone from "../../assets/cellphone.svg";
import email from "../../assets/email.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

// Importing Contact page style sheet
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>CONTACT</h2>
      <p>
        If you like what you see, please contact me through the contact list
        below
      </p>

      <section>
        <a href="tel:813-270-2446">
          <img src={cellPhone} alt="phone" />
        </a>
        <a href="mailto:mohammedsmahmood88@live.com">
          <img src={email} alt="email" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammed-mahmood-a92258235/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://github.com/Mohammed-S-M"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github" />
        </a>
      </section>
    </div>
  );
};

export default Contact;
