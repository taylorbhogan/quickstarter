import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchDropdown from "./SearchDropdown";
import SearchProject from "./SearchProject";
import { getProjectsByKeyword } from "../../store/search";
import { getCategories } from "../../store/category";
import { getSubCategories } from "../../store/subCategory";
import styles from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch();

  const projects = useSelector((state) => Object.values(state.search));
  const categories = useSelector((state) => Object.values(state.categories));
  const subCategories = useSelector((state) =>
    Object.values(state.subCategories)
  );

  const [inputKeyword, setInputKeyword] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSubCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProjectsByKeyword(inputKeyword, +selectedCategoryId));
  }, [dispatch, inputKeyword, selectedCategoryId]);

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
            style={{
              width: inputKeyword ? inputKeyword.length + 3 + "ch" : "4ch",
            }}
            autoFocus
          />
          <span>projects in</span>
          <SearchDropdown
            categories={categories}
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId}
          />
        </div>
      </div>
      <div className={styles.resultsContainer}>
        <div className={styles.explore}>
          Explore{" "}
          <span className={styles.exploreLength}>
            {projects?.length} {projects?.length !== 1 ? "projects" : "project"}
          </span>
        </div>
        <div className={styles.projectsContainer}>
          {projects?.map((project) => (
            <div key={project.id}>
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
