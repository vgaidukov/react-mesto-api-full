import PopupWithForm from './PopupWithForm';

function ConfirmCardDelete({ card, isOpen, onClose, onConfirmDelete, isLoading }) {
    function handleSubmit(e) {
        e.preventDefault();
        onConfirmDelete(card)
    }

    return (
        <PopupWithForm
            name="card-delete-confirmation"
            isOpen={isOpen}
            onClose={onClose}
            title="Вы уверены?"
            submitButtonName="Да"
            submitButtonNameOnLoading="Удаление ..."
            isLoading={isLoading}
            onSubmit={handleSubmit}>
        </PopupWithForm>
    )
}

export default ConfirmCardDelete;