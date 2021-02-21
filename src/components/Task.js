import { Button, Card, Grid, Text } from "@geist-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { addToDoing, addToDone } from "../features/Projects/ProjectSlice";

const variants = {
  initial: { x: -400 },
  animate: { x: 0 },
};

const styles = {
  task: {
    textTransform: "Capitalize",
    margin: 0,
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
      <motion.div
        initial={variants.initial}
        animate={variants.animate}
        // exit={variants.exit}
        transition={{
          x: { type: "tween", stiffness: 0 },
          default: { duration: 0.3 },
        }}
      >
        <Card type={done ? "cyan" : data.doing ? "secondary" : "violet"}>
          <Text size="1.2rem" style={styles.task}>
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
      </motion.div>
    </Grid>
  );
};

export default Task;
