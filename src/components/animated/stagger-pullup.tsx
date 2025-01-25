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

export function StyledLogo({ className }: { className?: string }) {
  return (
    <a href="/" className={`${className}`}>
      <img
        src="/logo.svg"
        alt="logo"
        className="w-10 sm:w-12 md:w-16 lg:w-20"
      />
    </a>
  );
}
