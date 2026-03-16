import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

const SectionWrapper = ({
  children,
  className = "",
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5 }}
    className={`py-6 md:py-10 ${className}`}
    style={style}
  >
    <div className="container mx-auto px-4">{children}</div>
  </motion.section>
);

export default SectionWrapper;
