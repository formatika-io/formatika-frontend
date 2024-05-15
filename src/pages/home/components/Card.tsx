import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  to: string;
}

function Card(props: CardProps) {
  return (
    <Link
      to={props.to}
      className="inline-block min-w-[150px] max-w-[200px] py-2 border-white border rounded-md"
    >
      {props.title}
    </Link>
  );
}

export default Card;
