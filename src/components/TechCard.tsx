"use client";

const TechCard = ({ title, description, icon, isActive, onClick }: any) => {
  return (
    <div
      className={isActive ? "flex flex-col cursor-pointer items-start justify-between bg-gray-800 text-white h-[300px] w-[300px] border border-gray-400 py-10 px-4 rounded-3xl transition-all delay-100":"flex cursor-pointer flex-col items-start justify-between h-[300px] w-[300px] border border-gray-400 py-10 px-4 rounded-3xl transition-all delay-100"
      }
      onClick={onClick}
    >
      {icon}
      <div className="flex flex-col items-start justify-center gap-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p
          className={`text-lg ${isActive ? "text-white transition-all delay-100 text-sm" : "text-gray-600 text-sm transition-all delay-100"}`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default TechCard