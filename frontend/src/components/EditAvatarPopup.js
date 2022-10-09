import { useEffect } from 'react';
import { useForm } from '../hooks/hooks'
import PopupWithForm from './PopupWithForm';
import Input from './Input';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
    const { values, handleChange, setValues } = useForm({});

    useEffect(() => {
        setValues({ avatar: '' });
    }, [isOpen])

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: values.avatar
        });
    }

    return (
        <PopupWithForm
            name="change-avatar"
            isOpen={isOpen}
            onClose={onClose}
            title="Обновить аватар"
            submitButtonName="Сохранить"
            submitButtonNameOnLoading="Сохранение ..."
            isLoading={isLoading}
            onSubmit={handleSubmit}
        >
            <label className="popup__field">
                <Input
                    type={"url"}
                    id={"avatar-link-input"}
                    name={"avatar"}
                    className={"popup__input popup__input_type_img-link"}
                    placeholder={"Ссылка на картинку"}
                    required={true}
                    value={values.avatar}
                    onChange={handleChange}
                >
                </Input>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;