import { Teachers } from "next/font/google";

const teachers = Teachers({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // adjust weights if needed
});

const Hashtags = () => {
  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-x-5 gap-y-3 text-center text-black ${teachers.className}`}
    >
      <span>#BharatInnovates</span>
      <span>#YuvaCreates</span>
      <span>#ViksitBharatBuildathon</span>
    </div>
  );
};

export default Hashtags;
