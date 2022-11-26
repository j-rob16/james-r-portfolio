const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center my-10 gap-7 w-3/5'>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.github.com'
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
        href='https://www.linkedin.com'
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
        href='https://www.instagram.com'
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