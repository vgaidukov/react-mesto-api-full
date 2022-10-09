import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { useForm } from '../hooks/hooks';
import PopupWithForm from './PopupWithForm';
import Input from './Input';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
    const currentUser = useContext(CurrentUserContext);
    const { values, handleChange, setValues } = useForm({});

    useEffect(() => {
        setValues({
            name: currentUser.name,
            description: currentUser.about
        })
    }, [currentUser, isOpen])

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: values.name,
            about: values.description
        });
    }

    return (
        <PopupWithForm
            name="profile"
            isOpen={isOpen}
            onClose={onClose}
            title="Редактировать профиль"
            submitButtonName="Сохранить"
            submitButtonNameOnLoading="Сохранение ..."
            isLoading={isLoading}
            onSubmit={handleSubmit}
        >
            <label className="popup__field">
                <Input
                    type={"text"}
                    id={"profile-name-input"}
                    name={"name"}
                    className={"popup__input popup__input_type_name"}
                    placeholder={"Имя"}
                    required={true}
                    minLength="2"
                    maxLength="40"
                    value={values.name}
                    onChange={handleChange}
                >
                </Input>
            </label>
            <label className="popup__field">
                <Input
                    type={"text"}
                    id={"profile-description-input"}
                    name={"description"}
                    className={"popup__input popup__input_type_description"}
                    placeholder={"Описание"}
                    required={true}
                    minLength="2"
                    maxLength="200"
                    value={values.description}
                    onChange={handleChange}
                >
                </Input>
            </label>
        </PopupWithForm>
    )
}

export default EditProfilePopup;
