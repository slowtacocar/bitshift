import { motion } from "framer-motion";
import styled from "styled-components";
import WithArrow from "./WithArrow";
import Button from "./Button";

const BigText = styled.h2`
  margin-bottom: 3rem;
`;

const EndText = styled.h2`
  margin-top: 2rem;
  text-align: right;
`;

const Em = styled.span`
  color: #ff0000;
  font-weight: 700;
`;

interface BigQuestionProps {
  inView: boolean;
}

export default function BigQuestion({ inView }: BigQuestionProps) {
  return (
    <WithArrow>
      <div className="d-flex flex-column">
        <motion.div
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={inView ? { duration: 1 } : { duration: 0.5 }}
        >
          <BigText className="rfs-96">what will happen</BigText>
        </motion.div>
        <motion.div
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={inView ? { duration: 1, delay: 0.5 } : { duration: 0.5 }}
        >
          <p className="rfs-36">
            when we bring together <Em>talented leaders</Em> in computer
            science,
          </p>
          <p className="rfs-36">
            unite them against <Em>concrete issues</Em> in the broader world,
          </p>
          <p className="rfs-36">
            and build an undying force that will <Em>smash through barriers</Em>{" "}
            to progress?
          </p>
        </motion.div>
        <motion.div
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={inView ? { duration: 1, delay: 2 } : { duration: 0.5 }}
        >
          <EndText className="rfs-96 rfs-mb-8">let&apos;s find out</EndText>
          <div className="text-center rfs-mb-8">
            <Button as="a" href="#apply">
              apply now
            </Button>
          </div>
        </motion.div>
      </div>
    </WithArrow>
  );
}
