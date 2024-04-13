import { Analytics } from "@vercel/analytics/react"
import { Profile } from "../components/Profile";

export function Home(): JSX.Element {
  return (
    <>
      <Profile />
      <Analytics />
    </>
  );
}

export default Home;
