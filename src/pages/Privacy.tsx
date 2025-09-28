import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    Link as ChakraLink,
    List,
    ListItem,
    Divider,
    Badge,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useColorModeValue,
    chakra,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export function Privacy () {
    const accent = useColorModeValue("orange.600", "orange.300");
    const textColor = useColorModeValue("gray.700", "gray.300");
    const subtle = useColorModeValue("gray.600", "gray.400");

    const contactEmail = 'david.bischof.db@gmail.com';
    
    return (
        <Box bg={useColorModeValue("gray.50", "gray.900")} py={{ base: 10, md: 16 }}>
            <Container maxW="4xl">
                <Stack spacing={6} align="flex-start">
                    <Heading as="h1" size="2xl" color={accent}>
                        Privacy Policy
                    </Heading>
                    <Text color={subtle}>for <b>Enguete — Meal Planning Made Easy</b></Text>

                    {/* TL;DR summary card */}
                    <Alert status="info" variant="subtle" borderRadius="lg" bg={useColorModeValue("blue.50", "blue.900")}>
                        <AlertIcon />
                        <Box>
                            <AlertTitle>TL;DR 🍽️</AlertTitle>
                            <AlertDescription>
                                We collect only what we need to run Enguete (accounts, meal plans, basic analytics). You can access, export, or delete your data, and you can request full account deletion any time.
                            </AlertDescription>
                        </Box>
                    </Alert>

                    {/* Action buttons */}
                    <Stack direction={{ base: "column", sm: "row" }} spacing={3}>
                        <Button as={RouterLink} to="/" colorScheme="orange" variant="solid">
                            Back to Home
                        </Button>
                        <Button as={RouterLink} to="/delete-account" colorScheme="orange" variant="outline">
                            Delete Your Account
                        </Button>
                        <Button onClick={handlePrint} colorScheme="orange" variant="ghost">
                            Print / Save PDF
                        </Button>
                    </Stack>

                    <PolicyCard>
                        <SectionHeading id="who">1. Who we are</SectionHeading>
                        <Text color={textColor}>
                            <b>Data Controller:</b> David Bischof (DaniDevOfficial) ("we", "us").
                        </Text>
                        <Text color={textColor}>
                            <b>Contact:</b> <ChakraLink color={accent} href={"mailto: " + contactEmail}>{contactEmail}</ChakraLink>
                        </Text>
                        <Text color={textColor}>
                            If you are in the EU/EEA or Switzerland, this policy is intended to meet the GDPR and Swiss FADP requirements.
                        </Text>
                    </PolicyCard>

                    <PolicyCard>
                        <SectionHeading id="scope">2. What this policy covers</SectionHeading>
                        <Text color={textColor}>
                            This policy explains how Enguete processes personal data when you use our mobile app and website.
                        </Text>
                    </PolicyCard>

                    <PolicyCard>
                        <SectionHeading id="data">3. Data we collect</SectionHeading>
                        <List spacing={2} color={textColor} pl={4} styleType="disc">
                            <ListItem><b>Account data</b> — name/alias, email address, authentication IDs (e.g., OAuth). </ListItem>
                            <ListItem><b>App content</b> — meal plans, participation (who’s cooking/eating), comments, household names.</ListItem>
                            <ListItem><b>Device & usage</b> — app version, device OS, crash logs, approximate region/country; we do not collect precise location.</ListItem>
                            <ListItem><b>Support</b> — messages you send to our support email or forms.</ListItem>
                        </List>
                    </PolicyCard>

                    <PolicyCard>
                        <SectionHeading id="use">4. How we use your data & legal bases</SectionHeading>
                        <List spacing={2} color={textColor} pl={4} styleType="disc">
                            <ListItem><b>Provide the service</b> — create and manage accounts, store meal plans, enable invitations and shared groups. <Badge colorScheme="orange">Utility</Badge></ListItem>
                            <ListItem><b>Improve safety & reliability</b> — diagnostics, crash reports, fraud prevention. <Badge colorScheme="orange">Legitimate interests</Badge></ListItem>
                            <ListItem><b>Communicate with you</b> — service emails (changes, security, support). <Badge colorScheme="orange">Legitimate interests</Badge></ListItem>
                            <ListItem><b>Legal compliance</b> — meet legal obligations and enforce terms. <Badge colorScheme="orange">Legal obligation</Badge></ListItem>
                        </List>
                    </PolicyCard>

                    <PolicyCard>
                        <SectionHeading id="sharing">5. Sharing your data</SectionHeading>
                        <Text color={textColor}>
                            We do not sell personal data. We share it with:
                        </Text>
                        <List spacing={2} color={textColor} pl={4} styleType="disc">
                            <ListItem><b>Processors</b> — hosting, databases, analytics, crash reporting, email delivery (Railway). We sign data processing agreements with all processors.</ListItem>
                            <ListItem><b>Other users</b> — when you join a shared household/group, your display name and participation are visible to that group.</ListItem>
                        </List>
                    </PolicyCard>

                    <PolicyCard>
                        <SectionHeading id="retention">6. Retention</SectionHeading>
                        <Text color={textColor}>
                            We keep personal data only as long as necessary for the purposes above. If you delete your account, we delete or irreversibly anonymize your personal data within 30 days unless we must keep some data for legal reasons.
                        </Text>
                    </PolicyCard>

                    <PolicyCard>
                        <SectionHeading id="rights">7. Your rights</SectionHeading>
                        <Text color={textColor}>
                            Depending on your location (EU/EEA, CH, UK, etc.), you may have the right to access, correct, delete, port, or restrict processing of your data, and to object to certain processing.
                        </Text>
                        <Text color={textColor}>
                            You can exercise rights via the app, the <chakra.a color={accent}>account deletion page</chakra.a>, or by emailing <ChakraLink color={accent} href={"mailto: " + contactEmail}>{contactEmail}</ChakraLink>.
                        </Text>
                        <Text color={textColor}>
                            You also have the right to lodge a complaint with your local supervisory authority.
                        </Text>
                    </PolicyCard>

                    <PolicyCard>
                        <SectionHeading id="transfers">8. International transfers</SectionHeading>
                        <Text color={textColor}>
                            If we transfer data outside your country (e.g., to the US), we use appropriate safeguards such as Standard Contractual Clauses or rely on adequacy decisions.
                        </Text>
                    </PolicyCard>

                    <PolicyCard>
                        <SectionHeading id="security">9. Security</SectionHeading>
                        <Text color={textColor}>
                            We apply technical and organizational measures to protect data (encryption in transit, access controls, least-privilege). No system is 100% secure.
                        </Text>
                    </PolicyCard>

                    <PolicyCard>
                        <SectionHeading id="children">10. Children</SectionHeading>
                        <Text color={textColor}>
                            Enguete is not directed to children under 13. If you believe a child has provided personal data, contact us to delete it.
                        </Text>
                    </PolicyCard>

                    <PolicyCard>
                        <SectionHeading id="cookies">11. Cookies & similar tech</SectionHeading>
                        <Text color={textColor}>
                            Our website /ap may use necessary cookies. Where required, we seek consent.
                        </Text>
                    </PolicyCard>

                    <PolicyCard>
                        <SectionHeading id="changes">12. Changes to this policy</SectionHeading>
                        <Text color={textColor}>
                            We may update this policy. We will post changes here and update the effective date. For major changes, we might notify you in-app or by email.
                        </Text>
                    </PolicyCard>

                    <PolicyCard>
                        <SectionHeading id="contact">13. Contact</SectionHeading>
                        <Text color={textColor}>
                            Email: <ChakraLink color={accent} href={"mailto:" + contactEmail}>{contactEmail}</ChakraLink>
                        </Text>
                    </PolicyCard>

                    <Text color={subtle} fontSize="sm">
                        <b>Effective date:</b> 28.09.2025
                    </Text>

                    <Divider />
                </Stack>
            </Container>
        </Box>
    );
}

function PolicyCard (props) {
    var cardBg = useColorModeValue("white", "gray.800");
    var borderCol = useColorModeValue("gray.200", "gray.700");
    return (
        <Box bg={cardBg} borderWidth="1px" borderColor={borderCol} borderRadius="xl" p={{ base: 4, md: 6 }} w="100%" boxShadow="sm">
            {props.children}
        </Box>
    );
}

function SectionHeading (props) {
    var accent = useColorModeValue("orange.600", "orange.300");
    return (
        <Heading as="h2" id={props.id} size="lg" color={accent} mb={2}>
            {props.children}
        </Heading>
    );
}

function handlePrint () {
    window.print();
}
