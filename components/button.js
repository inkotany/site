import Link from "next/link";

export default function Button({ href, children }) {
    return (
        <Link href={href} className="py-2 px-8 font-semibold border-2 items-center border-primary text-primary rounded-full">{children}</Link>
    );
}