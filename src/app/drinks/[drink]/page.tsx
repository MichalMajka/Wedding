import drinks from "../list"
import Link from "next/link";

export function generateStaticParams() {
    return drinks.map((drink) => {
        return {
            drink: encodeURIComponent(drink.name.magic)
        }
    })
}

export default async function Page({
                                 params,
                             }: {
    params: Promise<{ drink: string }>
}) {
    const { drink } = await params
    const item = drinks.find((x) => x.name.magic === decodeURIComponent(drink))
    if(!item) return null;
    return  <div
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header className="flex items-center justify-center w-full">
            {decodeURIComponent(item.name.magic)} (Znany jako {item.name.mundane})
        </header>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            Skład
            <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                {
                    item.components.map((component) => (
                        <li key={component} className="flex items-center justify-center w-full">
                            {component}
                        </li>
                    ))
                }
            </ol>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <Link href={'/drinks'}>Drinki</Link>
        </footer>
    </div>
}