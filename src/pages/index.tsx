import useNews from "@/hooks/useNews";

export default function Page() {
  const { data } = useNews({ searchQuery: "apple", from:"2023-02-04" });
  return (
    <section className="overflow-auto h-full max-h-full">
      {JSON.stringify(data)}
    </section>
  );
}
