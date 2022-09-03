import * as React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";
import Landing from "../components/Landing";
import "../styles/globals.scss";
import BigQuestion from "../components/BigQuestion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import logo from "../images/bitshift-white-transparent-vector.svg";
import About from "../components/About";
import ApplicationForm from "../components/ApplicationForm";

const Main = styled.div`
  scroll-snap-type: y mandatory;
  overflow: scroll;
  height: 100vh;
`;

const PaneContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: auto;
`;

const DummyPane = styled.div`
  height: 0;
  scroll-snap-align: start;
`;

const StickyPaneContainer = styled.div`
  position: sticky;
  bottom: 0;
  height: 100vh;
  overflow: auto;
`;

const Pane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background: black;
  padding: 3rem;
`;

export default function Index() {
  const bigQuestionDummyRef = useRef<HTMLDivElement>(null);

  const bigQuestionInView = useInView(bigQuestionDummyRef);

  return (
    <Main>
      <PaneContainer>
        <Pane>
          <Landing />
        </Pane>
      </PaneContainer>
      <DummyPane ref={bigQuestionDummyRef} />
      <StickyPaneContainer>
        <Pane>
          <BigQuestion inView={bigQuestionInView} />
        </Pane>
      </StickyPaneContainer>
      <DummyPane />
      <StickyPaneContainer style={{ zIndex: "-1" }}>
        <Pane>
          <About />
        </Pane>
      </StickyPaneContainer>
      <PaneContainer>
        <Pane>
          <ApplicationForm />
        </Pane>
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
