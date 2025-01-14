'use client';

import { useModal } from '../providers/ModalProvider';

const ScheduleButton = ({ className, children }) => {
  const { setShowModal } = useModal();

  return (
    <button
      onClick={() => setShowModal(true)}
      className={className}
    >
      {children}
    </button>
  );
};

export default ScheduleButton;