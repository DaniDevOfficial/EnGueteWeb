import { Text, Button, Flex, Link, Box, useColorModeValue } from "@chakra-ui/react";

export function JoinMobileApp({ joinToken }: { joinToken: string }) {
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
                    mb={6}
                    color={titleColor}
                >
                    Join New Group
                </Text>

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
