import React, { useState } from "react";
import { Button, Col, Input, Row } from "@geist-ui/react";
import { useDispatch } from "react-redux";
import { addTask, toggleShowAddTask } from "../features/Projects/ProjectSlice";
import { Delete } from "@geist-ui/react-icons";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  return (
    <Row gap={0.8} style={{ marginBottom: "15px" }}>
      <Col span={14}>
        <Input
          width="100%"
          size="large"
          placeholder="Large Input"
          onChange={(e) => setTask(e.target.value)}
        />
      </Col>
      <Col span={10}>
        <Button
          type="secondary"
          ghost
          size="medium"
          onClick={() => {
            dispatch(addTask(task));
            setTask("");
          }}
        >
          ADD TASK
        </Button>
        <Button
          iconRight={<Delete />}
          auto
          size="medium"
          style={{ marginLeft: 10 }}
          onClick={() => dispatch(toggleShowAddTask())}
        />
      </Col>
    </Row>
  );
};

export default AddTask;
