import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 60px 40px;
`;

export const Projects = () => {
  return (
    <Section>
      <h2>🛠️ Projects</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ul>
          <li>⚡ Migrated pages to Astro, reduced TTFB to 300ms</li>
          <li>🎯 Zustand-based dynamic landing forms</li>
          <li>🌍 Multi-language landing pages for 10+ countries</li>
        </ul>
      </motion.div>
    </Section>
  );
};
