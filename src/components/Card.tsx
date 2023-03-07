import Link from "next/link";

export default function Card({
  title,
  author,
  publishedAt,
  url,
}: {
  title: string;
  author: any;
  publishedAt: string;
  url: string;
}) {
  return (
    <article className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Author: {author}</p>
        <p>Published at: {publishedAt}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" href={url}>
            Read
          </Link>
        </div>
      </div>
    </article>
  );
}
