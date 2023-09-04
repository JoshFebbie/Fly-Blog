import { format } from "date-fns";
import { NavLink } from "react-router-dom";

export default function Post({_id, title,summary,cover,content,createdAt,author,}) {

  return (
    <div className="post">
      <div className="image">
        <NavLink to={`/post/${_id}`}>
          <img src={`http://localhost:4000/${cover}`} alt="" />
        </NavLink>
      </div>
      <div className="texts">
        <NavLink to={`/post/${_id}`}>
          <h2>{title}</h2>
        </NavLink>
        <p className="info">
          <a className="author"> {author.username}</a>
          <time>{format(new Date(createdAt), "MMMM d, yyyy HH:mm")}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
