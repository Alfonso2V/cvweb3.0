export const runtime = "edge";

export default function Home() {
  const fullYear = new Date().getFullYear();
 return (
  <section className="w-full h-screen flex justify-center items-center">
    <h1>CVWEb3.0 Alfonso Verastegui ©{fullYear}</h1>
  </section>
 );
}
