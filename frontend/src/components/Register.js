import { Link } from "react-router-dom";
import { useForm } from '../hooks/hooks'
import EntrancePage from "./EntrancePage";

function Register({
    onRegister,
    isLoading,
}) {
    const { values, handleChange, setValues } = useForm({});
    const email = values.email || '';
    const password = values.password || '';

    const resetForm = () => {
        setValues({
            email: '',
            password: ''
        })
    };

    function handleSubmit(e) {
        e.preventDefault();
        onRegister({ password, email })
            .then(resetForm)
            .catch((err) => console.log(err.message || 'Что-то пошло не так'));
    };

    return (
        <EntrancePage
            name="register"
            title="Регистрация"
            submitButtonName="Зарегистрироваться"
            submitButtonNameOnLoading="Регистрация ..."
            isLoading={isLoading}
            onSubmit={handleSubmit}
            onChange={handleChange}
            email={email}
            password={password}
        >
            <p className="entrance-page__text">Уже зарегистрированы?
                <Link className="link entrance-page__link" to='/login'>Войти</Link>
            </p>
        </EntrancePage>
    );
}

export default Register;