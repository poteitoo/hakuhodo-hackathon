import { Box, Stack, Text } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export const Header = () => (
  <Box
    bg="bg.surface"
    px={{ base: "4", md: "6" }}
    py="5"
    boxShadow="sm"
    borderRadius="lg"
  >
    <Stack
      direction={{ base: "column", sm: "row" }}
      spacing="4"
      justify="space-between"
    >
      <Stack spacing="1">
        <Text textStyle="lg" fontWeight="medium">
          ウォレットに接続する
        </Text>
        <Text textStyle="sm" color="fg.muted">
          NFTを交換するためにウォレットを使用します。現状ではmetamaskのみに対応しています。
        </Text>
      </Stack>
      <ConnectWallet theme={"dark"} modalSize={"wide"} />
    </Stack>
  </Box>
);
