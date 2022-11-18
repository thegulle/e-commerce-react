import { motion } from "framer-motion";


const animations = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  }
}

const RouteTransition = ({ children, keyValue }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animations}
      key={keyValue}
    >
      {children}
    </motion.div>
  )
}

export default RouteTransition;