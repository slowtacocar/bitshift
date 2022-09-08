import FormGroup from "./FormGroup";
import styled from "styled-components";
import LogoGlyph from "./LogoGlyph";
import { Formik, FormikHelpers } from "formik";
import { ApplicationCreation } from "../lib/api-types";
import { useState } from "react";
import * as yup from "yup";
import { client } from "../lib/client/client";
import LoadingButton from "./LoadingButton";
import { AnimatePresence, motion } from "framer-motion";
import Confetti from "react-confetti";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 650px;
`;

const Heading = styled.h3`
  margin-bottom: 2.5rem;
`;

export default function ApplicationForm() {
  const [status, setStatus] = useState("ready");

  async function handleSubmit(
    values: ApplicationCreation,
    actions: FormikHelpers<ApplicationCreation>
  ) {
    setStatus("loading");
    try {
      await client("POST", 201)("/api/apply", values);
      setStatus("success");
      actions.resetForm();
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  }

  return (
    <>
      {status === "success" && (
        <Confetti
          width={window.outerWidth}
          height={window.outerHeight}
          recycle={false}
        />
      )}
      <AnimatePresence>
        {status === "success" ? (
          <>
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Heading className="rfs-36 text-center">
                we&apos;ll be in touch
              </Heading>
            </motion.div>
          </>
        ) : (
          <motion.div
            className="d-flex flex-column justify-content-evenly flex-grow-1 w-100 align-items-center"
            id="apply"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key="form"
          >
            <Heading className="rfs-36 text-center">
              join <LogoGlyph />
              itshift cohort 0
            </Heading>
            <Formik
              initialValues={{
                name: "",
                email: "",
                resume: "",
                question1: "",
                question2: "",
                question3: "",
                question4: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={yup.object({
                name: yup.string().required(),
                email: yup.string().email().email().required(),
                resume: yup.string().url().required(),
                question1: yup.string(),
                question2: yup.string(),
                question3: yup.string(),
                question4: yup.string(),
              })}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="col col-sm-6 col-12">
                      <FormGroup label="full name" name="name" />
                    </div>
                    <div className="col col-sm-6 col-12">
                      <FormGroup label="email address" name="email" />
                    </div>
                  </div>
                  <FormGroup label="resume/LinkedIn link" name="resume" />
                  <FormGroup
                    label="brag about a project or organization that you fully committed yourself to"
                    name="question1"
                  />
                  <FormGroup
                    label="describe a concept or innovation that you are fascinated by"
                    name="question2"
                  />
                  <FormGroup
                    label="discuss a time you unified a group to accomplish a shared goal"
                    name="question3"
                  />
                  <FormGroup
                    label="if you could have lunch with any person (dead or alive), who would it be"
                    name="question4"
                  />
                  <LoadingButton status={status}>apply</LoadingButton>
                </Form>
              )}
            </Formik>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
