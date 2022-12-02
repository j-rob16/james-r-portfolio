const SocialMediaIcons = ({width}) => {
  return (
    <div className={`flex justify-center my-10 gap-7 ${width}`}>
      <a
        className='hover:opacity-50 transition duration-500'
        href = 'https://www.github.com/j-rob16'
        target='_blank'
        rel="noreferrer"
      >
        <img 
          alt='github-link'
          src='../assets/github-light.png'
          className='max-h-[60px]'
        />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/016-james-robbins'
        target='_blank'
        rel="noreferrer"
      >
        <img 
          alt='linkedin-link'
          src='../assets/linkedin-light.png'
          className='max-h-[60px]'
        />
      </a>

      <a
        className="hover:opacity-50 transition duration-500 max-h-[100px]"
        href='https://www.instagram.com/jimm3r1sh/'
        target='_blank'
        rel="noreferrer"
      >
        <img 
          alt='instagram-link'
          src='../assets/instagram-light.png'
          className='max-h-[60px]'
        />
      </a>

    </div>
  );
};

export default SocialMediaIcons;