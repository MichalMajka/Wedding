import {PropsWithChildren} from "react";

export default function ShelfBottom(props: PropsWithChildren) {
    return <div className="bg-no-repeat bg-[url(/images/backgrounds/shelf_bottom.png)] items-end flex grow bg-cover justify-around p-2.5 aspect-2048/551">
        {props.children}
    </div>
}