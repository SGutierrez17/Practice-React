import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface CIButtonProps extends ButtonProps {
    children: React.ReactNode;
}

export default function CIButton({ children, ...rest }: CIButtonProps) {
    return (
        <Button {...rest} color="success">{children}</Button>
    );
}