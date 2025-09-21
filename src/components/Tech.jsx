import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiExpress, SiMysql, SiPrisma, SiNextdotjs, SiRedis, SiTurborepo } from "react-icons/si";
import { FaDocker, FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaGolang } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";

const techStack = [
  // Frontend
  { name: "Turborepo", icon: SiTurborepo, color: "text-gray-300" },
  { name: "JavaScript", icon: BiLogoJavascript, color: "text-yellow-500" },
  { name: "TypeScript", icon: BiLogoTypescript, color: "text-sky-500" },
  { name: "React", icon: BiLogoReact, color: "text-sky-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TailwindCSS", icon: BiLogoTailwindCss, color: "text-sky-500" },

  // Backend
  { name: "Express.js", icon: SiExpress, color: "text-green-300" },
  { name: "Node.js", icon: BiLogoNodejs, color: "text-green-400" },
  { name: "Java", icon: FaJava, color: "text-red-700" },
  { name: "Go", icon: FaGolang, color: "text-[#00ADD8]" },

  // Databases
  { name: "MongoDB", icon: BiLogoMongodb, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-orange-500" },
  { name: "Prisma", icon: SiPrisma, color: "text-white" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
  {
    name: "BullMQ",
    img: "https://docs.bullmq.io/~gitbook/image?url=https%3A%2F%2F1340146492-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-LUuDmt_xXMfG66Rn1GA%252Ficon%252FHOq80FSJicAlE4bVptC9%252Fbull.png%3Falt%3Dmedia%26token%3D10a2ba71-db1f-4d5c-8787-3dbedc8dd3ce&width=32&dpr=2&quality=100&sign=929d1d52&sv=2",
    color: "text-purple-500",
  },

  // DevOps / Tools
  { name: "Docker", icon: FaDocker, color: "text-blue-500" },
  { name: "AWS", icon: FaAws, color: "text-gray-300" },
];

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const iconClass = "cursor-pointer text-[50px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]";

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-16"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.6 }}
        whileInView="visible"
        className="text-4xl font-normal mt-20 text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={variants}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            whileInView="visible"
          >
            {tech.icon ? (
              <tech.icon className={`${iconClass} ${tech.color}`} />
            ) : (
              <img src={tech.img} alt={tech.name} className={`${iconClass} ${tech.color}`} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
