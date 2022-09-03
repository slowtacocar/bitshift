import * as React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";
import Landing from "../components/Landing";
import "../styles/globals.scss";
import BigQuestion from "../components/BigQuestion";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import logo from "../images/bitshift-white-transparent-vector.svg";
import About from "../components/About";
import ApplicationForm from "../components/ApplicationForm";

const Main = styled.div`
  scroll-snap-type: y proximity;
  overflow: scroll;
  height: 100vh;
`;

const PaneContainer = styled.div`
  scroll-snap-align: start;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  padding: 3rem;
  position: relative;
`;

const StickyPaneContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  padding: 3rem;
  position: relative;
  width: 100%;
`;

const DummyPaneContainer = styled.div`
  scroll-snap-align: start;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  padding: 3rem;
  position: relative;
  opacity: 0;
`;

export default function Index() {
  const questionContainerRef = useRef<HTMLDivElement>(null);
  const aboutContainerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({ container: mainRef });
  const [fixQuestion, setFixQuestion] = useState(false);
  const [fixAbout, setFixAbout] = useState(false);

  useEffect(
    () =>
      scrollY.onChange(() => {
        if (questionContainerRef.current) {
          setFixQuestion(
            questionContainerRef.current.getBoundingClientRect().top > 0
          );
        }
        if (aboutContainerRef.current) {
          setFixAbout(
            aboutContainerRef.current.getBoundingClientRect().top > 0
          );
        }
      }),
    []
  );

  // TODO this is quite possibly the shittiest code i've ever written
  return (
    <Main ref={mainRef}>
      <PaneContainer>
        <Landing />
      </PaneContainer>
      <div className="position-relative" ref={questionContainerRef}>
        <StickyPaneContainer
          style={{
            position: fixQuestion ? "fixed" : "absolute",
            top: fixQuestion ? 0 : void 0,
            zIndex: -1,
          }}
        >
          <BigQuestion inView={!fixQuestion} />
        </StickyPaneContainer>
      </div>
      <DummyPaneContainer>
        <BigQuestion inView={false} />
      </DummyPaneContainer>
      <div className="position-relative" ref={aboutContainerRef}>
        <StickyPaneContainer
          style={{
            position: fixAbout ? "fixed" : "absolute",
            top: fixAbout ? 0 : void 0,
            zIndex: -2,
          }}
        >
          <About />
        </StickyPaneContainer>
      </div>
      <DummyPaneContainer>
        <About />
      </DummyPaneContainer>
      <PaneContainer>
        <ApplicationForm />
      </PaneContainer>
    </Main>
  );
}

export const Head: HeadFC = () => (
  <>
    <title>bitshift</title>
    <link rel="icon" href={logo} type="image/svg+xml" />
  </>
);
