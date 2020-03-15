import React, { useContext } from "react";
import { Loader } from "./Loader";
import { TaskItem } from "./TaskItem";
import { TasksContext } from "../context/tasks.context";
export const TasksList = () => {
  const { state } = useContext(TasksContext);

  return state.loading ? (
    <Loader />
  ) : (
    <table>
      <thead>
        <tr className="row">
          <th className="col s3">Email</th>
          <th className="col s2">Username</th>
          <th className="col s4">Task Text</th>
          <th className="col s2">Completed</th>
          <th className="col s1"></th>
        </tr>
      </thead>
      {state.task.list && (
        <tbody>
          {state.task.list.map(task => (
            <TaskItem key={task.id} {...task} />
          ))}
        </tbody>
      )}
    </table>
  );
};
