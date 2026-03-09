import { motion } from "framer-motion";
import { ReactNode } from "react";

const SectionWrapper = ({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5 }}
    className={`py-8 md:py-14 lg:py-20 ${className}`}
  >
    <div className="container mx-auto px-4">{children}</div>
  </motion.section>
);

export default SectionWrapper;
