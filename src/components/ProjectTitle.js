import { Button, Input } from "@geist-ui/react";
import Edit2 from "@geist-ui/react-icons/edit2";
import React from "react";
import { useState } from "react";
import Check from "@geist-ui/react-icons/check";
import { useSelector, useDispatch } from "react-redux";
import { updateProjectName } from "../features/Projects/ProjectSlice";

const ProjectTitle = ({ name }) => {
  const dispatch = useDispatch();

  const [newName, setNewName] = useState(name);
  //state to toggle input
  const [allowEdit, setAllowEdit] = useState(false);

  // get active project id
  const activeProjectId = useSelector((state) => state.project.activeProjectId);

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
          <h4>{name}</h4>
        )}

        {!allowEdit && (
          <div style={{ marginLeft: 20 }}>
            <Edit2 size={20} onClick={() => setAllowEdit(true)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectTitle;
