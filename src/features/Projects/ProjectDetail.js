import React from "react";
import { Card, Checkbox, Col, Divider, Grid, Row, Text } from "@geist-ui/react";
import Edit2 from "@geist-ui/react-icons/edit2";
import Plus from "@geist-ui/react-icons/plus";
import { useSelector, useDispatch } from "react-redux";
//
import {
  selectActiveProject,
  selectShowAddTask,
  toggleShowAddTask,
} from "./ProjectSlice";
import AddTask from "../../components/AddTask";
import Task from "../../components/Task";

export const ProjectDetail = () => {
  const dispatch = useDispatch();
  const activeProject = useSelector(selectActiveProject);
  const showAddTask = useSelector(selectShowAddTask);
  return (
    <Card>
      <Row
        gap={0.8}
        style={{ marginBottom: "15px" }}
        justify="start"
        align="middle"
      >
        <Col>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text
              h3
              type="success"
              style={{ textAlign: "left", margin: "0px 15px 0px 0px" }}
            >
              {activeProject.name}
            </Text>
            <Edit2 size={20} />
          </div>
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
            <Task data={todo} key={todo.id} />
          ))}
        {activeProject.completed &&
          activeProject.completed.map((todo, i) => (
            <Task data={todo} key={todo.id} done />
          ))}
      </Grid.Container>
    </Card>
  );
};
