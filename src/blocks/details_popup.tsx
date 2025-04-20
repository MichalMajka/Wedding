'use client'

import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import Image from "next/image";

export interface IDrink {
    name: {
        magic: string;
        mundane: string;
    },
    components: string[],
    category: string,
    power: number
}

export default function DrinkDetails({drink, isOpen, setIsOpen}: {
    drink: IDrink | null,
    isOpen: boolean,
    setIsOpen: Function
}) {
    return drink &&
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div
                className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-radial from-black to-transparent">
                <DialogPanel className="max-w-lg py-20 px-7 min-w-60 bg-no-repeat bg-cover bg-[url(/images/backgrounds/vertical_scroll.png)] aspect-240/333">
                    <DialogTitle className="font-bold flex items-center justify-between">
                        <p className={"pr-3"}>
                            {drink.name.magic} ({drink.name.mundane})
                        </p>
                        <Image src={"/images/spells/summon_boat.png"} alt={"Spell Image"} width={211 / 2}
                               height={164 / 2}/>
                    </DialogTitle>
                    <p className="font-bold">Komponenty:</p>
                    <ul className="">
                        {
                            drink.components.map((component, index) => (
                                <li key={index} className="flex items-start justify-start w-full">
                                    {component}
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex justify-end items-center mt-10">
                        <button
                            className={"border-white border-1 p-2"}
                            onClick={() => setIsOpen(false)}>
                            Zamknij
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
}