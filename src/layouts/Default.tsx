import {Outlet, ScrollRestoration} from "react-router-dom";
import {chakra, Container, IconButton, Tooltip, useColorMode} from "@chakra-ui/react";
import {FaMoon, FaSun} from "react-icons/fa";


export function DefaultLayout() {
    const {toggleColorMode, colorMode} = useColorMode();

    return (
        <chakra.div width={"100%"}>
            <chakra.div minHeight={"100vh"} width={"100%"}>
                <chakra.main marginBottom={"2rem"}>
                    <Container maxW={"5xl"}>
                        <Outlet/>
                    </Container>
                </chakra.main>
            </chakra.div>

            <ScrollRestoration/>

            <Tooltip label={colorMode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"} placement="right">
                <IconButton
                    aria-label="toggle theme"
                    rounded="full"
                    size="xs"
                    position="fixed"
                    bottom={4}
                    left={4}
                    onClick={toggleColorMode}
                    icon={colorMode === "dark" ? <FaMoon/> : <FaSun/>}
                />
            </Tooltip>
            <ScrollRestoration/>
        </chakra.div>

    );
}
