import Card from "@/components/Card";
import useNews from "@/hooks/useNews";
import { useRouter } from "next/router";

export default function Page() {
  const { searchQuery } = useRouter().query;

  const { data, isError, isLoading } = useNews({
    searchQuery: typeof searchQuery === "string" ? searchQuery : "",
  });

  if (isLoading) {
    return (
      <section className="h-full flex items-center justify-center">
        <h1 className="font-bold text-3xl lg:text-5xl animate-bounce">
          Loading
        </h1>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="h-full flex items-center justify-center">
        <h1 className="font-bold text-3xl lg:text-5xl animate-bounce">Error</h1>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="h-full flex items-center justify-center">
        <h1>Loading</h1>
      </section>
    );
  }

  return (
    <>
      <div className="px-4 py-5">
        <h1>Sort by</h1>
        <div className="form-control">
          <div className="input-group">
            <select className="select select-bordered">
              <option disabled selected>
                From
              </option>
              <option>1 week ago</option>
              <option>2 weeks ago</option>
              <option>3 weeks ago</option>
            </select>
            <button className="btn">Go</button>
          </div>
        </div>
        <div className="form-control">
          <div className="input-group">
            <select className="select select-bordered">
              <option disabled selected>
                Order by
              </option>
              <option>Popularity</option>
              <option>Published At</option>
              <option>Relevancy</option>
            </select>
            <button className="btn">Go</button>
          </div>
        </div>
      </div>

      <section className="overflow-auto h-full max-h-full flex gap-4 flex-wrap p-3">
        {data?.articles.map((item) => (
          <Card
            title={item.title}
            author={item.author}
            publishedAt={item.publishedAt}
            url={item.url}
            key={item.source.Id}
          />
        ))}
      </section>
    </>
  );
}
