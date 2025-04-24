import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="relative h-full w-full bg-white dark:bg-[hsl(var(--background))] pt-36 flex flex-col items-center justify-center">
                {/* grid */}
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-0" />

                <p className="text-center z-10">
                    Run your agency, in one place
                </p>

                <div className="bg-gradient-to-tl from-[hsl(var(--primary))] to-[hsl(var(--secondary-foreground))] text-transparent bg-clip-text relative">
                    <h1 className="text-9xl font-bold text-center md:text-[300px] z-10 antialiased">
                        Genify
                    </h1>
                </div>
                <div className="relative flex justify-center items-center md:mt-[70px]">
                    <Image
                        src={"/assets/preview.jpg"}
                        alt="preview"
                        width={1200}
                        height={1200}
                        className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                    />
                    <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-[hsl(var(--background))] left-0 right-0 absolute z-10" />
                </div>
            </section>
            <section className="flex justify-center items-center flex-col gap-4 pt-40 dark:bg-[hsl(var(--background))]">
                <h2 className="text-4xl text-center">
                    Choose what fits your needs
                </h2>
                <p className="text-[hsl(var(--muted-foreground))] text-center">
                    Our pricing plans are designed to fit your needs. If{" "}
                    {"you're"} not <br /> ready to commit you cna get started
                    for free.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap mt-6">
                    {pricingCards.map((card) => (
                        //TODO: Wire up free product from stripe
                        <Card
                            key={card.title}
                            className={clsx(
                                "w-[300px] flex flex-col justify-between bg-[hsl(var(--primary-foreground))] border-[hsl(var(--muted))] rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105",
                                {
                                    "border-2 border-[hsl(var(--primary))]":
                                        card.title === "Enterprise",
                                }
                            )}
                        >
                            <CardHeader>
                                <CardTitle
                                    className={clsx("", {
                                        "text-[hsl(var(--muted-foreground))]":
                                            card.title !== "Enterprise",
                                    })}
                                >
                                    {card.title}
                                </CardTitle>
                                <CardDescription className="text-[hsl(var(--muted-foreground))]">
                                    {card.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <span className="text-4xl font-bold">
                                    {card.price}
                                </span>
                                <span className="text-4xl font-bold">
                                    /{card.duration}
                                </span>
                            </CardContent>
                            <CardFooter className="flex flex-col items-start gap-4">
                                <div>
                                    {card.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex gap-2 items-center"
                                        >
                                            <Check className="text-[hsl(var(--muted-foreground))]" />
                                            <p>{feature}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href={`/agency?plan=${card.priceId}`}
                                    className={clsx(
                                        "w-full text-center bg-[hsl(var(--primary))] p-2 rounded-md",
                                        {
                                            "!bg-[hsl(var(--muted-foreground))]":
                                                card.title !== "Enterprise",
                                        }
                                    )}
                                >
                                    Get Started
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
}
