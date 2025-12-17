import React from "react";

const NewsletterSection = () => {
  return (
    <section className="relative w-full py-28 bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2a120c] to-black opacity-95" />

      {/* Orange Accent Bar */}
      <div className="absolute top-0 left-0 w-[260px] h-6 bg-[#ff4d2d]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        {/* Heading */}
        <div className="mb-14">
         <div className="text-center mb-7">
          <img
            src="/images/featuredec.png"
            alt="decorative"
            className="w-17 mx-auto"
          />
        </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-[Platia] font-extrabold tracking-[0.1em] uppercase">
            Stay Connected With Us
          </h2>

          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Follow us on instagram and contact us for membership, training plans and more fitness updates.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-3xl mx-auto">
        

 <a
    href="https://www.facebook.com/profile.php?id=61583350382077&sk=about"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative h-[60px] px-10 overflow-hidden bg-[#ff4d2d] text-black font-extrabold tracking-widest uppercase flex items-center justify-center"
  >
    {/* animated bg */}
    <span className="absolute inset-0 bg-black translate-y-full transition-transform duration-300 group-hover:translate-y-0" />

    {/* text */}
    <span className="relative z-10 transition-colors duration-300 group-hover:text-[#ff4d2d]">
      Subscribe
    </span>
  </a>


         <button className="group relative h-[60px] px-10 overflow-hidden border-2 border-[#ff4d2d] text-[#ff4d2d] font-extrabold tracking-widest uppercase">
  
  {/* animated bg */}
  <span className="absolute inset-0 bg-[#ff4d2d] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100" />

  {/* text */}
  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
    Contact Us
  </span>
</button>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
