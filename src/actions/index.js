import jsonPlaceHolder from "../api/jsonPlaceHolder";

// ACTION CREATOR
export const fetchPosts = () => {
  //BAD APPROACH!!!
  //   const response = await jsonPlaceHolder.get("/post");

  //   return {
  //     type: "FETCH_POST",
  //     payload: response,
  //   };
  //>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<

  // YE CHALENGA
  return async function (dispatch, getState) {
    const response = await jsonPlaceHolder.get("/posts");

    //ACTION
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};
