import {Box, Button, Flex, Link, Text, useColorModeValue} from "@chakra-ui/react";
import QRCode from 'react-qr-code';

export function JoinMobileApp({joinToken}: { joinToken: string }) {

    const url = window.location.origin + '/#/join/' + joinToken;

    const cardBg = useColorModeValue("gray.100", "gray.600");
    const titleColor = useColorModeValue("orange.600", "orange.300");

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

                    <QRCode value={url ? url : ""} bgColor={'transparent'} style={{
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
                    href={url}
                    isExternal
                    size="lg"
                    w="full"
                    borderRadius="md"
                    colorScheme="orange"
                >
                    Open in EnGuete 📱
                </Button>
            </Box>
        </Flex>
    );
}
