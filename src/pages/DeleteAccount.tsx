import { useState } from "react";
import {
    Flex,
    Heading,
    Text,
    Button,
    Stack,
    Input,
    FormControl,
    FormLabel,
    Spinner,
    useColorModeValue,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { deleteAccount } from "../repo/auth.ts";

export function DeleteAccount () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const accentColor = useColorModeValue("red.600", "red.300");
    const textColor = useColorModeValue("gray.700", "gray.300");

    async function handleDeleteAccount () {
        if (!email || !password) {
            setError("Please enter your username/email and password.");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            await deleteAccount(
                email,
                password,
            );

            setSuccess(true);

            setTimeout(() => {
                navigate("/");
            }, 2000);

        } catch (e) {
            console.log(e);
            setError("Account deletion failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Flex
            alignItems="center"
            width="100%"
            height="100%"
            pt="20vh"
            justifyContent="center"
        >
            <Flex
                direction="column"
                maxW="lg"
                width="100%"
                px={6}
                textAlign="center"
            >
                <Stack spacing={8}>
                    <Heading size="2xl" color={accentColor}>
                        Delete Account ⚠️
                    </Heading>

                    <Text fontSize="lg" color={textColor}>
                        Your account will be marked for deletion and permanently removed after 30 days.
                        You can log in during this period to cancel the deletion request.
                    </Text>

                    {!success && (
                        <>
                            <FormControl>
                                <FormLabel>Username or Email</FormLabel>
                                <Input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                />
                            </FormControl>

                            {error && (
                                <Alert status="error" borderRadius="md">
                                    <AlertIcon />
                                    {error}
                                </Alert>
                            )}

                            <Button
                                colorScheme="red"
                                size="lg"
                                onClick={handleDeleteAccount}
                                isDisabled={loading}
                            >
                                {loading ? <Spinner size="sm" /> : "Request Account Deletion"}
                            </Button>
                        </>
                    )}

                    {success && (
                        <Stack spacing={4} align="center">
                            <Heading size="lg" color="green.400">
                                Account scheduled for deletion 🗓️
                            </Heading>

                            <Text color={textColor}>
                                Your account has been marked for deletion.
                                It will be permanently removed in 30 days unless you log in again to restore it.
                            </Text>
                        </Stack>
                    )}
                </Stack>
            </Flex>
        </Flex>
    );
}