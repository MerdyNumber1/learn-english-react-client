import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Неправильный email').required('Email обязателен'),
  username: Yup.string().min(2, 'Короткое имя').max(56, 'Длинное имя').required('Имя обязательно'),
  password: Yup.string()
    .min(6, 'Короткий пароль')
    .max(56, 'Длинный пароль')
    .required('Пароль обязателен'),
});

export default SignupSchema;
