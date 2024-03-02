"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const FilterModal = ({ visible, setVisible }) => {
  const divRef = useRef();

  const closeModal = (e) => {
    if (e.target === divRef.current) {
      setVisible(false);
    }
  };

  return visible ? (
    <div className="modal-bg" ref={divRef} onClick={closeModal}>
      {/* <motion.div></motion.div> */}
    </div>
  ) : null;
};

export default FilterModal;
