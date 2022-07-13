const Footer = () => {
  return (
    <footer className="text-tertiary border-t border-gray-600 bg-gray-700 py-4 text-center text-sm">
      <div className="container">
        <span>
          Made by{" "}
          <span aria-label="wizard" role="img">
            🧙
          </span>{" "}
          <a className="font-semibold" href="https://mattpryer.com" rel="noopener noreferrer" target="_blank">
            Matt Pryer
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
