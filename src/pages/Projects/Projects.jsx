// Importing Projects page styling sheet
import "./Porjects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <h2>PROJECTS</h2>

      <section>
        <h3>World of Countries</h3>
        <article>
          World of Countries is my first project after I build my portfolio
          website. I was inspired to build this project to make a quick and easy
          access for those who wants to have some information about any country
          in the world. I made a search engine where the user going to enter a
          country name and will get some of the most important information about
          the country that been searched.
          <br />
          <br />I used HTML, CSS, JS, and React.js to build this project. The
          main platform was used to build this web app was React.js. There was
          no need to build a backend database, as the database I used was from
          an online API. I also created a quiz for fun, to test the knowledge of
          the user about countries flags. Three states where build in this
          project. A state of an error in case the user encountered an error, a
          state of pending in case the online server is still loading, and the
          last state when the user recieve the data so we can export it to the
          page model.
          <br />
          <br />
          <p>
            URL:
            <a
              href="https://worldofcountries.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              worldofcountries.netlify.app
            </a>
          </p>
        </article>
      </section>
    </div>
  );
};

export default Projects;
