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
        <svg style={{marginTop: "10px"}} width="180" height="60" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
  
          <g transform="translate(5, 0)">
            <path d="M 20 5 L 10 25 L 18 25 L 8 40 L 18 20 L 10 20 Z" 
                  fill="#FF6B35" 
                  stroke="none"/>
          </g>
  
          <text x="40" y="25" 
                font-family="system-ui, -apple-system, sans-serif" 
                font-size="24" 
                font-weight="900" 
                fill="#FF6B35">
            Zentry
          </text>
  
          <text x="40" y="40" 
                font-family="system-ui, -apple-system, sans-serif" 
                font-size="10" 
                font-weight="600" 
                fill="#CC5500" 
                letter-spacing="1px">
            Finance Tracker
          </text>
        </svg>
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
