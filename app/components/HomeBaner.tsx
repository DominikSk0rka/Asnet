import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div>
          <h1>Letnia Wyprzedaż</h1>
          <p>Miłych zakupów z zniżkami</p>
          <p>Zdobądź 50% rabatu</p>
        </div>

        <div className="w-1/2 relative aspect-video grid-element">
          <Image
            src="/asnet.png"
            fill
            alt="Banner Image"
            className="object-contain"
            priority={true}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
