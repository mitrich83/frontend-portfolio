import styled from "@emotion/styled";
import { Hero } from "@/components/sections/Hero";
import { Resume } from "@/components/sections/Resume";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/Header";

const Wrapper = styled.div(({ theme }) => ({
  background: theme.background,
  color: theme.text,
  transition: "all 0.3s ease",
  minHeight: "100vh",
  scrollBehavior: "smooth",
}));

export const Layout = () => (
  <Wrapper>
    <Header />
    <section id="about">
      <Hero />
    </section>
    <section id="experience">
      <Resume />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="education">
      {/* Пока можно повторить Resume */}
      <Resume />
    </section>
    <section id="contacts">
      <Contact />
    </section>
  </Wrapper>
);
