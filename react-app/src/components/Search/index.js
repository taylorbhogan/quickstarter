import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SearchProject from "./SearchProject";
import { getProjectsByKeyword } from "../../store/search";
import { getCategories } from "../../store/category";
import { getSubCategories } from "../../store/subCategory";
import styles from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { keyword } = useParams();

  const projects = useSelector((state) => Object.values(state.search));
  const categories = useSelector((state) => Object.values(state.categories));
  const subCategories = useSelector((state) =>
    Object.values(state.subCategories)
  );

  const [inputKeyword, setInputKeyword] = useState("" || keyword);

  useEffect(() => {
    dispatch(getProjectsByKeyword(keyword));
    dispatch(getCategories());
    dispatch(getSubCategories());
  }, [dispatch, keyword]);

  useEffect(() => {
    history.push(`/search/${inputKeyword}`);
  }, [inputKeyword]);

  return (
    <>
      <div className={styles.background}>
        <div className={styles.inputsContainer}>
          <span>Show me</span>
          <input
            type="text"
            value={inputKeyword}
            onChange={(e) => setInputKeyword(e.target.value)}
            className={styles.keywordInput}
            le
            style={{ width: inputKeyword.length + "ch" }}
            autoFocus
          />
          <span>projects in</span>
          <input type="select" />
        </div>
      </div>
      <div className={styles.resultsContainer}>
        <div className={styles.explore}>
          Explore{" "}
          <span className={styles.exploreLength}>
            {projects?.length} projects
          </span>
        </div>
        <div className={styles.projectsContainer}>
          {projects?.map((project) => (
            <div>
              <SearchProject
                project={project}
                categories={categories}
                subCategories={subCategories}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
