import { useHistory } from "react-router-dom";
import { useForm } from '../hooks/hooks';
import EntrancePage from "./EntrancePage";

function Login({ onLogin, isLoading }) {

    const history = useHistory();
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
        onLogin({ password, email })
            .then(resetForm)
            .then(() => history.push('/'))
            .catch((err) => console.log(err.message || 'Что-то пошло не так'));
    }

    return (
        <EntrancePage
            name="login"
            title="Вход"
            submitButtonName="Войти"
            submitButtonNameOnLoading="Вход ..."
            isLoading={isLoading}
            onSubmit={handleSubmit}
            onChange={handleChange}
            email={email}
            password={password}
        />
    );
}

export default Login;