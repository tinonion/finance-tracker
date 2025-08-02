import { TableOfContents } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { useState } from 'react';
import { IconListDetails } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';

const data = [
  { icon: IconListDetails, label: 'Expense Tracker' },
];

export function HomePage() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
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
      <Box style={{height: "100%"}} w={300} h="100%">{items}</Box>
    </>
  );
}
