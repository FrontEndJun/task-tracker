import React, { useEffect } from "react";
import { Pagination } from "../components/Pagination";
import { TaskCreator } from "../components/TaskCreator";
import { Filter } from "../components/Filter";
import { TasksList } from "../components/TasksList";
import { useFilter } from "../hooks/useFilter";
import { TasksContext } from "../context/tasks.context";

export const TaskPage = () => {
  const { dispatch, state, filter } = useFilter();

  useEffect(() => {
    filter();
  }, []);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <TaskCreator />
        <Filter />
        <TasksList />
        <Pagination />
      </div>
    </TasksContext.Provider>
  );
};
