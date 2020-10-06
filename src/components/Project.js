import { Card, Text } from "@geist-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectActiveProject,
  activateProject,
} from "../features/Projects/ProjectSlice";

const Project = ({ data }) => {
  const dispatch = useDispatch();

  const { name, id } = data;

  const activeProject = useSelector(selectActiveProject);

  const isActive = activeProject.id === id;
  console.log(isActive);

  return (
    <Card
      hoverable
      type={isActive ? "violet" : "default"}
      onClick={() => dispatch(activateProject(id))}
    >
      <Text h3>{name}</Text>
    </Card>
  );
};

export default Project;
