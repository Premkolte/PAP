const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-5 w-full md:flex md:items-center md:justify-between">
        <p className=" text-gray-600 md:text-start text-center">
        Copyright &copy; {year} AnimateHub. All rights reserved.
        </p>
        <div className="flex flex-col items-center">
        {/* added social media links */}
        <div className="flex space-x-4 md:text-2xl text-xl mb-15">

          <a href="https://www.instagram.com/kolte_prem_26/" target="_blank" className="text-pink-500 hover:text-pink-700" aria-label="instagram" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/in/prem-kolte/" target="_blank" className="text-blue-700 hover:text-blue-900" aria-label="instagram" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
          </a>

          <a href="https://x.com/PremKolte26?mx=2" target="_blank" className="text-blue-400 hover:text-blue-600" aria-label="instagram" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
          </a>
  
          <a href="/" target="_blank" className="text-purple-600 hover:text-purple-800" aria-label="instagram" rel="noopener noreferrer">
          <i className="fas fa-globe"></i>
          </a>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
