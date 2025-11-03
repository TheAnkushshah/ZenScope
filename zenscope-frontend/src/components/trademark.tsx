import { Teachers } from "next/font/google";

const teachers = Teachers({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // you can adjust weights as needed
});

const Trademark = () => {
  return (
    <h1
      className={`flex items-center text-black pb-5 md:pb-0 ${teachers.className}`}
    >
      Built by
      <a
        href="https://havenfutures.com"
        target="_blank"
        rel="noreferrer"
        className="ml-2 mr-1.5"
      >
        <img
          src="https://havenfutures.com/Haven%20Futures.png"
          alt="Haven Futures Logo"
          className="h-6"
        />
      </a>
      <a
        href="https://havenfutures.com"
        target="_blank"
        rel="noreferrer"
        className="flex gap-x-1 handwritten-double-underline font-semibold"
      >
        <span style={{ color: "#55d485" }}>Haven </span>
        <span style={{ color: "#000000" }}>Futures</span>
      </a>
    </h1>
  );
};

export default Trademark;
