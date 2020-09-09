import * as Yup from 'yup';
import { useState } from 'react';
import { Formik, Field } from 'formik';
import { FormWrapper, FormError, FieldError, StyledText } from './styled';
import Button from '../Button';
import FileUpload from './Fields/FileUpload';

const Sell = () => {
  const [files, setFiles] = useState([]);
  const [fileUrl, setFileUrl] = useState('');

  const initialValues = {
    name: '',
    description: '',
    price: '',
  };

  let error = false;
  let loading = false;
  let apiError = false;

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(5).required(),
    description: Yup.string().min(8).max(16).required(),
    price: Yup.number().required(),
  });

  const onSubmit = async (values) => {
    const data = {
      ...values,
      files: fileUrl,
    };

    await axios.post(
      ('/api/items/', data)
        .then((res) => res.json())
        .then((data) => console.log('Respnse', data))
        .catch((err) => console.log('Error', err)),
    );
  };

  console.log('Files', files);

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ isSubmitting, handleChange, errors, touched }) => (
        <FormWrapper>
          <fieldset disabled={isSubmitting} aria-busy={isSubmitting}>
            <h3 className="form-title">Create Advert</h3>
            {apiError && <FormError>{apiError}</FormError>}

            <FileUpload files={files} setFiles={setFiles} setFileUrl={setFileUrl} />

            <label htmlFor="name">
              <StyledText>Item Name:</StyledText>
              <Field type="text" name="name" placeholder="yourname@example.com" onChange={handleChange} />
              {errors.name && touched.name ? <FieldError>{errors.name}</FieldError> : null}
            </label>

            <label htmlFor="description">
              <StyledText>Item Description:</StyledText>
              <Field type="text" name="description" onChange={handleChange} placeholder="description" />
              {errors.description && touched.description ? <FieldError>{errors.description}</FieldError> : null}
            </label>

            <label htmlFor="price">
              <StyledText>Item price:</StyledText>
              <Field type="number" name="price" onChange={handleChange} placeholder="price" />
              {errors.price && touched.price ? <FieldError>{errors.price}</FieldError> : null}
            </label>

            <Button size="lg" disabled={isSubmitting} loading={isSubmitting}>
              Create Advert
            </Button>
          </fieldset>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Sell;
