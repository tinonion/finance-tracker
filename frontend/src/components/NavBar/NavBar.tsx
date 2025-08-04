import { Container, Flex, TableOfContents } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { useState } from 'react';
import { Icon, IconLayoutDashboard, IconLetterZ, IconListDetails, IconUserCircle } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';
import React from 'react';
import classes from './NavBar.module.css';

const navBarProps = (icon: Icon, label: string) => {
  return {
    href:"#required-for-focus",
    key:label,
    label:label,
    leftSection: React.createElement(icon, {size: 24, stroke: 2})
    }
}

const pagesSectionLinks = [
  { icon: IconLayoutDashboard, label: 'Dashboard' },
  { icon: IconListDetails, label: 'Expense Tracker' },
];

const profileSectionLinks = [
  { icon: IconUserCircle, label: 'Profile'}
];

export function NavBar() {
  const [active, setActive] = useState("");

  const topItems = pagesSectionLinks.map((item, index) => (
    <NavLink
      className={classes.mainLink}
      {...navBarProps(item.icon, item.label)}
      active={item.label === active}
      onClick={() => setActive(item.label)}
    />
  ));

  const bottomItems = profileSectionLinks.map((item, index) => (
    <NavLink
      className={classes.mainLink}
      {...navBarProps(IconUserCircle, "Profile")}
      active={item.label === active}
      onClick={() => setActive(item.label)}
    />
  ));

  return (
      <Flex className={classes.navbar}>
          <NavLink
            styles={{
              label: { textDecoration: "bold", fontSize: 16}
            }}
            href="#required-for-focus"
            key={"title-link"}
            active={false}
            label={"Zentry"}
            leftSection={<IconLetterZ size={22} stroke={4} />}
            onClick={() => {}}
          />
        <div className={classes.sectionBorder} />
        <Flex styles={{ root: {alignContent: "start", flexGrow: 1}}} direction="column" justify="space-between">
          <div className={classes.section}>
            <Box>{topItems}</Box>
          </div>
          <div>
            <div className={classes.sectionBorder}/>
            <Box className={classes.section}>{bottomItems}</Box>
          </div>
       </Flex>
      </Flex>
  );
}
