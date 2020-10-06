import React from "react";
import "./App.css";
import { Button, Text, Grid, Spacer, Divider } from "@geist-ui/react";
import { useDispatch } from "react-redux";

import { toggleModal } from "./features/Projects/ProjectSlice";
import Project from "./features/Projects/Projects";
import ProjectAddModal from "./components/ProjectAddModal";
import { ProjectDetail } from "./features/Projects/ProjectDetail";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Text h2>Dead Simple PM Tool</Text>
      <Divider />
      <Spacer y={1} />
      <Button type="secondary" shadow onClick={() => dispatch(toggleModal())}>
        Add New Project
      </Button>
      <Spacer y={3} />
      <ProjectAddModal />
      <Grid.Container gap={4} justify="center">
        <Grid xs={24} md={12}>
          <ProjectDetail />
        </Grid>
        <Grid xs={24} md={12}>
          <Project />
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default App;
