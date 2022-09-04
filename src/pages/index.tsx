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

const PaneContainer = styled.div`
  scroll-snap-align: start;
  min-height: var(--doc-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  padding: 3rem;
  position: relative;
`;

const StickyPaneContainer = styled.div`
  min-height: var(--doc-height);
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
  min-height: var(--doc-height);
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

  const { scrollY } = useScroll();
  const [fixQuestion, setFixQuestion] = useState(false);
  const [fixAbout, setFixAbout] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  useEffect(
    () =>
      scrollY.onChange((y) => {
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
        if (y > 0) setShowQuestion(true);
      }),
    []
  );

  useEffect(() => {
    function documentHeight() {
      document.documentElement.style.setProperty(
        "--doc-height",
        `${window.innerHeight}px`
      );
    }
    window.addEventListener("resize", documentHeight);
    documentHeight();
    return () => {
      window.removeEventListener("resize", documentHeight);
    };
  }, []);

  // TODO this is quite possibly the shittiest code i've ever written
  return (
    <>
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
          <BigQuestion inView={showQuestion} />
        </StickyPaneContainer>
      </div>
      <div className="position-relative">
        <DummyPaneContainer>
          <BigQuestion inView={false} />
        </DummyPaneContainer>
      </div>
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
      <div className="position-relative">
        <DummyPaneContainer>
          <About />
        </DummyPaneContainer>
      </div>
      <PaneContainer>
        <ApplicationForm />
      </PaneContainer>
    </>
  );
}

export const Head: HeadFC = () => (
  <>
    <title>bitshift</title>
    <link rel="icon" href={logo} type="image/svg+xml" />
  </>
);
