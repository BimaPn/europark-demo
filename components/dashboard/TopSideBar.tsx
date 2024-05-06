"use client"
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { FiChevronDown, FiMenu } from 'react-icons/fi'
import { IconType } from 'react-icons'
import Sidebar from '@/components/dashboard/Sidebar'
import ButtonLogout from '../ui/ButtonLogout'

interface MobileProps extends FlexProps {
  onOpen: () => void
  avatar: string
  name: string
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="14"
      alignItems="center"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      className='!bg-white sm:!bg-transparent static sm:absolute top-0 left-0 right-0 sm:!pt-4'
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack spacing={{ base: '0', md: '6' }} className='px-2 rounded-full bg-white'>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={1.5} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={rest.avatar}
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                  width={24}
                  >
                  <Text fontSize="sm">{rest.name}</Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              >
              <ButtonLogout>Logout</ButtonLogout>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const TopSideBar = ({avatar, name}:{avatar:string, name:string}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Sidebar onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} avatar={avatar} name={name} />
    </>
  )
}

export default TopSideBar
