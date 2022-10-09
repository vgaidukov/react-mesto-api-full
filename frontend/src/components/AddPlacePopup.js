import { useEffect } from 'react';
import { useForm } from '../hooks/hooks';
import Input from './Input';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
    const { values, handleChange, setValues } = useForm({});

    useEffect(() => {
        setValues({
            cardName: '',
            imgLink: ''
        })
    }, [isOpen])

    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({
            name: values.cardName,
            link: values.imgLink
        })
    }

    return (
        <PopupWithForm
            name="add-card"
            isOpen={isOpen}
            onClose={onClose}
            title="Новое место"
            submitButtonName="Создать"
            submitButtonNameOnLoading="Создание ..."
            isLoading={isLoading}
            onSubmit={handleSubmit}
        >
            <label className="popup__field">
                <Input
                    type={"text"}
                    id={"card-name-input"}
                    name={"cardName"}
                    className={"popup__input popup__input_type_card-name"}
                    placeholder={"Название"}
                    required={true}
                    minLength={"2"}
                    maxLength={"40"}
                    value={values.cardName || ''}
                    onChange={handleChange}
                >
                </Input>
            </label>
            <label className="popup__field">
                <Input
                    type={"url"}
                    id={"img-link-input"}
                    name={"imgLink"}
                    className={"popup__input popup__input_type_img-link"}
                    placeholder={"Ссылка на картинку"}
                    required={true}
                    value={values.imgLink || ''}
                    onChange={handleChange}
                >
                </Input>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup;