import api from "../api";

const postApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getPostData: builder.query({
      query: () => `posts`,
      providesTags: ["post"],
    }),
    addPostData: builder.mutation({
      query: (body) => ({
        url: "posts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["post"],
    }),
    updatePostData: builder.mutation({
      query: (body) => ({
        url: "posts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["post"],
    }),
    deletePostData: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["post"],
    }),
  }),
});

export const {
  useGetPostDataQuery,
  useAddPostDataMutation,
  useUpdatePostDataMutation,
  useDeletePostDataMutation,
} = postApiSlice;
