import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum 3 letters")
    .max(50, "Maximum 50 letters")
    .required("This field is required"),
  number: Yup.number().required("This field is required"),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div className={css.inputNameWrapper}>
          <p className={css.inputLable}>Name</p>
          <Field className={css.input} type="text" name="name" required />
          <ErrorMessage
            name="name"
            component={"span"}
            className={css.errorMsg}
          />
        </div>
        <div className={css.inputNumberWrapper}>
          <p className={css.inputLable}>Number</p>
          <Field className={css.input} type="number" name="number" required />
          <ErrorMessage
            name="number"
            component={"span"}
            className={css.errorMsg}
          />{" "}
        </div>
        <button className={css.addButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
