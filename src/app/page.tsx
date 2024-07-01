import Image from "next/image";
import men from "@/assets/men.jpg";



export default function Home() {
  
  
  return (
    <main className="flex min-h-full max-h-full mx-auto">
      <div className="container flex items-center justify-center flex-col">
        <div>
          <Image src={men} width={500} height={500} alt="men" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="text-gray-600 text-xl">Hello, I'm</p>
          <h1 className="text-5xl font-bold text-gray-800 hover-effect">
            <span className="hover:text-gray-500 transition-colors">H</span>
            <span className="hover:text-gray-500 transition-colors">a</span>
            <span className="hover:text-gray-500 transition-colors">r</span>
            <span className="hover:text-gray-500 transition-colors">s</span>
            <span className="hover:text-gray-500 transition-colors">h</span>
            <span className="hover:text-gray-500 transition-colors"> </span>
            <span className="hover:text-gray-500 transition-colors"> </span>
            <span className="hover:text-gray-500 transition-colors"> </span>
            <span className="hover:text-gray-500 transition-colors"> </span>
            <span className="hover:text-gray-500 transition-colors">S</span>
            <span className="hover:text-gray-500 transition-colors">i</span>
            <span className="hover:text-gray-500 transition-colors">n</span>
            <span className="hover:text-gray-500 transition-colors">g</span>
            <span className="hover:text-gray-500 transition-colors">h</span>
          </h1>
          <p className="text-gray-600 text-xl text-center max-w-[650px]">
            Welcome to my portfolio! I'm a full stack developer with a passion
            for building scalable and efficient web applications. Here you'll
            find a showcase of my projects, skills, and experiences.
          </p>
        </div>
      </div>
    </main>
  );
}
