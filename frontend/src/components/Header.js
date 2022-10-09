import { Switch, Route, Link } from 'react-router-dom';
import headerLogo from '../images/header-logo.svg';

function Header({ email, onSignOut }) {
    return (
        <header className="header">
            <Link className="link" to="/">
                <img className="header__logo" src={headerLogo} alt="Лого Место" />
            </Link>
            <div className='header__elements'>
                <Switch>
                    <Route exact path='/login'>
                        <Link className="header__link link" to="/register">Регистрация</Link>
                    </Route>
                    <Route exact path='/register'>
                        <Link className="header__link link" to="/login">Вход</Link>
                    </Route>
                    <Route exact path='/'>
                        <p className='header__profile'>{email}</p>
                        <Link className="header__link link" to="/login" onClick={onSignOut}>Выход</Link>
                    </Route>

                </Switch>
            </div>
        </header>
    );
}

export default Header;