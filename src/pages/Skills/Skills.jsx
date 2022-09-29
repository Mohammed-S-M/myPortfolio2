// Importing skills icons
import HTML from "../../assets/Icon1.svg";
import CSS from "../../assets/Icon2.svg";
import JS from "../../assets/Icon3.svg";
import SQL from "../../assets/Icon4.svg";
import Csharp from "../../assets/Icon5.svg";
import ReactJS from "../../assets/Icon6.svg";
import NET from "../../assets/Icon9.svg";
import Bootstrap from "../../assets/Icon7.svg";
import Git from "../../assets/Icon8.svg";
import Close from "../../assets/close.svg";

// Importing Skills page styling sheet
import "./Skills.css";

// Importing React hooks
import { useState } from "react";

const Skills = () => {
  const [showModel, setShowModel] = useState(false);
  const [sourceURL, setSourceURL] = useState("");
  const [title, setTitle] = useState("");
  const [section, setSection] = useState("");

  const html5 =
    "HTML is the skeleton of the webpage. " +
    "HTML is a markup language to mark text, images, links and many more useful elements. " +
    "I always use sementic elements which will have meaning to the tags name. " +
    "I write organized clean HTML elements and make sure my markups are screen reader friendly. " +
    "With the developement of webapps and the increase use of a single page webapps, most developers " +
    "do not write directly into the HTML pages anymore. I use HTML inside the JS file like JSX which stands for " +
    "JavaScript and XML. However HTML is still the fundemental language of any webpage.";

  const css3 =
    "CSS is the cascading style sheet of the webpage. CSS is the art behind any webapp. " +
    "I love CSS and always eager to learn more about CSS tricks, animations, and designs. " +
    "I write orginzed, structured, well designed CSS codes. I thrive to make web pages to look smooth, beautiful, " +
    "and modern. I'm also capable of writing responsive webpages mobile first. It is fundemental to make your " +
    "webapp responsive to all devices from mobile, tablet, to PC.";

  const javaScript =
    "JavaScript is the most famous and the most used programming language in the world. " +
    "JavaScript has became the fundemental programming language of the web. This amazing programming language " +
    "keep improving and adding new methods for developers to build many form of applications. JavaScript is not " +
    "only for the web, we can build mobile and gaming application using this powerfull language. " +
    "There are many frameworks and libraries have been build on JS platform, from front-end to back-end development. " +
    "I love JS and love to use it to build webapps. I'm capable of writing functional programming and object oriented " +
    "programming (OOP) using JavaScript and I love both way of writing codes.";

  const sqlDB =
    "SQL stands for structured query language. SQL is the most famous language to write and build database. " +
    "SQL is what we call relational database. Relational database is the database that uses tables which store data into " +
    "rows and columns. SQL was build in the 1970's, however is still the most powerful tool to create database and " +
    "extract data from a database. I have the knowledge of the fundemental and the advanced code to create and use databases. " +
    "I learn SQL using PostgreSQL, one of the most powerful and most famous SQL relational database system.";

  const CS =
    "C# or C sharp is an object oriented programming language was build in 2000 by Microsoft. C# is one of the languages " +
    "that work on .NET platform and provide developers endless possibilities to build applications for web, mobile, gaming, " +
    "desktop and many more. C# is a language that specialize in the OOP programming, from classes, inheritence, interfaces, " +
    "methods, properties, and many other powerful tools that help developers build well organized code. In the web world " +
    "C# is a famous language used to build backend databases together with SQL and .NET platform. I'm very happy that I chose " +
    "To learn this powerful language. It bring me closer to learn lower level languages like C, C++, and Java.";

  const React =
    "React.js is the most famous and most used JavaScript library to build web application. React help us build single page web " +
    "applications. React is build and developed to help developers build fast and modern web apps. The old way to build web apps " +
    "was to build HTML file for each page on the website, and for each HTML page there is a DOM. This caused the websites to be " +
    "slow and low in performance. Thanks to React and other JS framework/library now we need only one HTML file to build multi page " +
    "websites. There are two ways to write react applications, one using OOP and the other using so called Hooks. " +
    "I fall in love with React hooks. I use it all the time when I build web apps.";

  const netPlatform =
    ".NET is a cross platform was build by microsoft. The languages developers use to build application using .NET are C#, F#, and VB. " +
    ".NET platform brings many frameworks and libraries all in one place for developers to build applications from desktop, " +
    "mobile, web, to gaming. Using .NET developers can build applications on different operating system like Windows, MacOS, Linux, Android " +
    "and many more. Microsoft have developed Visual Studio IDE for developers to write and use the .NET platform. I've enjoyed learning " +
    ".NET and its library. From generic and non-generic collections, interfaces, Threads, IO, to LINQ all these are powerful tools that we can " +
    "use to build applications or databases.";

  const bootStrapFramework =
    "Bootstrap is the most famous CSS framework out there. It is easy to learn and easy to use. Bootstrap hold a huge library " +
    "like layouts, grid system, navigation bar, components and many more to help us build beautiful, modern, and responsive websites. " +
    "Bootstrap documentation is the easiest documentation to read and learn from directely. I love using bootstrap makes my life easier " +
    "and saving me time to style and help me with responsive design.";

  const gitVersionControl =
    "Git is the most famous and the most used version control. With Git we can construct how our project will be organized and to manage our code. " +
    "Build repositories, organize directories, and navigate through them. We can create side branches for multiple developers who are working on " +
    "the same thing. Before I learned Git commands, I learned the basic command lines to help me navigate through the repo or build " +
    "directories and files. I use git all the time, checking the log, add files to the stage after editing, commit them and push them to GitHub.";

  const handleClick = (e) => {
    setShowModel(true);
    setSourceURL(e.target.src);
    setTitle(e.target.alt);
    if (e.target.alt === "HTML") {
      setSection(html5);
    } else if (e.target.alt === "CSS") {
      setSection(css3);
    } else if (e.target.alt === "JavaScript") {
      setSection(javaScript);
    } else if (e.target.alt === "SQL") {
      setSection(sqlDB);
    } else if (e.target.alt === "C sharp") {
      setSection(CS);
    } else if (e.target.alt === "React.js") {
      setSection(React);
    } else if (e.target.alt === ".NET") {
      setSection(netPlatform);
    } else if (e.target.alt === "Bootstrap") {
      setSection(bootStrapFramework);
    } else if (e.target.alt === "Git") {
      setSection(gitVersionControl);
    }
  };

  const handleClose = () => {
    setShowModel(false);
  };

  return (
    <div className="skills-page">
      {showModel && (
        <div className="over-shadow">
          <div className="model">
            <img
              onClick={handleClose}
              className="close"
              src={Close}
              alt="close"
            />
            <img src={sourceURL} alt="model" />
            <h3>{title}</h3>
            <p>{section}</p>
          </div>
        </div>
      )}

      <h2>SKILLS</h2>
      <p>Click on the icons for more information</p>
      <section>
        <h3>Languages:</h3>
        <img onClick={handleClick} src={HTML} alt="HTML" />
        <img onClick={handleClick} src={CSS} alt="CSS" />
        <img onClick={handleClick} src={JS} alt="JavaScript" />
        <img onClick={handleClick} src={SQL} alt="SQL" />
        <img onClick={handleClick} src={Csharp} alt="C sharp" />
      </section>
      <br />
      <section>
        <h3>Libraries/Frameworks:</h3>
        <img onClick={handleClick} src={ReactJS} alt="React.js" />
        <img onClick={handleClick} src={NET} alt=".NET" />
        <img onClick={handleClick} src={Bootstrap} alt="Bootstrap" />
      </section>
      <br />
      <section>
        <h3>Version Control:</h3>
        <img onClick={handleClick} src={Git} alt="Git" />
      </section>
    </div>
  );
};

export default Skills;
