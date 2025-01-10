import { motion } from "motion/react";
import { Button } from "../ui/button";
type ButtonAnimatedProps = {
  children: React.ReactNode;
  id?: string;
  containerClass?: string;
  asChild?: boolean;
};

const ButtonAnimated: React.FC<ButtonAnimatedProps> = ({
  children,
  id,
  containerClass,
  asChild = false,
}) => {
  return (
    <motion.div
      whileTap={{
        scale: 0.95,
      }}
    >
      <Button
        className={`border border-black transition-all duration-200 hover:bg-white hover:text-black hover:[box-shadow:3px_5px_0_2px_black] ${containerClass}`}
        id={id}
        asChild={asChild}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default ButtonAnimated;
