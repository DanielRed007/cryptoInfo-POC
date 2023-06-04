import { createSelector } from "reselect";

const configState = (state:any) => state.config;

export const configSelector = createSelector(
    configState,
    config => config
);