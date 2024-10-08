import Khashayar from "@/component/Khashayar";
import List from "@/component/List";
import dynamic from "next/dynamic";
// import Quotes from "@/component/Quotes";
// import { unstable_noStore } from "next/cache";
// import { Suspense } from "react";

const NewComponent = dynamic(() => import("../component/Khashayar"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

// export const dynamic = "force-dynamic";
export default function Home() {
  // unstable_noStore()
  return (
    <main>
      {/* <h1 style={{ backgroundColor: "gold", textAlign: "center" }}>Quotes:</h1> */}
      {/* <Suspense fallback={<p>Loading</p>}>
        <Quotes />
      </Suspense> */}

      {/* <Khashayar children={<List />} /> */}
      {/* it's same */}
      {/* <Khashayar>
        <List />
      </Khashayar> */}


      <NewComponent>
        <List />
      </NewComponent>
    </main>
  );
}
