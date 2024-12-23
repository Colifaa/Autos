
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";
import WithSubnavigation from "@/components/WithSubnavigation";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <WithSubnavigation/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
