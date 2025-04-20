import {PropsWithChildren} from "react";

export default function Shelf(props: PropsWithChildren) {
    return <div className="bg-no-repeat bg-[url(/images/backgrounds/shelf.png)] items-end flex grow bg-cover justify-around px-10 py-3 md:px-16 md:py-5 lg:px-23 lg:pb-10 aspect-2048/400">
        {props.children}
    </div>
}
