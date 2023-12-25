import { MouseEventHandler } from "react";

export interface SeatmapTypes {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large" | "xl";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}