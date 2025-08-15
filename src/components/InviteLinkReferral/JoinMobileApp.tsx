import {Box, Button, Link} from "@chakra-ui/react";

export function JoinMobileApp({joinToken}: {joinToken: string}) {


    const link = import.meta.env.VITE_MOBILE_BASE_URL + 'invite?token=' + joinToken;
    return (
            <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                padding={4}
                backgroundColor=""
                borderRadius={8}
                shadow={2}
            >
                {link}
                <Button>
                    <Link href={link} isExternal>
                        Join Mobile App
                    </Link>
                </Button>
            </Box>
    );
}