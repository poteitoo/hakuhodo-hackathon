import {
  Avatar,
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
import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";

export const CreateClubMemberPage = () => {
  const [username, setUsername] = useState("");
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const [bio, setBio] = useState("");

  return (
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
              <Input
                maxW={{ md: "3xl" }}
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </Stack>
          </FormControl>
          <FormControl id="picture">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1.5", md: "8" }}
              justify="space-between"
            >
              <FormLabel variant="inline">Photo</FormLabel>
              <Stack
                spacing={{ base: "3", md: "5" }}
                direction={{ base: "column", sm: "row" }}
                width="full"
                maxW={{ md: "3xl" }}
              >
                <Avatar size="lg" name={username} src={imageSrc} />
                <input
                  type="file"
                  className="file-input file-input-ghost w-full"
                  accept="image/png"
                  onChange={(e) => {
                    const file = e.target?.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        setImageSrc(event.target.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </Stack>
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
              <Textarea
                maxW={{ md: "3xl" }}
                rows={5}
                resize="none"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </Stack>
          </FormControl>
          <FormControl id="wallet">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1.5", md: "8" }}
              justify="space-between"
            >
              <Box>
                <FormLabel variant="inline">ウォレットに接続する</FormLabel>
                <FormHelperText mt="0" color="fg.muted">
                  Metamaskのみに対応しています
                </FormHelperText>
              </Box>
              <ConnectWallet theme={"dark"} modalSize={"wide"} />
            </Stack>
          </FormControl>

          <Flex direction="row-reverse">
            <Button>アカウントを作成する</Button>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
};
