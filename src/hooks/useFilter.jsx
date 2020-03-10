import { useState, useEffect, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";

export const useFilter = () => {
  const [filterName, setFilterName] = useState("");
  const [filterDir, setFilterDir] = useState("");
  const history = useHistory();
  const { page } = useParams();
  const filter = useCallback(() => {
    history.push(`/tasks/${page}?filter=${filterName}&dir=${filterDir}`);
  }, [filterDir, filterName, page]);

  const changeDir = () => {
    const dir = filterDir === "" ? "DESC" : "";
    setFilterDir(dir);
  };
  const changeFilter = name => {
    setFilterName(name);
  };

  useEffect(() => {
    filter();
  }, [filter]);

  return { filterName, filterDir, page, changeDir, changeFilter, filter };
};
