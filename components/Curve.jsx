import { motion } from "framer-motion";

const Curve = ({ dimensions, backgroundColor, position, routeName }) => {
  const finalRadius = Math.sqrt(
    dimensions.width * dimensions.width + dimensions.height * dimensions.height
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <motion.svg
        className="fixed inset-0 w-full h-full pointer-events-none"
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.circle
          cx={position.x - window.scrollX}
          cy={position.y - window.scrollY}
          r={0}
          fill={backgroundColor}
          initial={{ r: 0 }}
          animate={{
            r: [0, finalRadius, finalRadius, 0],
            transition: {
              duration: 2,
              times: [0, 0.5, 0.5, 1],
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          exit={{
            r: 0,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
          }}
        />
      </motion.svg>
      <motion.p
        className="absolute left-1/2 top-1/2 text-white text-4xl z-50 -translate-x-1/2 -translate-y-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 0],
          y: [20, 0, -20],
          transition: {
            duration: 2,
            times: [0, 0.5, 1],
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      >
        {routeName}
      </motion.p>
    </div>
  );
};

export default Curve;
