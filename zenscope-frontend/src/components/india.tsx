import { Teachers } from "next/font/google";

const teachers = Teachers({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const India = () => {
  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-x-10 gap-y-5 text-center pb-3 md:pb-0 ${teachers.className}`}
    >
      <h1 className="flex items-center gap-2 text-black">
        <span>Made In</span>
        <img
          src="https://media.magflags.net/media/catalog/product/cache/bbfe81b5dc693f3f88259968def067fa/I/N/IN-1x1.5_7.png"
          alt="India Flag"
          className="h-6"
        />
      </h1>

      <h1 className="flex items-center gap-1 text-black">
        <span>Atal Innovation Mission</span>
      </h1>

      <h1 className="flex items-center gap-2 text-black">
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyMmxlcm1kcG82ZW40dHJjbGppY2Fkc3d0azJsYms5aWo2Z2I4bzB2ZCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/oSIpdt7l0Jqi4/giphy.gif"
          alt="Swadeshi"
          className="h-6"
        />
        <span>Swadeshi</span>
      </h1>

      <h1 className="flex items-center gap-1 text-black">
        <span style={{ color: "#EC662C" }}>Viksit</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Spinning_Ashoka_Chakra.gif"
          alt="Ashoka Chakra"
          className="h-6"
        />
        <span style={{ color: "#066E36" }}>Bharat</span>
      </h1>

      <h1 className="flex items-center gap-1 text-black">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-indian-map-icon-svg-download-png-1856790.png"
          alt="Aatmanirbhar Bharat"
          className="h-6"
        />
        <span>Aatmanirbhar Bharat</span>
      </h1>

      <h1 className="flex pt-3 items-center gap-1 text-black">
        <img
          src="https://solapureconsultingadvisory.com/wp-content/uploads/2023/12/startup-india-logo1-02-1024x265.png"
          alt="Startup India"
          className="h-6"
        />
      </h1>
    </div>
  );
};

export default India;
