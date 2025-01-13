import { motion } from "motion/react";

interface LetterPullUpProps {
  text: string;
  className?: string;
  letterDelay?: number;
  onHover?: boolean;
}

export function LetterPullUp({
  text,
  className = "",
  letterDelay = 0.05,
  onHover = false,
}: LetterPullUpProps) {
  const letters = text.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * letterDelay,
      },
    }),
    hover: (i: number) => ({
      y: [-10, 0],
      transition: {
        delay: i * letterDelay,
        duration: 0.3,
      },
    }),
  };

  return (
    <div className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          whileHover={onHover ? "hover" : undefined}
          custom={i}
          className={className}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.span>
      ))}
    </div>
  );
}

export function StyledLogo() {
  return (
    <div className="flex flex-col items-center justify-center font-SugarPeachy text-lg !leading-none tracking-[-0.02em] md:text-3xl">
      <LetterPullUp text="The Startup" onHover={true} />
      <div className="flex w-full items-center justify-center">
        <hr className="mr-2 h-px w-full bg-[#d6143f]" />
        <LetterPullUp text="Club" onHover={true} />
        <hr className="ml-2 h-px w-full bg-[#d6143f]" />
      </div>
    </div>
  );
}
