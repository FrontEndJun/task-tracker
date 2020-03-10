import React from "react";
import { Loader } from "./Loader";
import { TaskItem } from "./TaskItem";
export const TasksList = ({ tasks, loading }) => {
  return (
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
      {loading ? (
        <Loader />
      ) : (
        tasks && (
          <tbody>
            {tasks.map(task => (
              <TaskItem key={task.id} {...task} />
            ))}
          </tbody>
        )
      )}
    </table>
  );
};
