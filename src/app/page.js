import Image from "next/image";
import App from "./users/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <App/>
    </main>
  );
}
