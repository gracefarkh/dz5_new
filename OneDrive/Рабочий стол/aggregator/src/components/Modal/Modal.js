import React, {useState} from 'react';
import styles from './modal.module.css'
import modalImg from '../../assets/other/modal.jpg'

const Modal = () => {

    const Modal = ({isOpen, onClose, children}) => {
        if (!isOpen) {
            return null;
        }

        return (
            <div className={styles.modal}>
                <div className={styles.modal_content}>
                    <span className={styles.close} onClick={onClose}>&times;</span>
                    {children}
                </div>
            </div>
        );
    };

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <div className={styles.allModal}>
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <h2>Modal Title</h2>
                    <p>This is the modal content.</p>
                </Modal>
            </div>
        </div>
    );
};

export default Modal;