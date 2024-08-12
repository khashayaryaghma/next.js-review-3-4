import getData from "@/utils/dataServices";

async function Quotes() {
  const data = await getData("https://dummyjson.com/quotes");
data.quotes
  return (
    <ul>
      {quotes.map((el) => (
        <li key={el.id}>
          "{el.quote}" : {el.author}
        </li>
      ))}
    </ul>
  );
}

export default Quotes;
