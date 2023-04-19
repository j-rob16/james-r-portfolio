import projects from '../projects';
import ProjectCard from '../components/ProjectCard';
import languageSet from '../languageSet';

const Projects = ({ language, darkMode }) => {

  return (
    <section 
      id='projects'
      className={`mt-48 ${darkMode ? 'dark' : 'light'}`}
    > 
    <h4 className={`${languageSet[language].font} text-redHighlight text-center text-4xl`}>{languageSet[language].projects}</h4>
    <p className={`${languageSet[language].font} text-center mt-4`}>{languageSet[language].projectsSubtitle}</p>

    <div className='w-full p-5 md:p-0'>
      {projects.map((project, index) => (
          <ProjectCard
            {...project}
            key={`project-${index}`}
            index={index}
            language={language}
          />
      ))}
    </div>
    </section>
  );
};

export default Projects;