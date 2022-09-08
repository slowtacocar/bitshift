import { motion, useTime } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import LogoGlyph from "./LogoGlyph";
import WithArrow from "./WithArrow";

const Glyph = styled.img`
  height: 1em;
  margin: 0.5em;
  vertical-align: baseline;
`;

export default function Landing() {
  const time = useTime();
  const [message, setMessage] = useState("");
  const [bar, setBar] = useState(false);

  useEffect(() =>
    time.onChange((time) => {
      const text = "join the experiment";
      if (message.length < text.length) {
        setMessage(text.slice(0, time / 100));
      }
      setBar(time % 400 < 200);
    })
  );

  return (
    <WithArrow>
      <motion.div animate={{ opacity: 1 }} style={{ opacity: 0 }}>
        <h1 className="rfs-144 rfs-mb-5 text-center">
          <LogoGlyph />
          itshift
        </h1>
      </motion.div>
      <p
        className="rfs-36 mb-4 text-center"
        style={{
          borderRight: bar ? "0.5em solid white" : "0.5em solid transparent",
        }}
      >
        {message}
      </p>
      <motion.div
        animate={{ opacity: 1 }}
        style={{ opacity: 0 }}
        transition={{ delay: 1 }}
      >
        <p className="rfs-36">
          <a
            href="https://www.instagram.com/bitshiftdaily/"
            target="_blank"
            rel="noreferrer"
          >
            <Glyph src="/Instagram_Glyph_White.svg" />
          </a>
          {/*<a>*/}
          {/*  <Glyph src="/In-White-34.png" />*/}
          {/*</a>*/}
        </p>
      </motion.div>
    </WithArrow>
  );
}
