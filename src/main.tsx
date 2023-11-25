import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./page/home";
import "./index.css";
import { CreateClubSupporterPage } from "./page/account/create-supporter";
import { CreateClubMemberPage } from "./page/account/create-club-member";
import { CreateClubOwnerPage } from "./page/account/create-club-owner";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { metamaskWallet } from "@thirdweb-dev/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "create-club-member",
    element: <CreateClubMemberPage />,
  },
  {
    path: "create-club-owner",
    element: <CreateClubOwnerPage />,
  },
  {
    path: "create-supporter",
    element: <CreateClubSupporterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThirdwebProvider
        supportedWallets={[metamaskWallet()]}
        activeChain={Sepolia}
        clientId="59ef59676868b9215a8e2315f38dbd7f"
      >
        <RouterProvider router={router} />
      </ThirdwebProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
