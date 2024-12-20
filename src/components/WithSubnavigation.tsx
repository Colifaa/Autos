'use client'

import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from '@chakra-ui/next-js'

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box position="relative">
      <Flex
        bg="#4e4b4c"
        color="white"
        minH="80px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom="1px solid"
        borderColor="#203C4C"
        align="center"
        justify="space-between"
      >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} align="center">
          <ChakraLink href="/" _hover={{ textDecoration: 'none' }}>
            <Image
              src="Prueba.png"
              alt="Logo"
              width="200px"
              height="80px"
              objectFit="contain"
              cursor="pointer"
              padding="10px"
            />
          </ChakraLink>
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} align="center" ml="auto">
          <DesktopNav />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkHoverColor = useColorModeValue('#F0A500', '#F0A500')

  return (
    <Stack direction={'row'} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <ChakraLink
            href={navItem.href ?? '#'}
            fontSize="sm"
            fontWeight={600}
            textTransform="uppercase"
            color="white"
            _hover={{ color: linkHoverColor }}
          >
            {navItem.label}
          </ChakraLink>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = () => {
  return (
    <Stack bg="#333333" p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <ChakraLink
        href={href ?? '#'}
        fontWeight={600}
        fontSize="md"
        color="white"
        _hover={{ color: '#F0A500' }}
      >
        {label}
      </ChakraLink>
    </Stack>
  )
}

interface NavItem {
  label: string
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Sobre Nosotros',
    href: '/about',
  },
  {
    label: 'Contacto',
    href: '/contact',
  },
]
