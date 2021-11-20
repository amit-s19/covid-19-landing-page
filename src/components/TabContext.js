import { createContext } from "react";

const tabContext = createContext({
    tab: "overview",
    toggleTab: () => { }
});

export default tabContext;