import React from "react";
import "./App.css";
import { Button, Text, Grid, Spacer, Divider } from "@geist-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { toggleModal } from "./features/Projects/ProjectSlice";
import Projects from "./features/Projects/Projects";
import ProjectAddModal from "./components/ProjectAddModal";
import { ProjectDetail } from "./features/Projects/ProjectDetail";

function App() {
  const dispatch = useDispatch();
  let projects = useSelector((state) => state.project.projects);

  return (
    <div className="App">
      <ProjectAddModal />
      <Text h3 type="secondary">
        Dead Simple PM Tool
      </Text>
      <Divider />
      <Spacer y={1} />
      {!projects.length ? (
        <>
          <Text h2 type="success" style={{ marginBottom: 30 }}>
            You don't have any project.
          </Text>
          <Button
            type="secondary"
            shadow
            onClick={() => dispatch(toggleModal())}
          >
            Add New Project
          </Button>
        </>
      ) : (
        <>
          <Button
            type="secondary"
            shadow
            onClick={() => dispatch(toggleModal())}
          >
            Add New Project
          </Button>
          <Spacer y={3} />
          <Grid.Container gap={4} justify="center">
            <Grid xs={24} md={12}>
              <ProjectDetail />
            </Grid>
            <Grid xs={24} md={12}>
              <Projects />
            </Grid>
          </Grid.Container>
        </>
      )}
    </div>
  );
}

export default App;
