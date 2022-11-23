import React from 'react';

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  modalData,
  successAction,
  successButtonName,
}) => {
  return (
    <div>
      <input type="checkbox" id="Confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button onClick={closeModal} className="btn btn-outline">
              NO
            </button>

            <label
              onClick={() => successAction(modalData)}
              htmlFor="Confirmation-modal"
              className="btn btn-outline"
            >
              {successButtonName}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;