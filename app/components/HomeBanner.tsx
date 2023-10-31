import Image from "next/image";

const HomeBanner = () => {
    return ( 
    <div className="relative">
        <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
                  <div>
                    <h1>Summer Sale</h1>
                    <p>Enjoy discounts on selected items</p>
                    <p>Get 50% off</p>
                  </div>
                
                <div className="w-1/2 relative aspect-video">
            <Image
            src='/asnet.jpg'
            fill
            alt= 'Banner Image'
            className="object-contain"
            />
                </div>
        </div>
    </div> );
}
export default HomeBanner;