import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg="gray.400" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex> <Image w="10%" src="Fithub.png" />  <Button ml="10" mt="4" colorScheme="teal" > <Link to="/"> Go to HomePage </Link></Button></Flex>
         
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
             

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://lh3.googleusercontent.com/a/AEdFTp4-Wx2-dbRzYqAaqPwMJUns1MeWeUdlVPQY-qI=s360-p-rw-no'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://lh3.googleusercontent.com/a/AEdFTp4-Wx2-dbRzYqAaqPwMJUns1MeWeUdlVPQY-qI=s360-p-rw-no'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>admin</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}