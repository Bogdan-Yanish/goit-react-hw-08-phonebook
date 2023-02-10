import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { LoaderWrap } from "./loader.styled";

export const LoaderSpinner = () => {
    return (
        <LoaderWrap>
            <RotatingLines
                strokeColor="lightblue"
                strokeWidth="5"
                animationDuration="0.75"
                width="120"
                visible={true}
            />
        </LoaderWrap>
    )
}