'use client';

import { createContext, useContext, useState } from 'react';

const ModalContext = createContext({
  showModal: false,
  setShowModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);