import { Card, Text } from "@geist-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import {
  selectActiveProject,
  activateProject,
} from "../features/Projects/ProjectSlice";

const variants = {
  initial: { x: 400 },
  animate: { x: 0 },
  exit: { x: 400 },
};

const Project = ({ data }) => {
  const dispatch = useDispatch();

  const { name, id } = data;

  const activeProject = useSelector(selectActiveProject);

  const isActive = activeProject.id === id;

  return (
    <motion.div
      initial={variants.initial}
      animate={variants.animate}
      exit={variants.exit}
      transition={{ duration: 0.3 }}
    >
      <Card
        hoverable
        type={isActive ? "violet" : "default"}
        onClick={() => dispatch(activateProject(id))}
        style={{ cursor: "pointer" }}
      >
        <Text h3>{name}</Text>
      </Card>
    </motion.div>
  );
};

export default Project;
