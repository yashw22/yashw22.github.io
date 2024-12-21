import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function copyToCLipboard(text) {
    var isCopied;
    navigator.clipboard.writeText(text)
        .then(() => { isCopied = true; })
        .catch(() => { isCopied = false });

    return isCopied;
}