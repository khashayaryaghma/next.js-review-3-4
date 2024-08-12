import getData from "@/utils/dataServices";

async function Quotes() {
  const { quotes } = await getData("https://dummyjson.com/quotes");

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
