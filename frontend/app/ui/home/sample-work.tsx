import Image from "next/image";

function SampleWork() {
  return (
    <div className="lg:my-24 text-5xl lg:text-9xl text-green-700 font-extrabold text-center">
      <p className="opacity-20">Łączymy</p>
      <p>Polskie miasta</p>
      <div className="mt-4 p-8 mx-auto bg-green-700">
        <Image
          width={600}
          height={400}
          src="/bud.webp"
          alt="Przejście zdjęcie"
          className="mx-auto rounded-xl shadow-xl border-2 border-green-200"
        />
      </div>
    </div>
  );
}

export default SampleWork;
