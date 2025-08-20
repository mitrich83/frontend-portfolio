import styled from "@emotion/styled";

const Nav = styled.nav(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 1000,
  borderBottom: `1px solid ${theme.border}`,
  backgroundColor: theme.background,
  padding: "1rem 2rem",
}));

const Link = styled.a(({ theme }) => ({
  color: theme.text,
  fontWeight: "bold",
  cursor: "pointer",
  textDecoration: "none",
  marginRight: "1.5rem",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.accent,
  },
}));

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(16, 24, 70, 0.85);
  backdrop-filter: blur(8px);
  z-index: 1000;
`;

export const Header = () => (
  <HeaderStyled>
    <Nav>
      <Link href="#about">About</Link>
      <Link href="#experience">Experience</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#education">Education</Link>
      <Link href="#contact">Contacts</Link>
    </Nav>
  </HeaderStyled>
);
