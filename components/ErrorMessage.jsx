import { motion } from "framer-motion";
import { FaExclamationCircle } from "react-icons/fa";

const ErrorMessage = ({ message }) => (
  <motion.p
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="flex items-center text-red-500 text-sm mt-2"
  >
    <FaExclamationCircle className="mr-1" />
    {message}
  </motion.p>
);

export default ErrorMessage;
