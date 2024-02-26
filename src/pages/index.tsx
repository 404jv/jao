import { FuckIt } from "../components/Fuckit";
import { Analytics } from "@vercel/analytics/react"

export function Home(): JSX.Element {
  return (
    <>
      <FuckIt />
      <Analytics />
    </>
  );
}

export default Home;
