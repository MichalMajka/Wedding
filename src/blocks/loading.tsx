'use client'

import {Dialog, DialogPanel} from "@headlessui/react";
import React from "react";
import Image from "next/image";
import {DialogContent} from "next/dist/client/components/react-dev-overlay/ui/components/dialog";

export default function Loading({isOpen, onLoad}: {
    isOpen: boolean,
    onLoad?: React.ReactEventHandler<HTMLImageElement> | undefined
}) {
    return <Dialog open={isOpen} onClose={() => {}} className="relative z-50">
            <div
                className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-[url(/images/backgrounds/void.png)]"
            >
                <DialogPanel
                    className="bg-[url(/images/backgrounds/popup/background.png)] popup-border p-4 letter tracking-[0.15rem] min-w-[250px] ">
                    <DialogContent className="flex items-center justify-center">
                        <Image
                            className={"image-blurred-edge"}
                            loading="eager"
                            width={58}
                            height={64}
                            src={`/images/loading.gif`}
                            alt={`Loading Image: Cast Spell animation from HoMM 3`}
                            onLoad={onLoad}
                        />
                        <p className={"text-white ml-4"}>
                            Nasi skrybowie szukają zwojów, za chwilę otworzymy drzwi.
                        </p>
                    </DialogContent>
                </DialogPanel>
            </div>
        </Dialog>
}