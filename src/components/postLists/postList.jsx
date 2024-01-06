import React from "react";
import {
  useDeletePostDataMutation,
  useGetPostDataQuery,
} from "../../app/services/postApiSlice/postApiSlice";
import { useSelector } from "react-redux";

const PostList = () => {
  const { data, error, isLoading, isError } = useGetPostDataQuery();
  const [deletePost, { isLoading: postLoading }] = useDeletePostDataMutation();
  const { post } = useSelector((state) => state.post);
  const handleDeletePost = async (id) => {
    let deletePostResponce = await deletePost(id);
  };
  return (
    <div className="post-list-container">
      {/* {isLoading && <h1>Loading....</h1>}
      {isError && <h1>{error.message}</h1>} */}
      {post &&
        post?.map((elm) => {
          return (
            <div className="post-list" key={elm.id}>
              <div>
                <input type="checkbox" name="" id="" />
                <span> {elm.title}</span>
              </div>
              <div>
                <button>Edit</button>
                <button
                  onClick={() => {
                    handleDeletePost(elm.id);
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
