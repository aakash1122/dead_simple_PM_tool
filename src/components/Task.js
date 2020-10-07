import { Card, Grid, Text } from "@geist-ui/react";
import React from "react";

const Task = ({ data, done }) => {
  console.log(data);
  return (
    <Grid xs={24}>
      <Card type={done ? "cyan" : data.doing ? "secondary" : "default"}>
        <Text size="1.5rem">{data.task}</Text>
      </Card>
    </Grid>
  );
};

export default Task;
