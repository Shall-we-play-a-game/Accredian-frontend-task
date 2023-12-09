const Home = () => {
  return (
    <>
      <div>
        <header className='header'>
          <a href='/' className='logo'>
            Developer
          </a>
          <nav className='nav-items'>
            <a href='/'>Home</a>
            <a href='/login'>Login</a>
            <a href='/register'>Register</a>
          </nav>
        </header>
        <main>
          <div className='intro'>
            <h1>A Web Developer</h1>
            <p>I am a web developer and I love to create websites.</p>
            <a href='https://ibrahimkhan-portfolio.vercel.app'>
              <button>Learn More</button>
            </a>
          </div>
          <div className='achievements'>
            <div className='work'>
              <i className='fas fa-atom'></i>
              <p className='work-heading'>Projects</p>
              <p className='work-text'>
                I have worked on many projects and I am very proud of them. I am
                a very good developer and I am always looking for new projects.
              </p>
            </div>
            <div className='work'>
              <i className='fas fa-skiing'></i>
              <p className='work-heading'>Skills</p>
              <p className='work-text'>
                I have a lot of skills and I am very good at them. I am very
                good at programming and I am always looking for new skills.
              </p>
            </div>
            <div className='work'>
              <i className='fas fa-ethernet'></i>
              <p className='work-heading'>Network</p>
              <p className='work-text'>
                I have a lot of network skills and I am very good at them. I am
                very good at networking and I am always looking for new network
                skills.
              </p>
            </div>
          </div>
          <div className='about-me'>
            <div className='about-me-text'>
              <h2>About Me</h2>
              <p>
                I am a web developer and I love to create websites. I am a very
                good developer and I am always looking for new projects. I am a
                very good developer and I am always looking for new projects.
              </p>
            </div>
            <img
              src='https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
              alt='me'
            />
          </div>
        </main>
        <footer className='footer'>
          <div className='copy'>&copy; 2022 Developer</div>
          <div className='bottom-links'>
            <div className='links'>
              <span>More Info</span>
              <a href='/'>Home</a>
              <a href='/'>About</a>
              <a href='/'>Contact</a>
            </div>
            <div className='links'>
              <span>Social Links</span>
              <a href='/'>
                <i className='fab fa-facebook'></i>
              </a>
              <a href='/'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='/'>
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
