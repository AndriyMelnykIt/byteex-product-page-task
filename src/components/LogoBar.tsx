export default function LogoBar() {
  const logos = [
    'ECO-STYLIST',
    'Canadian Living',
    'JILLIAN HARRIS',
    'THE ECO HUB',
    'TRENDHUNTER',
  ];

  return (
    <section className="bg-[#FDFBF7] py-8 lg:py-16">
      <div className="px-5 lg:px-[100px]">
        <p className="text-center text-xs text-gray-400 mb-6 lg:mb-8 tracking-wide">as seen in</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="text-gray-300 font-medium text-xs lg:text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

