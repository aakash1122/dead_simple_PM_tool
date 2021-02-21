import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Input, Row } from "@geist-ui/react";
import { useDispatch } from "react-redux";
import { addTask, toggleShowAddTask } from "../features/Projects/ProjectSlice";
import { Delete } from "@geist-ui/react-icons";

const AddTask = () => {
  // input ref
  let inputRef = useRef(null);

  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  // focus input on render
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addTaskHandler = () => {
    if (task.trim().length) {
      setTask("");
      dispatch(addTask(task));
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addTaskHandler();
    }
  };

  return (
    <Row gap={0.8} style={{ marginBottom: "15px" }}>
      <Col span={14}>
        <Input
          ref={inputRef}
          width="100%"
          size="large"
          value={task}
          placeholder="New Task...."
          required
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleEnter}
        />
      </Col>
      <Col span={10}>
        <Button type="success" size="medium" onClick={addTaskHandler}>
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
