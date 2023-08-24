
import "./styles.css";
import myImage from "./img/myImage.jpg";

function App() {
    return (
      <div>
      <div className="container">
        <div className="left_side">
            <div className="profileText">
                <div className="imgbx">
                    <img src="myImage.jpg" alt=""/>
                </div>
                <h2>Mohammad Asif<span>Web Develpor</span></h2>
            </div>

            <div className="contactInfo">
                <h3 className="title">ContactInfo</h3>
                <ul>
                    <li>
                        <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                        <span className="text"><a href="https://wa.me/03462141072"> 03462141072-03040692974</a></span>
                    </li>
                    <li>
                        <span className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                        <span className="text"><a href="https://mail.google.com/mail/u/0/#inbox"> asifmajeed1072@gmail.com</a></span>
                    </li> 
                    <li>
                        <span className="icon"><i className="fa fa-github" aria-hidden="true"></i></span>
                        <span className="text"><a href="https://github.com/Asif101285"> https://github.com/Asif101285</a></span>
                    </li>
                     <li>
                        <span className="icon"><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                        <span className="text"><a href="https://www.linkedin.com/feed/"> www.linkedin.com/in/mohammad-asif-087874263</a></span>
                    </li>
                    <li>
                        <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                        <span className="text"><a href="https://www.google.com/maps/@24.8985137,67.0370655,17z?entry=ttu"> Mohammadabad hassan colony Liaqaabad,Karachi,Pakistan</a></span>
                    </li>
                </ul>
            </div>

            <div className="contactInfo education">
                <h3 className="title">Education</h3>
                <ul>
                    <li>
                      <h5>2009 - 2010</h5>
                      <h4>Intermadiat commerce</h4>
                      <h4>Private</h4>
                    </li>
                    <li>
                        <h5>2005 - 2006</h5>
                        <h4>Matriculation</h4>
                        <h4>major zia uddin secondry school nazimzabad no 2 karachi.</h4>
                      </li>
                </ul>
            </div>
            <div className="contactInfo language">
                <h3 className="title">Languages</h3>
                <ul>
                    <li>
                        <span className="text">English</span>
                        <span className="percent">
                            <div style="width: 50%;"></div>
                        </span>
                    </li>
                    <li>
                        <span className="text">Urdu</span>
                        <span className="percent">
                            <div style="width: 90%;"></div>
                        </span>
                    </li> 
                    <li>
                        <span className="text">Punjabi</span>
                        <span className="percent">
                            <div style="width: 70%;"></div>
                        </span>
                    </li>
                </ul>
            </div>


        </div>
        
        


        <div className="right_side">
            <div className="about">
                <h2 className="title2">Profile</h2>
                <p>Passionate MERN Stack Developer with a knack for creating smooth web experiences. Turning ideas into practical solutions with creative coding and an eye for good design. Excited to use my MongoDB,
                     Express, React, and Node.js skills to build dynamic apps that make a lasting impact.
                    Developer who has passion for web and app technologies. always ready to learn new technologies and to work on them.
                     my first priority is to give my best in terms of what i have and indulge you at every level.</p>
            </div>

            <div className="about skills">
                <h2 className="title2">Profasssional skills</h2>
                <div className="box">
                    <h4>Html</h4>
                    <div className="percent">
                        <div style="width: 90%;"></div>
                    </div>
                </div>
                <div className="box">
                    <h4>Css</h4>
                    <div className="percent">
                        <div style="width: 75%;"></div>
                    </div>
                </div><div className="box">
                    <h4>Javascrip</h4>
                    <div className="percent">
                        <div style="width: 70%;"></div>
                    </div>
                </div><div className="box">
                    <h4>React js</h4>
                    <div className="percent">
                        <div style="width: 20%;"></div>
                    </div>
                </div><div className="box">
                    <h4>Node js</h4>
                    <div className="percent">
                        <div style="width: 40%;"></div>
                    </div>
                </div>
                <div className="box">
                    <h4>Express js</h4>
                    <div className="percent">
                        <div style="width: 50%;"></div>
                    </div>
                </div>
                <div className="box">
                    <h4>MongoDB</h4>
                    <div className="percent">
                        <div style="width: 40%;"></div>
                    </div>
                </div>
                <div className="box">
                    <h4>Firebase</h4>
                    <div className="percent">
                        <div style="width: 30%;"></div>
                    </div>
                </div>
                


            </div>


            <div className="about">
                <h2 className="title2">Experience</h2>
                <div className="box">
                    <div className="year_company">
                        <h5>Not yet</h5>
                    </div>
                    <div className="text">
                        <h4></h4>
                    </div>
                </div>
            </div>
            <div className="about interest">
                <h2 className="title2">Interest</h2>
                <ul>
                    <li><i className="fa fa-graduation-cap" aria-hidden="true"></i>Learning</li>
                    <li><i className="fa fa-gamepad" aria-hidden="true"></i>Gaming</li>
                    <li><i className="fa fa-laptop" aria-hidden="true"></i>IT Technology</li>
                    <li><i className="fa fa-plane" aria-hidden="true"></i>Travelling</li>
                </ul>
            </div>
            <div className="about project">
                <h2 className="title2">Project</h2>
                <ul>
                    <li>Wheater App</li>
                    <li>Bmi Calculator</li>
                    <li>Grad Cheaking App</li>
                    <li>Jwt Auth Server</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;