import { Container, Flex, TableOfContents } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { useState } from 'react';
import { IconListDetails, IconUserCircle } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';

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
      styles={{
        root: {},
        section: {marginRight: "7px"},
        label: { fontSize: 18 }
      }}
      href="#required-for-focus"
      key={item.label}
      active={index === active}
      label={item.label}
      leftSection={<item.icon size={24} stroke={2} />}
      onClick={() => setActive(index)}
    />
  ));

  const bottomItems = bottomNavData.map((item, index) => (
    <NavLink
      styles={{
        root: {},
        section: {marginRight: "7px"},
        label: { fontSize: 18 }
      }}
      href="#required-for-focus"
      key={item.label}
      active={index === active}
      label={item.label}
      leftSection={<item.icon size={24} stroke={2} />}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <>
      <Flex direction="column" align="start" justify="space-between">
        <Container>{topItems}</Container>
        <Container>{bottomItems}</Container>
      </Flex>
    </>
  );
}
