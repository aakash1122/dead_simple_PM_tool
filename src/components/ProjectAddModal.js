import React, { useState } from "react";
import { Button, Input, Modal, Spacer } from "@geist-ui/react";
import { useSelector, useDispatch } from "react-redux";

import {
  addProject,
  selectModal,
  closeModal,
} from "../features/Projects/ProjectSlice";

const ProjectAddModal = () => {
  const [title, setTitle] = useState("");
  const [emptyTitle, setEmptyTitle] = useState(false);
  const modalState = useSelector(selectModal);

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!title.trim().length) {
      return setEmptyTitle(true);
    }
    setTitle("");
    dispatch(closeModal());
    dispatch(addProject(title));
  };

  return (
    <div>
      <Modal open={modalState} onClose={() => dispatch(closeModal())}>
        <Modal.Title>Add New Project</Modal.Title>
        <Modal.Content>
          <Input
            size="large"
            status={emptyTitle && !title ? "error" : "default"}
            width="100%"
            placeholder="Project Title"
            autoFocus
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Spacer y={1} />
          <Button ghost type="secondary" onClick={handleAdd}>
            ADD
          </Button>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ProjectAddModal;
