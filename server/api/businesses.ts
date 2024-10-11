export default eventHandler(async (event) => {
  const { q, sort, order } = getQuery(event) as {
    q?: string;
    sort?: "name" | "email";
    order?: "asc" | "desc";
  };
});
