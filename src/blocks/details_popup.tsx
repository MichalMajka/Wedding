'use client'

import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import SpellIcon from "@/blocks/spells/spell_icon";

export interface IDrink {
    name: {
        magic: string;
        mundane: string;
    },
    components: string[],
    category: string,
    power: number,
    metadata: {
        resources: {
            image: string
        }
    }
}

export default function DrinkDetails({drink, isOpen, setIsOpen}: {
    drink: IDrink | null,
    isOpen: boolean,
    setIsOpen: Function
}) {
    return drink &&
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div
                className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-[url(/images/backgrounds/void.png)]"
            >
                <DialogPanel className="bg-[url(/images/backgrounds/popup/background.png)] popup-border p-4 letter tracking-[0.15rem] min-w-[250px] ">
                    <DialogTitle className="font-bold flex items-center justify-between">
                        <p className={"pr-3"}>
                            {drink.name.magic} ({drink.name.mundane})
                        </p>
                        <SpellIcon name={drink.metadata.resources.image} className={"w-5/10"} />
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