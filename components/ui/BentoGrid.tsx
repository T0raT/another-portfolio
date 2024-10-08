import { cn } from "@/lib/utils";
import "@/components/css/glassmorphism.css";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

interface GridItemType {
  className?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  header: React.ReactNode;
  icon?: React.ReactNode;
  github: string;
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  github,
}: GridItemType) => {
  return (
    <div
      className={cn(
        "glass2 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-gruv-bg0-h border-white/[0.2] border justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-gruv-fg0 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-gruv-aqua text-xs mb-4">
          {description}
        </div>
        <a
          className="bg-gruv-blue1 hover:bg-gruv-aqua1 text-gruv-fg0 font-bold py-2 px-4 border-b-4 border-gruv-blue hover:border-gruv-aqua rounded my-5"
          href={github}
          target="_blank"
        >
          Github Link
        </a>
      </div>
    </div>
  );
};
