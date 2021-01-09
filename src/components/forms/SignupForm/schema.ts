import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Неправильный email').required('Email обязателен'),
  name: Yup.string().min(2, 'Короткое имя').max(56, 'Длинное имя').required('Имя обязательно'),
  password: Yup.string()
    .min(6, 'Короткий пароль')
    .max(56, 'Длинный пароль')
    .required('Пароль обязателен'),
});

export default LoginSchema;
