import Image from "next/image";

export default function Home() {
    return (
        <>
            <section className="relative h-full w-full bg-white dark:bg-[hsl(var(--background))] pt-36 flex flex-col items-center justify-center overflow-y-auto">
                {/* grid */}
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

                <p className="text-center">Run your agency, in one place</p>

                <div className="bg-gradient-to-tl from-[hsl(var(--primary))] to-[hsl(var(--secondary-foreground))] text-transparent bg-clip-text relative">
                    <h1 className="text-9xl font-bold text-center md:text-[300px]">
                        Genify
                    </h1>
                </div>
                <div className="flex justify-center items-center relative md:mt-[70px]">
                    <Image
                        src={"/assets/preview.jpg"}
                        alt="preview"
                        width={1200}
                        height={1200}
                        className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                    />
                    <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-[hsl(var(--background) left-0 right-0 absolute z-10"></div>
                </div>
            </section>
        </>
    );
}
