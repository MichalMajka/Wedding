import {PropsWithChildren} from "react";

export default function ShelfTop(props: PropsWithChildren) {
    return <div className="bg-no-repeat bg-[url(/images/backgrounds/shelf_top.png)] items-end flex grow bg-cover justify-around pt-9 p-3 aspect-2048/602">
        {props.children}
    </div>
}