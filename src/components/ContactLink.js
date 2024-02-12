import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const ContactLinks = ({linkedinURL, emailURL, gitHubtURL}) => {

    return(
        <>
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href={`mailto:${emailURL}`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href={gitHubtURL} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </>
    );
};

export default ContactLinks;