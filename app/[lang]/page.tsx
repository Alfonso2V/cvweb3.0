import Image from "next/image";

export const runtime = "edge";

export default function Home() {
  return (
    <section className="w-full">
      <div className="flex flex-col px-6 *:text-aliceBlue h-screen md:py-20 py-24 justify-between">
        <div className="text-center">
          <h1 className="font-bold text-title">Alfonso Verastegui</h1>
          <h4>FullStack Developer</h4>
        </div>
        <div className="flex my-32 flex-col md:flex-row">
          <p className="italic text-subtitle w-full md:w-1/2">
            Hago que las cosas sucedan.
          </p>
          <picture className="md:w-[calc(50vw-100px)] w-full md:rotate-12">
            <Image
              alt="code"
              src="/assets/code.webp"
              width={1920}
              height={1080}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
