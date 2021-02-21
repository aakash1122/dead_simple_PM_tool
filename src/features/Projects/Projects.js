import { Grid } from "@geist-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { selectProjects } from "../../features/Projects/ProjectSlice";
import { AnimatePresence } from "framer-motion";

import Project from "../../components/Project";

const Projects = () => {
  const allProjects = useSelector(selectProjects);
  return (
    <div className="projects">
      <Grid.Container gap={3} justify="center">
        <AnimatePresence>
          {allProjects.map((project, i) => (
            <Grid xs={24} md={12} key={i}>
              <Project data={project} />
            </Grid>
          ))}
        </AnimatePresence>
      </Grid.Container>
    </div>
  );
};

export default Projects;
