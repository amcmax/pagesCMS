export default function PageInfo({ data }) {
  return (
    <div>
      <h1>Page Title: {data.pageByUrl.name}</h1>
      <p>Edit page elements below</p>
      <p>Page Description: {data.pageByUrl.description}</p>
    </div>
  );
}
