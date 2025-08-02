import { Container, Flex, TableOfContents } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { useState } from 'react';
import { Icon, IconLetterZ, IconListDetails, IconUserCircle } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';
import React from 'react';

const navBarProps = (icon: Icon, label: string) => {
  return {
    styles:{
      root: {},
      section: {marginRight: "7px"},
      label: { fontSize: 18 }
    },
    href:"#required-for-focus",
    key:label,
    label:label,
    leftSection: React.createElement(icon, {size: 24, stroke: 2})
    }
}

const topNavData = [
  { icon: IconListDetails, label: 'Expense Tracker' },
];

const bottomNavData = [
  { icon: IconUserCircle, label: 'Profile'}
];

export function HomePage() {
  const [active, setActive] = useState(0);

  const topItems = topNavData.map((item, index) => (
    <NavLink
      {...navBarProps(IconListDetails, "Expense Tracker")}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  const bottomItems = bottomNavData.map((item, index) => (
    <NavLink
      {...navBarProps(IconUserCircle, "Profile")}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <>
      <Flex styles={{ root: {height: "100%"}}} direction="column">
        <NavLink
          styles={{
            label: { textDecoration: "bold", fontSize: 22}
          }}
          href="#required-for-focus"
          key={"title-link"}
          active={false}
          label={"Zentry"}
          leftSection={<IconLetterZ size={28} stroke={4} />}
          onClick={() => {}}
        />
        <Box h="xl"/>
        <Flex styles={{ root: {width: "300px", alignContent: "start", flexGrow: 1}}} direction="column" justify="space-between">
          <Box>{topItems}</Box>
          <Box>{bottomItems}</Box>
        </Flex>
      </Flex>
    </>
  );
}
