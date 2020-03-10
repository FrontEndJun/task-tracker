import React, { useState, useEffect } from "react";
import { Pagination } from "../components/Pagination";
import { TaskCreator } from "../components/TaskCreator";
import { useParams, useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Filter } from "../components/Filter";
import querystring from "query-string";
import { TasksList } from "../components/TasksList";

export const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [pagesAmount, setPagesAmount] = useState(1);
  const { req, loading } = useFetch();
  const { page } = useParams();
  const l = useLocation();
  const search = querystring.parse(l.search);

  useEffect(() => {
    const fetchData = async () => {
      const res = await req(`/tasks/${page}?filter=${search.filter}&dir=${search.dir}`);
      setTasks(res.tasks);
      setPagesAmount(Math.ceil(res.all / 3));
    };

    fetchData();
  }, [page, req, l]);

  console.count("render");
  return (
    <div className="container">
      <TaskCreator />
      <Filter />
      <TasksList tasks={tasks} loading={loading} />
      <Pagination currentPage={parseInt(page, 10)} pages={pagesAmount} />
    </div>
  );
};
