import React from "react";
import { Form, Formik } from "formik";
import { createProviderRequest } from "../api/provider.api";

function Provider() {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createProviderRequest(values);
            console.log(response);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="">Nombre del proveedor</label>
            <input type="text" name="name" onChange={handleChange} />

            <button type="submit">Guardar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Provider;
