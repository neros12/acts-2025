import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  useEffect(() => {
    alert("Registration is currently not open");
    navigate(-1);
  }, []);

  return <></>;
}
