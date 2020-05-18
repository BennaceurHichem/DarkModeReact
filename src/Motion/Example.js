import * as React from "react";
import { motion } from "framer-motion";

export const Example = () => {
  return <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />;
};
