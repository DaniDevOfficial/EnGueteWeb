import {
    Flex,
    Heading,
    Text,
    Button,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";

export function Landing() {
    return (
        <Flex
            alignItems="center"
            width="100%"
            height="100%"
            pt={'30vh'}
            justifyContent="center"
        >
            <Flex
                direction="column"
                maxW="2xl"
                textAlign="center"
                align="center"
            >
                <Heading
                    as="h1"
                    size="2xl"
                    fontWeight="extrabold"
                    mb={4}
                    lineHeight="short"
                    color={useColorModeValue("orange.600", "orange.300")}
                >
                    Enguete — Meal Planning Made Easy 🍽️
                </Heading>

                <Text
                    fontSize="lg"
                    mb={8}
                    color={useColorModeValue("gray.700", "gray.300")}
                >
                    Plan together who’s cooking and who’s eating — perfect for families,
                    roommates, and friends. No more confusion, just tasty shared meals.
                </Text>

                <Stack
                    direction={{base: "column", sm: "row"}}
                    spacing={4}
                    w="full"
                    justify="center"
                >
                    <Button
                        as="a"
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                        colorScheme="orange"
                        size="lg"
                    >
                        Download on Google Play
                    </Button>
                    <Button variant="outline" colorScheme="orange" size="lg">
                        Privacy Policy
                    </Button>
                </Stack>
            </Flex>
        </Flex>
    );
}