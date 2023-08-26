/* eslint-disable react/prop-types */
import { useEffect } from "react";

const PostsRoute = ({ navigate }) => {
  useEffect(() => {
    navigate("/posts");
  }, [navigate]);

  return null;
};

export default PostsRoute;
