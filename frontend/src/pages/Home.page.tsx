import React from 'react';
import { Flex } from '@mantine/core';
import { NavBar } from '@/components/NavBar/NavBar';
import { SignIn } from '@/components/SignIn/SignIn';

export function HomePage() {
  return (
    <Flex  direction="row" style={{ height: '100vh', alignItems: "center" }}>
      <NavBar/>
      <SignIn/>
    </Flex>
  );
}
