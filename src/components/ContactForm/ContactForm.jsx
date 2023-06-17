import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, ErrorMessage } from 'components/ContactForm/ContactForm.styled';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = ({ onSubmit }) => {
  const inputName = nanoid();
  const inputNumber = nanoid();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ ...values });
        resetForm();
      }}
      validationSchema={contactSchema}
    >
      <Form autoComplete="off">
        <label htmlFor={inputName}>Name</label>
        <Field type="text" name="name" id={inputName} />
        <ErrorMessage component="span" name="name" />
        <label htmlFor={inputNumber}>Number</label>
        <Field type="tel" name="number" id={inputNumber} />
        <ErrorMessage component="span" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
