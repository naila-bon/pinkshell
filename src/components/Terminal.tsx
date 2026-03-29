import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";

export const Terminal = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" bg="terminal.bg">
      <Stack
        borderWidth={1.5}
        borderRadius="2xl"
        borderColor="terminal.border"
        bg="terminal.bg"
        minH="99vh"
        minW="99vw"
        overflow={"hidden"}
      >
        <Box display={"flex"}
          borderColor="terminal.border"
          bg="terminal.titlebar" borderBottomWidth={1}
          minH="10"
          pt={2} pr={4} pb={2} pl={4}
          position="relative"
        > <HStack position={"absolute"} top="50%" transform="translateY(-50%)">
            <Box borderRadius="full" w="3.5" h="3.5" bgColor={"dot.close"} /> <Box borderRadius="full" w="3.5" h="3.5" bgColor={"dot.minimize"} /><Box borderRadius="full" w="3.5" h="3.5" bgColor={"dot.maximize"} /></HStack><Text position="absolute"
              left="50%"
              transform="translateX(-50%)"
              color="terminal.accent"
              fontSize="sm"
              userSelect="none">{__APP_NAME__} - zsh</Text></Box>
              <Box flex="1"></Box>
      </Stack>
    </Flex>
  )
}
