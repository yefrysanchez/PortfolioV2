const GridMenu = () => {
  return (
    <main className="max-w-[1200px] text-white text-center px-4 pb-6 mx-auto pt-6 lg:h-full grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-6">
      <section className="bg-slate-500/25 rounded-3xl h-52 md:h-[340px]">1</section>
      <section className="bg-slate-500/25 rounded-3xl h-52 md:h-[340px] row-start-1 col-span-2 lg:col-start-2">Large</section>
      <section className="bg-slate-500/25 rounded-3xl h-52 md:h-[340px]">3</section>
      <section className="bg-slate-500/25 rounded-3xl h-52 md:h-[340px] row-start-3 col-span-2 lg:col-start-1 lg:row-start-2">Large</section>
      <section className="bg-slate-500/25 rounded-3xl h-52 md:h-[340px] row-start-4 col-span-2 lg:col-start-3 lg:row-start-2">Large</section>
      <section className="bg-slate-500/25 rounded-3xl h-52 md:h-[340px] row-start-6 lg:row-start-3">6</section>
      <section className="bg-slate-500/25 rounded-3xl h-52 md:h-[340px] col-span-2">Large 2</section>
      <section className="bg-slate-500/25 rounded-3xl h-52 md:h-[340px]">8</section>
    </main>
  );
};

export default GridMenu;
