import Popup from "./Popup";

function InfoTooltip({
    infoTooltipMessage,
    name,
    onClose,
    isOpen
}
) {
    return (
        <Popup
            name={name}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className={`popup__window popup__window_type_${name} popup__content`}>
                <img alt='message' src={infoTooltipMessage.img} />
                <h3 className={`popup__title popup__title_type_${name}`}>{infoTooltipMessage.title}</h3>
            </div>
        </Popup>
    )
}

export default InfoTooltip;