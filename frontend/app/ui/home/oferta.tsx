function Oferta({ ofertaList }: { ofertaList: string[] }) {
  return (
    <>
      <h2 className="mt-16 mb-8 text-center text-2xl font-extrabold uppercase">
        Oferta
      </h2>
      <section id="oferta" className="w-3/3 px-96 mx-auto text-center">
        <div className="mx-auto flex flex-wrap gap-4 justify-center text-center">
          {ofertaList.map((oferta) => (
            <p
              className="p-4 w-40 h-40 flex justify-center items-center font-bold border border-2 border-solid border-green-700 hover:bg-green-700 hover:text-white"
              key={oferta.id}
            >
              {oferta.title.rendered}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}

export default Oferta;
