import {
  Button,
  Card,
  Col,
  Divider,
  Grid,
  Row,
  Spacer,
  Tabs,
  Text,
} from "@geist-ui/react";
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
    <div className="project-details">
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
        <div style={{ padding: "15px 5px" }}>
          {showAddTask ? (
            <AddTask />
          ) : (
            <Button
              auto
              iconRight={<Plus size={22} />}
              onClick={() => dispatch(toggleShowAddTask())}
            />
          )}
        </div>
        <Tabs initialValue="1">
          <Spacer y={1} />
          <Grid.Container gap={1.8} style={{ textAlign: "left" }}>
            <Tabs.Item label="To-Do" value="1">
              {activeProject.wip.length ? (
                activeProject.wip.map((todo, i) => (
                  <Task data={todo} key={todo.id} taskIndex={i} />
                ))
              ) : (
                <Text h4 style={textStyle}>
                  No To-Do
                </Text>
              )}
            </Tabs.Item>
            {/* completed */}
            <Tabs.Item label="Done" value="2">
              {activeProject.completed.length ? (
                activeProject.completed.map((todo, i) => (
                  <Task data={todo} key={todo.id} done taskIndex={i} />
                ))
              ) : (
                <Text h4 style={textStyle}>
                  No completed task.
                </Text>
              )}
            </Tabs.Item>
          </Grid.Container>
        </Tabs>
      </Card>
    </div>
  );
};

const textStyle = {
  margin: "10px 0px",
  textAlign: "center",
  width: "100%",
};
