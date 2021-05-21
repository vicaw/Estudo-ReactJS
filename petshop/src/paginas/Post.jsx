import React, { useEffect, useState } from "react";
import { busca } from "../api/api";
import { useParams, useHistory } from "react-router-dom";
import "../assets/css/post.css";

const Post = () => {
  let history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    busca(`/posts/${id}`, setPost).catch(() => {
      history.push("/404");
    });
  }, [id]);

  return (
    <section className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="cartao__texto">{post.body}</p>
      </article>
    </section>
  );
};

export default Post;
