import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Icon,
  VStack,
  HStack,
  Image,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box pos="relative" bg="#4E4B4C" color="white" py={5} px={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
      >
        {/* Logo e Información de Contacto */}
        <VStack align={{ base: "center", md: "flex-start" }} spacing={3} mb={{ base: 4, md: 0 }}>
          <Image
            src="/Prueba.png"
            alt="Logo"
            maxWidth={{ base: "150px", md: "180px" , lg:"220px"}}
            objectFit="contain"
           
      
          />
          <Text  textAlign={{ base: "center", md: "center" , xl: "center"}}>Mar Mediterráneo 324, Miramar</Text>
          <Text  textAlign={{ base: "center", md: "center" ,xl: "center" }}>Info@patiopadel.pe</Text>
        </VStack>

        <Spacer />

        {/* Enlaces a Redes Sociales */}
        <HStack spacing={6} mt={{ base: 4, md: 0 }}>
          <Link href="https://www.instagram.com/patiopadelph" isExternal>
            <Icon as={FaInstagram} boxSize={8} color="pink.400" _hover={{ color: "pink.300" }} />
          </Link>
          <Link href="https://wa.me/+51919499957" isExternal>
            <Icon as={FaWhatsapp} boxSize={8} color="green.400" _hover={{ color: "green.300" }} />
          </Link>
        </HStack>
      </Flex>

      <Divider my={8} borderColor="black" />

      {/* Derechos de Autor */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
      >
        <Text fontSize="sm" textAlign="center">
          &copy; {year} Todos los derechos reservados
        </Text>
        <Text fontSize="sm" textAlign="center">
          Developed by{" "}
          <Link href="https://www.linkedin.com/in/jorge-mathez/" color="teal.300" isExternal>
            Jorge Mathez
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
