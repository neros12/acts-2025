import { Link } from "react-router-dom";

export function BaseLink({ className, children, url, ...otherProps }) {
  return (
    <Link to={url} {...otherProps}>
      {children}
    </Link>
  );
}
