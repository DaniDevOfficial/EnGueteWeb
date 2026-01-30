import {useState} from "react";
import {
    Flex,
    Heading,
    Text,
    Button,
    Stack,
    Spinner,
    Input,
    FormControl,
    FormLabel,
    useColorModeValue,
} from "@chakra-ui/react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {createNewPassword} from "../repo/auth.ts";

export function ResetPassword () {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const token = searchParams.get("token");

    const accentColor = useColorModeValue("orange.600", "orange.300");
    const textColor = useColorModeValue("gray.700", "gray.300");

    async function handleReset () {
        if (!token) {
            setError("Invalid or missing reset token.");
            return;
        }

        if (!password || !confirmPassword) {
            setError("Please fill in both password fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            await createNewPassword(token, password);

            setSuccess(true);
        } catch (e) {
            setError("Password reset failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }

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
                w="100%"
            >
                {loading && (
                    <Stack spacing={6} align="center">
                        <Spinner size="xl" color="orange.400"/>
                        <Text color={textColor}>
                            Resetting your password…
                        </Text>
                    </Stack>
                )}

                {!loading && success && (
                    <Stack spacing={6} align="center">
                        <Heading size="2xl" color={accentColor}>
                            Password reset 🔐
                        </Heading>
                        <Text fontSize="lg" color={textColor}>
                            Your password has been updated successfully.
                            You can now log in with your new credentials.
                        </Text>
                        <Button
                            colorScheme="orange"
                            size="lg"
                            onClick={() => navigate('/')}
                        >
                            Go to app
                        </Button>
                    </Stack>
                )}

                {!loading && !success && (
                    <Stack spacing={6} align="center" w="100%">
                        <Heading size="2xl" color={accentColor}>
                            Reset your password
                        </Heading>

                        <Text fontSize="lg" color={textColor}>
                            Please enter your new password below.
                        </Text>

                        <Stack spacing={4} w="100%">
                            <FormControl>
                                <FormLabel>New password</FormLabel>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Confirm password</FormLabel>
                                <Input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </FormControl>
                        </Stack>

                        {error && (
                            <Text color="red.400">
                                {error}
                            </Text>
                        )}

                        <Button
                            colorScheme="orange"
                            size="lg"
                            w="100%"
                            onClick={handleReset}
                        >
                            Reset password
                        </Button>
                    </Stack>
                )}
            </Flex>
        </Flex>
    );
}
