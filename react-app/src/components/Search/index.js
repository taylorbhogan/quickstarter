import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProjectsByKeyword } from "../../store/search";
import styles from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const projects = useSelector((state) => Object.values(state.search));

  useEffect(() => {
    dispatch(getProjectsByKeyword(keyword));
  }, [dispatch, keyword]);

  return projects?.map((project) => <div>{project.title}</div>);
};

export default Search;
