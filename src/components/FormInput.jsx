// src/components/forms/FormInput/FormInput.jsx
import styles from './FormInput.module.css';

const FormInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  error,
  ...props
}) => {
  return (
    <div className={styles.formGroup}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? styles.error : ''}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default FormInput;