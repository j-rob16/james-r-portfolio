import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import Tilt from "react-parallax-tilt";
import { github } from '../assets';
import { fadeIn } from '../utils/motion';


const ProjectCard = ({ description, image, index, font, tags, title, source_code_link, language }) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const projectBackground = title['english'].split(" ").join("-").toLowerCase();
  const overlayStyles = `absolute h-full w-full opacity-100 overflow-none
                         sm:bg-gradient-to-r from-transparent to-black z-[30] flex flex-col justify-center items-end p-16 overflow-none`

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* IMAGE */}
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={title}
            className='w-full h-full object-cover rounded-2xl'
          />
          {/* GITHUB LOGO */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
              onClick={() => window.open(source_code_link, "blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        {/* NAME & DESCRIPTION */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>
            {title}
          </h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {description}
          </p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;