function Form({
    name,
    elementName,
    title,
    submitButtonName,
    submitButtonNameOnLoading,
    isLoading,
    onSubmit,
    children
}
) {
    return (
        <form
            name={name}
            className={`${elementName}__form`}
            onSubmit={onSubmit}>
            <h3 className={`${elementName}__title ${elementName}__title_type_${name}`}>{title}</h3>

            {children}

            <button
                type="submit"
                className={`button ${elementName}__submit-button`}>
                {!isLoading ? submitButtonName : submitButtonNameOnLoading}
            </button>
        </form>
    )
}

export default Form;