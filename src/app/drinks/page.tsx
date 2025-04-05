import Link from "next/link";
import drinks from "./list"


export default function Drinks() {
    return <div
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header className="flex items-center justify-center w-full">
            Drinks
        </header>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                {
                    drinks.map((drink) => (
                        <li key={drink.name.magic} className="flex items-center justify-center w-full">
                            <Link href={`/drinks/${encodeURIComponent(drink.name.magic)}`}> {drink.name.magic} </Link>
                        </li>
                    ))
                }
            </ol>

            <div className="flex gap-4 items-center flex-col sm:flex-row">
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
            </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        </footer>
    </div>
}