import { Card, Col, Divider, Grid, Row } from "@geist-ui/react";
import Plus from "@geist-ui/react-icons/plus";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTask from "../../components/AddTask";
import ProjectTitle from "../../components/ProjectTitle";
import Task from "../../components/Task";
import { ReactComponent as Trash } from "../../assets/trash.svg";

import {
  selectActiveProject,
  selectShowAddTask,
  toggleShowAddTask,
} from "./ProjectSlice";
import DeletePopup from "../../components/DeletePopup";

export const ProjectDetail = () => {
  //show popup when set to true
  const [deleteConfirmPopup, setDeleteConfirmPopup] = useState(false);

  const dispatch = useDispatch();
  const activeProject = useSelector(selectActiveProject);
  const showAddTask = useSelector(selectShowAddTask);
  return (
    <>
      <DeletePopup show={deleteConfirmPopup} setShow={setDeleteConfirmPopup} />
      <Card>
        <Row
          gap={0.8}
          style={{ marginBottom: "15px", position: "relative" }}
          justify="start"
          align="middle"
        >
          <Trash
            style={{
              height: 25,
              position: "absolute",
              right: 0,
              cursor: "pointer",
            }}
            onClick={() => setDeleteConfirmPopup(true)}
          />
          <Col>
            <ProjectTitle name={activeProject?.name} />
          </Col>
        </Row>
        <Divider />
        <Grid.Container gap={1.8} style={{ textAlign: "left" }}>
          {!showAddTask ? (
            <Grid xs={24}>
              <Plus size={22} onClick={() => dispatch(toggleShowAddTask())} />
            </Grid>
          ) : null}
          {showAddTask ? (
            <Grid xs={24}>
              <AddTask />
            </Grid>
          ) : null}
          {activeProject.wip &&
            activeProject.wip.map((todo, i) => (
              <Task data={todo} key={todo.id} taskIndex={i} />
            ))}
          {/* completed */}
          {activeProject.completed &&
            activeProject.completed.map((todo, i) => (
              <Task data={todo} key={todo.id} done taskIndex={i} />
            ))}
        </Grid.Container>
      </Card>
    </>
  );
};
