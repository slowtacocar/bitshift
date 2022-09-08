import styled from "styled-components";
import WithArrow from "./WithArrow";

const Heading = styled.h3`
  color: #ff0000;
`;

const Em = styled.span`
  color: #ff0000;
  font-weight: 700;
`;

export default function About() {
  return (
    <WithArrow>
      <div>
        <Heading>about us</Heading>
        <p>
          umd is home to a vast pool of talented computer scientists. while
          there are numerous clubs to bring talent together, what they
          don&apos;t do is provide an outlet for that talent.{" "}
          <Em>bitshift was founded to close the gap</Em>.
        </p>
        <Heading>our mission</Heading>
        <p>
          our mission is to build a cohort of the best-of-the-best in computer
          science and give them a purpose. we will work with other student
          organizations and companies within a sweeping range of disciplines,
          and we will address their needs using computer science.
        </p>
        <Heading>getting involved</Heading>
        <p>
          we&apos;re looking for people who are deeply committed, passionate
          about computer science, and can bring others together to address
          real-world problems. if that sounds like you, please fill out the
          application below and we&apos;ll be in touch. you&apos;ll be joining
          the first cohort of bitshift, so don&apos;t miss out on the
          opportunity to get in on the ground floor!
        </p>
      </div>
    </WithArrow>
  );
}
