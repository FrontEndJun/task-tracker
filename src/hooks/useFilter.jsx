import { useEffect, useCallback, useReducer } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useFetch } from "./useFetch";

export const useFilter = () => {
  const history = useHistory();
  const l = useLocation();
  const { req, loading } = useFetch();

  const [state, dispatch] = useReducer(filterReducer, {
    task: {
      list: [],
      all: 0,
    },
    filterName: "",
    filterDir: "ASC",
    currentPage: 1,
    loading: false,
    perPage: 3,
  });

  const filter = useCallback(() => {
    history.push(`/tasks/?page=${state.currentPage}&filter=${state.filterName}&dir=${state.filterDir}&perPage=${state.perPage}`);
  }, [state.filterDir, state.filterName, state.currentPage, state.perPage]);

  useEffect(() => {
    filter();
  }, [filter]);

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: loading });
  }, [loading]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await req(`/tasks/${l.search}`);
      dispatch({ type: "FETCH_TASKS", payload: { list: res.tasks || [], all: res.all } });
    };
    fetchData();
  }, [l.search]);

  return { state, dispatch, filter };
};

function filterReducer(state, action) {
  switch (action.type) {
    case "CHANGE_FILTER_NAME":
      return { ...state, filterName: action.payload };
    case "CHANGE_FILTER_DIRECTION":
      return { ...state, filterDir: action.payload };
    case "NEXT_PAGE":
      return { ...state, currentPage: state.currentPage + 1 };
    case "PREV_PAGE":
      return { ...state, currentPage: state.currentPage - 1 };
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };
    case "FETCH_TASKS":
      const { list, all } = action.payload;
      return { ...state, task: { list, all } };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "QUERY_CHANGED":
      return { ...state, ...action.payload };
    case "CHANGE_TASKS_PER_PAGE":
      return { ...state, perPage: parseInt(action.payload, 10) };
    default:
      return state;
  }
}
