import React from "react";
import Button from "@mui/material/Button";

function StyledButton({
    children,
    sx,
    onClick,
    variant,
    onMouseEnter,
    onMouseLeave,
}) {
    return (
        <Button
            sx={{
                ...sx,
                fontFamily: "Inter",
                textTransform: "capitalize",
            }}
            onClick={onClick}
            variant={variant}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </Button>
    );
}

export default StyledButton;
