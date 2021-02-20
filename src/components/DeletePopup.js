import { Modal, Text, useClickAway } from "@geist-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteProject } from "../features/Projects/ProjectSlice";

const DeletePopup = ({ show, setShow }) => {
  const dispatch = useDispatch();

  const ref = React.useRef();
  // hide modal when clicked outside
  useClickAway(ref, () => {
    if (show) {
      setShow(false);
    }
  });

  if (!show) return null;
  return (
    <div ref={ref}>
      <Modal open={show} onClose={() => setShow(false)}>
        <Modal.Content style={{ textAlign: "center" }}>
          <Text size={20}>
            Are you sure you want to delete this <b>project</b> ?
          </Text>
        </Modal.Content>
        <Modal.Action passive onClick={() => setShow(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action onClick={() => dispatch(deleteProject())}>
          Yes
        </Modal.Action>
      </Modal>
    </div>
  );
};

export default DeletePopup;
