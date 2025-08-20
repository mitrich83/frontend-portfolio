import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaEnvelope, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

const Section = styled.section(({ theme }) => ({
  padding: "2rem 1rem",
  color: theme.text,
  background: theme.background,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.5rem",
}));

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LinkItem = styled.a(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  textDecoration: "none",
  color: theme.text,
  fontSize: "1.2rem",
  transition: "all 0.3s ease",
  svg: {
    color: theme.text,
    minWidth: "24px",
    minHeight: "24px",
  },
  "&:hover": {
    color: theme.primary,
    transform: "translateX(6px)",
    svg: {
      color: theme.primary,
    },
  },
}));

const MotionSection = motion(Section);

export const Contact = () => {
  return (
    <MotionSection initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Title>📖 Contact</Title>
      <LinkItem href="mailto:dmitry.malykhin.job@gmail.com">
        <FaEnvelope size={24} /> dmitry.malykhin.job@gmail.com
      </LinkItem>
      <LinkItem
        href="https://t.me/mitrich83"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegramPlane size={24} /> @mitrich83
      </LinkItem>
      <LinkItem
        href="https://www.linkedin.com/in/dmitrii-malykhin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} /> LinkedIn
      </LinkItem>
    </MotionSection>
  );
};
