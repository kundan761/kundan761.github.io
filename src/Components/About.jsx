import React from 'react';
import "../Styles/about.css";
import myphoto from "../Images/myphoto.jpg"
import Kundan_Kumar_Suraj_Resume from "../files/Kundan_Kumar_Suraj_Resume.pdf"


const About = ({ref,func}) => {

    const handleDownload = () => {
        window.open("https://drive.google.com/file/d/1cmaKUGsRBkQaRK5Je5vnsjdObD9mEEH8/view?usp=sharing");
        const link = document.createElement('a');
        link.href = Kundan_Kumar_Suraj_Resume;
        link.setAttribute('download', 'Kundan_Kumar_Suraj_Resume.pdf');
        link.setAttribute('id', 'resume-link-2');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <div className='about section' id='about' ref={ref} onScroll={func}>

            <h1 className='about-me'>About <span style={{ color: "#0e4166" }}>Me</span></h1>

            <div className='image-des'>
                <div>
                <img className='home-img' src={myphoto} alt="myimage" />
                </div>
                <div >
                    <p id="user-detail-intro">Results-driven Full Stack Web Developer with expertise in building functional and visually appealing user interfaces using React.js. Proficient in JavaScript and experienced in developing and maintaining web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Collaborative team player with excellent problem-solving skills and a strong command of frontend development tools and practices.</p>
                    <div className="resume-button" id="resume-button-2">
                    <button className="download-button" onClick={handleDownload}>
                        <div className="docs"><svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Resume</div>
                        <div className="download">
                            <svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
                        </div>
                    </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;

// Experienced and enthusiastic web developer with over 1000 hours of coding experience and a strong background in data structures and algorithms (100+ hours). Skilled in front-end and back-end development, utilizing technologies such as ReactJS, Node.js, JavaScript, ExpressJS, and MongoDB. Developed clones of popular websites and successfully collaborated on projects with teams. Highly disciplined, motivated, and a problem solver.