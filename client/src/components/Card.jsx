export default function Card({ brewery }) {
  return (
    <article>
      {brewery.name && <h3>{brewery.name}</h3>}
      {brewery.street && <p>{brewery.street}</p>}
      {brewery.website_url && (
        <a href={brewery.website_url}>{brewery.website_url}</a>
      )}
    </article>
  );
}
