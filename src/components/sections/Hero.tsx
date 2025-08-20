import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import resume from "/Malykhin_Frontend_Developer.pdf";
import bgImage from "@/assets/bg.avif?url";
import avatar from "@/assets/avatar.png";

// Animations
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.7); }
  to { opacity: 1; transform: scale(1); }
`;

// Styled Components
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #101846;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("${bgImage}") center center / cover no-repeat;
    z-index: 0;
    opacity: 0.1;
  }
`;

const HeroSection = styled.section`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 2rem;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  animation: ${fadeUp} 1s ease forwards;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};

  span {
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubHeading = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.muted};
  font-size: 1.2rem;
  max-width: 600px;
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #9333ea, #3b82f6);
  color: white;
  border-radius: 999px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
  }

  &::before {
    content: "📥";
    font-size: 1.2rem;
  }
`;

const AvatarImage = styled.img`
  width: 240px;
  height: 240px;
  object-fit: contain;
  animation: ${fadeInScale} 1.2s ease forwards;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

// Component
export const Hero = () => {
  return (
    <Wrapper id="about">
      <HeroSection>
        <TextBlock>
          <Heading>
            Hello, I’m <span>Dmitry</span>, <br />
            frontend developer
          </Heading>
          <SubHeading>
            With 3+ years of experience building high-performance, responsive
            UIs. Former aircraft design engineer at Boeing Design Center, now
            crafting fast, accessible web interfaces with React, TypeScript,
            Emotion and Astro.
          </SubHeading>
          <ResumeButton href={resume} download title="Download resume as PDF">
            Download Resume
          </ResumeButton>
        </TextBlock>

        <AvatarImage src={avatar} alt="Dmitry Malykhin Avatar" />
      </HeroSection>
    </Wrapper>
  );
};
