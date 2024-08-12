import Image from "next/image";

export async function generateMetadata({ params }) {
  return {
    title: `user - ${params.id}`,
  };
}

function page({ params: { id } }) {
  return <h1>User - {id}</h1>;
}

export default page;
