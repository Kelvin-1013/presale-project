// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-5 bg-white rounded-lg shadow-lg">
                <h2 className="text-lg font-bold">Confirm Submission</h2>
                <p>Are you sure you want to create this presale?</p>
                <div className="flex justify-end mt-4">
                    <button onClick={onClose} className="px-4 py-2 mr-2 text-black bg-gray-300 rounded">Cancel</button>
                    <button onClick={onConfirm} className="px-4 py-2 text-white bg-green-600 rounded">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
