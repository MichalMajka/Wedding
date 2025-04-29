import Image from "next/image";
import {Button} from "@headlessui/react";
import {MouseEventHandler} from "react";

export default function CategoryButton({onClick, name, src, alt, enlarged = false} : {onClick: MouseEventHandler<HTMLButtonElement>, name: string, src: string, alt: string, enlarged?: boolean}) {
    const style = enlarged ? "h-10/10 aspect-82/93" : "h-7/10 aspect-82/93" 
    return <Button
        className={style + " flex"}
        onClick={onClick}
    >
        <Image src={src} alt={alt} height={93} width={82} className={"w-auto"} />
    </Button>
}