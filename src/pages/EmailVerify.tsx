import {useEffect, useState} from "react";
import {
    Flex,
    Heading,
    Text,
    Button,
    Stack,
    Spinner,
    useColorModeValue,
} from "@chakra-ui/react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {verifyEmail} from "../repo/auth.ts";

export function EmailVerify () {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const token = searchParams.get("token");

    const accentColor = useColorModeValue("orange.600", "orange.300");
    const textColor = useColorModeValue("gray.700", "gray.300");

    async function verify () {
        console.log(token);
        if (!token) {
            setError("Invalid or missing verification token.");
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            await verifyEmail(token);
            setSuccess(true);
        } catch (e) {
            console.log(e)
            setError("Verification failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        verify();
    }, []);

    return (
        <Flex
            alignItems="center"
            width="100%"
            height="100%"
            pt="30vh"
            justifyContent="center"
        >
            <Flex
                direction="column"
                maxW="2xl"
                textAlign="center"
                align="center"
            >
                {loading && (
                    <Stack spacing={6} align="center">
                        <Spinner size="xl" color="orange.400"/>
                        <Text color={textColor}>
                            Verifying your email…
                        </Text>
                    </Stack>
                )}

                {!loading && success && (
                    <Stack spacing={6} align="center">
                        <Heading
                            size="2xl"
                            color={accentColor}
                        >
                            Email verified 🎉
                        </Heading>
                        <Text fontSize="lg" color={textColor}>
                            Your email address has been successfully verified.
                            You can now continue using the Enguete App.
                        </Text>
                        <Button
                            colorScheme="orange"
                            size="lg"
                            onClick={() => navigate('/')}
                        >
                            Go to home
                        </Button>
                    </Stack>
                )}

                {!loading && !success && (
                    <Stack spacing={6} align="center">
                        <Heading
                            size="2xl"
                            color={accentColor}
                        >
                            Verification failed 😕
                        </Heading>
                        <Text fontSize="lg" color={textColor}>
                            {error}
                        </Text>
                        <Button
                            variant="outline"
                            colorScheme="orange"
                            size="lg"
                            onClick={verify}
                        >
                            Try again or request a new link
                        </Button>
                    </Stack>
                )}
            </Flex>
        </Flex>
    );
}
