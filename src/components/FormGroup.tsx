import * as React from "react";
import styled from "styled-components";
import { ErrorMessage, Field } from "formik";

const FormControl = styled(Field)`
  border: 2px solid white;
  padding: 1rem;
  background: none;
  color: white;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ErrorText = styled.div`
  color: #ff0000;
`;

interface FormGroupProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}

export default function FormGroup({
  label,
  name,
  type,
  required,
}: FormGroupProps) {
  return (
    <>
      <div>
        <Label htmlFor={name}>{label}</Label>
      </div>
      <div className="mb-4">
        <div>
          <FormControl name={name} id={name} type={type} required={required} />
        </div>
        <ErrorMessage name={name} component={ErrorText} />
      </div>
    </>
  );
}
