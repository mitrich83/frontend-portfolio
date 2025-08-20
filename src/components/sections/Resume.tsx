import styled from "@emotion/styled";

const Section = styled.section`
  padding: 60px 40px;
`;

export const Resume = () => {
  return (
    <Section>
      <h2>📄 Resume</h2>
      <p>
        <a href="/resume.pdf" download>
          Download Resume (PDF)
        </a>
      </p>
      <p>
        <a href="/profile.pdf" download>
          Download LinkedIn Profile (PDF)
        </a>
      </p>
    </Section>
  );
};
