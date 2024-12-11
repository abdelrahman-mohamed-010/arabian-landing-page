const Footer = ({ translations }) => {
  return (
    <section className="text-white px-4 lg:px-28 mt-6">
      <div className="flex justify-between items-center pb-7 border-b border-[#FFFFFF] ">
        {/* Left Image */}
        <img
          src="/images/Artboard 2 copy 3@4x-8.png"
          className="w-48 h-auto z-20 object-contain max-md:w-40 max-sm:w-20"
        />

        {/* Icons */}
        <div className="flex space-x-6 max-sm:space-x-3 items-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/face.png"
              className="w-8 h-auto z-20 object-contain  max-sm:w-5  max-sm:ml-3 "
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/x.png"
              className="w-11 h-auto z-20 object-contain max-sm:w-7 "
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/insta.png"
              className="w-9 h-auto z-20 object-contain max-sm:w-5 "
              alt="Instagram"
            />
          </a>
        </div>

        {/* Right Image */}
        <img
          src="/images/Artboard 6@4x-8.png"
          className="w-40 h-auto z-20 object-contain max-md:w-40 max-sm:w-20"
        />
      </div>

      <div className=" flex gap-6 mt-12 mb-5 max-sm:text-xs max-sm:mt-6 max-sm:justify-between ">
        <a>{translations.footer.privacy_policy}</a>
        <a>{translations.footer.terms_conditions}</a>
      </div>
    </section>
  );
};

export default Footer;
