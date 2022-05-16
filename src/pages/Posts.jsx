import React, { useEffect, useState } from "react";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";

import PostList from "../components/PostList";
import MyButton from "../components/UI/Button/myButton";
import MyModal from "../components/UI/MyModal/MyModal";
import { usePosts } from "../hooks/usePosts";
// import "../styles/App.css";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFethcing } from "../hooks/useFatching";
import { getPageCount } from "../utils/pages";
import PagesList from "../components/UI/Pages/PagesList";

const Posts = () => {
  let [posts, setPosts] = useState([]);
  const [filetr, setFilter] = useState({ sort: "", query: "" });
  const [modalVisibilyty, setModalVisibilyty] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filetr.sort, filetr.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisibilyty(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => post.id !== p.id));
  };

  const [fetchPosts, isPostsLoading, postError] = useFethcing(async () => {
    let response;
    if (filetr.query) {
      response = await PostService.getAll(999, 1);
    } else {
      response = await PostService.getAll(limit, page);
    }

    setPosts(response.data);
    console.log(response.headers["x-total-count"]);
    const totatlCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totatlCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page, filetr.query]);

  return (
    <div className="rootApp">
      <div className="App">
        <MyModal visible={modalVisibilyty} setVisible={setModalVisibilyty}>
          <PostForm create={createPost} />
        </MyModal>
        <MyButton
          style={{ marginTop: "15px" }}
          onClick={() => setModalVisibilyty(true)}
        >
          Создать пост
        </MyButton>
        <div style={{ margin: "15px 0" }} />
        <PostFilter filetr={filetr} setFilter={setFilter} />
        {postError && <h1>Произошла ошибка {postError.toString()}</h1>}
        {isPostsLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Loader />
          </div>
        ) : (
          <PostList
            posts={sortedAndSearchedPosts}
            title={"Список постов"}
            removeFunc={removePost}
          />
        )}
        {filetr.query ? (
          <div style={{ marginBottom: "50px" }}></div>
        ) : (
          <PagesList
            maxPages={totalPages}
            currentPage={page}
            onClick={(e) => setPage(e)}
            pages={sortedAndSearchedPosts}
          />
        )}
      </div>
    </div>
  );
};

export default Posts;
