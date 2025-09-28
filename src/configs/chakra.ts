import { type ToastProviderProps, extendTheme } from "@chakra-ui/react";
import {ThemeConfig} from "@chakra-ui/icons";


const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

export const theme = extendTheme({
    config,
    styles: {
        global: (props: any) => ({
            body: {
                bg: props.colorMode === "dark" ? "gray.900" : "orange.50",
                minHeight: "100vh",
                minWidth: "100vw",
            },
        }),
    },
});

export const toastOptions: ToastProviderProps = {
  defaultOptions: {
    duration: 3000,
    isClosable: true,
    position: "top-right",
  },
};