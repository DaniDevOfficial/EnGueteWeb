import {Box, Button, Flex, Link, Text, useColorModeValue} from "@chakra-ui/react";
import QRCode from 'react-qr-code';

export function JoinMobileApp({joinToken}: { joinToken: string }) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const link = import.meta.env.VITE_MOBILE_BASE_URL + 'invite?token=' + joinToken;

    const cardBg = useColorModeValue("gray.100", "gray.700");
    const titleColor = useColorModeValue("teal.600", "teal.300");

    return (
        <Flex
            w="100%"
            minH="80vh"
            justifyContent="center"
            alignItems="center"
            p={6}
        >
            <Box
                bg={cardBg}
                borderRadius="lg"
                boxShadow="xl"
                p={8}
                textAlign="center"
                maxW="sm"
                w="100%"
            >
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color={titleColor}
                >
                    Join New Group
                </Text>


                <Box
                    p={8}
                >

                    <QRCode value={joinToken ? joinToken : ""} bgColor={'transparent'} style={{
                        height: "auto",
                        maxHeight: "30vh",
                        maxWidth: "100%",
                        width: "100%",
                        backgroundColor: 'transparent',
                        color: "green"
                    }}/>
                </Box>
                <Button
                    as={Link}
                    href={link}
                    isExternal
                    size="lg"
                    colorScheme="teal"
                    w="full"
                    borderRadius="md"
                >
                    Open in EnGuete 📱
                </Button>
            </Box>
        </Flex>
    );
}
