import Popup from "./Popup";

function ImagePopup({ card, isOpen, onClose }) {
    return (
        <div className="popup_dark-background">
            <Popup
                name={'image'}
                isOpen={isOpen}
                onClose={onClose}
            >
                <img src={card?.link} alt={card?.name} className="popup__image" />
                <p className="popup__label">{card?.name}</p>
            </Popup>
        </div>
    )
}

export default ImagePopup;