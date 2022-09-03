import { motion } from "framer-motion";
import { ReactNode } from "react";
import * as React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const Arrow = styled.p`
  text-align: center;
`;

interface WithArrowProps {
  children: ReactNode;
}

export default function WithArrow({ children }: WithArrowProps) {
  return (
    <>
      <Main>{children}</Main>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Arrow className="rfs-48">&gt;&gt;</Arrow>
      </motion.div>
    </>
  );
}
