import Popup from "./Popup";
import Form from "./Form";

function PopupWithForm({
    name,
    isOpen,
    onClose,
    title,
    submitButtonName,
    submitButtonNameOnLoading,
    onSubmit,
    isLoading,
    children
}
) {
    return (
        <Popup
            name={name}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className={`popup__window popup__window_type_${name} popup__content`}>
                <Form
                    name={name}
                    elementName={'popup'}
                    title={title}
                    submitButtonName={submitButtonName}
                    submitButtonNameOnLoading={submitButtonNameOnLoading}
                    isLoading={isLoading}
                    onSubmit={onSubmit}
                >
                    {children}
                </Form>
            </div>
        </Popup >
    )
}

export default PopupWithForm;