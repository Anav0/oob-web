import { useParams } from "react-router";

type Params = {
  slug: string;
};

export function Operation() {
  let { slug } = useParams<Params>();

  return <span>{slug}</span>;
}
