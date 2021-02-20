import { Button, Input } from "@geist-ui/react";
import Check from "@geist-ui/react-icons/check";
import Edit2 from "@geist-ui/react-icons/edit2";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProjectName } from "../features/Projects/ProjectSlice";

const ProjectTitle = ({ name }) => {
  const dispatch = useDispatch();

  const [newName, setNewName] = useState(name);
  //state to toggle input
  const [allowEdit, setAllowEdit] = useState(false);

  /**
   * update name of a project and hide the input element
   */
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      dispatch(updateProjectName(newName));
      setAllowEdit(false);
    }
  };

  const handleDone = () => {
    dispatch(updateProjectName(newName));
    setAllowEdit(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {allowEdit ? (
          <>
            <Input
              size="large"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={{ outline: "none", border: "none" }}
              onKeyPress={handleEnterPress}
            />
            <Button
              iconRight={<Check />}
              auto
              style={{ marginLeft: 10 }}
              onClick={handleDone}
            />
          </>
        ) : (
          <div>
            <h4>{name}</h4>
          </div>
        )}

        {!allowEdit && (
          <div style={{ marginLeft: 20, cursor: "pointer" }}>
            <Edit2 size={18} onClick={() => setAllowEdit(true)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectTitle;
