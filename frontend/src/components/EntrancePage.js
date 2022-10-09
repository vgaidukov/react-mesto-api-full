import Form from "./Form";
import Input from "./Input";

function EntrancePage({
    name,
    title,
    submitButtonName,
    submitButtonNameOnLoading,
    children,
    onSubmit,
    isLoading,
    onChange,
    email,
    password
}) {
    return (
        <div className={`entrance-page entrance-page_type_${name}`}>
            <Form
                elementName={'entrance-page'}
                name={name}
                title={title}
                submitButtonName={submitButtonName}
                submitButtonNameOnLoading={submitButtonNameOnLoading}
                isLoading={isLoading}
                onSubmit={onSubmit}>
                <label className="entrance-page__field">
                    <Input
                        type="email"
                        id="email-input"
                        name="email"
                        className="entrance-page__input entrance-page__input_type_email"
                        placeholder="Email"
                        required
                        minLength="2"
                        maxLength="40"
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label className="entrance-page__field">
                    <Input
                        type="password"
                        id="password-input"
                        name="password"
                        className="entrance-page__input entrance-page__input_type_password"
                        placeholder="Пароль"
                        required
                        minLength="2"
                        maxLength="40"
                        value={password}
                        onChange={onChange}
                    />
                </label>
            </Form>

            {children}

        </div>
    )
}

export default EntrancePage;