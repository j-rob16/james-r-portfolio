import useMediaQuery from '../hooks/useMediaQuery';

const Home = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id='home'
      className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'
    >
      {/* IMAGE SECTION */}
      <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
        {isAboveMediumScreens ? (
        <div>
          <img 
            alt='profile picture'
            src='assets/james-profile.jpeg'
            className='max-w-[400px] md:max-w-[600px] rounded-2xl
                        hover:filter hover:saturate-150 transition duration-500'
          />
        </div>

        ) : (
          <div>
            <img 
              alt='profile'
              src='assets/james-profile.jpeg'
              className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                max-w-[400px] md:max-w-[600px] rounded-xl'
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;