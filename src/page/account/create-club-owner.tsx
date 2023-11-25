import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  StackDivider,
  Text,
  Textarea,
} from "@chakra-ui/react";

export const CreateClubOwnerPage = () => (
  <Container className="md:h-screen flex items-center my-5">
    <Stack spacing="5">
      <Stack
        spacing="4"
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
      >
        <Box>
          <Text textStyle="lg" fontWeight="medium">
            あなたのことを教えてください
          </Text>
          <Text color="fg.muted" textStyle="sm">
            入力された内容をもとにアカウントが作成されます。作成後もアカウントの情報を変更することができます。
            この情報を元に、クラブのオーナーはあなたをチームに誘うかもしれません。
          </Text>
        </Box>
      </Stack>
      <Divider />
      <Stack spacing="5" divider={<StackDivider />}>
        <FormControl id="name">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "8" }}
            justify="space-between"
          >
            <FormLabel variant="inline">ユーザー名</FormLabel>
            <Input maxW={{ md: "3xl" }} defaultValue="" />
          </Stack>
        </FormControl>
        <FormControl id="email">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "8" }}
            justify="space-between"
          >
            <FormLabel variant="inline">Eメール</FormLabel>
            <Input
              type="email"
              maxW={{ md: "3xl" }}
              placeholder="chris@gmail.com"
            />
          </Stack>
        </FormControl>
        <FormControl id="password">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "8" }}
            justify="space-between"
          >
            <FormLabel variant="inline">パスワード</FormLabel>
            <Input type="password" maxW={{ md: "3xl" }} />
          </Stack>
        </FormControl>

        <FormControl id="re-password">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "8" }}
            justify="space-between"
          >
            <FormLabel variant="inline">パスワード再入力</FormLabel>
            <Input type="password" maxW={{ md: "3xl" }} />
          </Stack>
        </FormControl>
        <FormControl id="bio">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "1.5", md: "8" }}
            justify="space-between"
          >
            <Box>
              <FormLabel variant="inline">Bio</FormLabel>
              <FormHelperText mt="0" color="fg.muted">
                あなたの自己紹介や趣味を教えてください
              </FormHelperText>
            </Box>
            <Textarea maxW={{ md: "3xl" }} rows={5} resize="none" />
          </Stack>
        </FormControl>

        <Flex direction="row-reverse">
          <Button>アカウントを作成する</Button>
        </Flex>
      </Stack>
    </Stack>
  </Container>
);
