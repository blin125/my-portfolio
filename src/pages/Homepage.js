import Navbar from '../components/Navbar'
import ContactLinks from '../components/ContactLink'
import '../styles/AboutMeStyle.css';
import '../styles/ProjectStyle.css';
import '../styles/ContactStyle.css';
import profile from '../images/Profile.png';
import capstone from '../images/MarkerMatchLogo.png';
import portfolio from '../images/MyPortfolio.png';
import questionMark from '../images/QuestionMark.png';
import { SiFirebase } from "react-icons/si";
import CardComponent from '../components/Card';
import { useEffect, useState } from 'react';
import {FaAws, FaReact} from 'react-icons/fa'
import { TbBrandJavascript } from "react-icons/tb";


function Home(){
    const [introText, setIntroText] = useState('');
    const [activeSection, setActiveSection] = useState('about-section');
    const linkedinURL = 'https://www.linkedin.com/in/bruno-lino-2a03501b8/';
    const emailURL = 'brunolino00@hotmail.com';
    const gitHubtURL = 'https://github.com/blin125';
    const capstoneURL = 'https://github.com/blin125/capstone';
    const myPortfolioURL = 'https://github.com/blin125/my-portfolio'
    const stack = [
        { id: "aws", src: FaAws, alt: "AWS Logo" },
        { id: "js", src: TbBrandJavascript, alt: "JavaScript Logo" },
        { id: "react", src: FaReact, alt: "React Logo" },
        { id: "firebase", src: SiFirebase, alt: "React Logo" },
    ];
    useEffect(() => {
        const type = (text, ind) =>{
            if(ind <= text.length){
                setIntroText(text.slice(0,ind));
                setTimeout(() => type(text, ind + 1), 80);
            }
        };
        type("Kia ora, I'm Bruno Lino!", 0)
    }, []);
    const handleSectionIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log('Entering section:', entry.target.id);
                setActiveSection(entry.target.id);
            }
        });
    };

    useEffect(() => {
        const sectionElements = document.querySelectorAll('.section');
        const container = document.getElementById('sectionId');
    
        const observer = new IntersectionObserver(handleSectionIntersection, {
            root: container,
            threshold: 0.5,
        });
    
        sectionElements.forEach((section) => {
            observer.observe(section);
        });
    
        return () => {
            observer.disconnect();
        };
    }, []);
    
    
    const scrollToSection = (sectionId) => {
        const scrollToSection = document.getElementById(sectionId); 
        const offset = scrollToSection.offsetTop - 80;
        if (scrollToSection) {
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
        }
        setActiveSection(sectionId);
    };

    return (
        <>
            <Navbar scrollToSection={scrollToSection} activeSection={activeSection}/>
            <div className='container'>
                <div className='profile'>
                    <img className="profile-img" src={profile} alt="Bruno's profile" />
                    <h2> {introText} </h2>
                    <div className='socials'>
                        <ContactLinks
                            gitHubtURL={gitHubtURL}
                            emailURL={emailURL}
                            linkedinURL={linkedinURL}
                        />
                    </div>
                </div>
                <div className='page-container'>
                    <div id="about-section" className="section about-me">
                        <h2>About Me</h2>
                        <p>
                            I am a recent Computer Science graduate from the University of Auckland. My education equipped me with a strong 
                            foundation in programming and software development. During the summer of 2022 I interned at Vista, where I honed my skills as a Software 
                            Services Intern, focusing on troubleshooting and developing a web application to boost workspace productivity.
                            <br/><br/> Beyond the tech world, I find joy in Brazilian Jiu-Jitsu, embracing the challenges both physically and mentally. 
                            You'll often catch me at the gym, pushing my limits for a healthy lifestyle. 
                            Additionally, I'm a TV show and movies enthusiast, specially if the topic is about Zombies.
                        </p>
                    </div>
                    <div className='line'>
                        <span></span>
                    </div>
                    <div id="projects-section" className='section projects'>
                        <h2>Projects</h2>
                        <div className='projects-cards'>
                            <CardComponent
                                title="Capstone"
                                imageSrc={capstone}
                                description= {"MarkerMatch is a web application designed to streamline the process of gathering markers " +
                                    "for the computer science department at the University of AucklandIt unites students, " +
                                    "course coordinators, and marker coordinators into one platform." + 
                                    " Students can see a catalog of courses that they can apply to become markers for. Course coordinators can " + 
                                    " edit the course requirements (of courses they are responsible for); marker coordinators have no restrictions. " + 
                                    " They can see each application as well as be able to add, remove, and edit each course in the system."}
                                githubLink="https://github.com/your-username/your-repo"
                                stack={stack}
                                projLink = {capstoneURL}
                            />
                            <CardComponent
                                title="My Portfolio"
                                imageSrc={portfolio}
                                description= {"My Portfolio is a dynamic one-page website to showcase my most recent projects to potential employers. " +
                                    " It currently contains three main tabs: About Me, Projects, and Contact. About Me section is a little section about "+
                                    " myself. Projects were divided into cards, where each card was a project I wanted to showcase, and Contact was for contacting me." +
                                    " Once the projects list grows, I will look into incorporating a pagination method and perhaps a search function for a better user experience. "}
                                githubLink="https://github.com/your-username/your-repo"
                                stack={stack.slice(1,3)}
                                projLink={myPortfolioURL}
                            />
                            <CardComponent
                                title="To Be Announced"
                                imageSrc={questionMark}
                                description= {"It is in the works, stay tuned!"}
                                githubLink="https://github.com/your-username/your-repo"
                                stack={[]}
                            />
                        </div>
                    </div>
                    <div className='line'>
                        <span></span>
                    </div>
                    <div id="contact-section" className='section contact'>
                        <div className='socials'>
                            <ContactLinks
                                gitHubtURL={gitHubtURL}
                                linkedinURL={linkedinURL}
                                emailURL={emailURL}
                            />
                        </div>              
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;