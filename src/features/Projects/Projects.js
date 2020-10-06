import { Grid } from "@geist-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { selectProjects } from "../../features/Projects/ProjectSlice";

import Project from "../../components/Project";

const Projects = () => {
  const allProjects = useSelector(selectProjects);
  return (
    <div>
      <Grid.Container gap={3} justify="center">
        {allProjects.map((project, i) => (
          <Grid xs={24} md={12} key={i}>
            <Project data={project} />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default Projects;
