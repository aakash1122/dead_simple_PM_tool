import React from "react";
import { Button, Card, Grid, Text } from "@geist-ui/react";
import { useDispatch } from "react-redux";
import { addToDoing, addToDone } from "../features/Projects/ProjectSlice";

const styles = {
  task: {
    textTransform: "Capitalize",
  },
  actionWrapper: {
    width: "fit-content",
    marginLeft: "auto",
  },
};

const Task = ({ data, done, taskIndex }) => {
  const dispatch = useDispatch();

  return (
    <Grid xs={24}>
      <Card type={done ? "cyan" : data.doing ? "secondary" : "default"}>
        <Text size="1.5rem" style={styles.task}>
          {data.task}
        </Text>
        <div style={styles.actionWrapper}>
          {done ? null : (
            <>
              {!data.doing ? (
                <Button
                  auto
                  style={{ marginRight: 10 }}
                  onClick={() => dispatch(addToDoing(taskIndex))}
                >
                  Active
                </Button>
              ) : (
                <Button
                  auto
                  type="success-light"
                  onClick={() => dispatch(addToDone(taskIndex))}
                >
                  done
                </Button>
              )}
            </>
          )}
        </div>
      </Card>
    </Grid>
  );
};

export default Task;
