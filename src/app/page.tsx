import Image from "next/image";
import Header from "./components/Header";
import Logo from "./components/Logo"

export default function Home() {
  const name = "Achilles"
  return (
    <div>
      <Header name={"Peleus"} age={35} isMan={true}>
        <p>A message from Home...</p>
        <Logo />
      </Header>
      <Header name={"Achilles"} age={24} isMan={true} />
    </div>
  );
}
