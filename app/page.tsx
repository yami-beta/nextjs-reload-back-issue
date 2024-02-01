import Link from "next/link";
import { setTimeout } from "timers/promises";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  await setTimeout(1000);

  return (
    <main>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/sub">sub</Link>
        </li>
      </ul>
    </main>
  );
}
