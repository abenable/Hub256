import React, { useState } from 'react';
import image from './logo.jpg';
import {
  Collapse,
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Button,
} from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import {
  GlobeAmericasIcon,
  SquaresPlusIcon,
  TagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AlertComp from '../alert/alertComp';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [sub, setSub] = React.useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [email, setEmail] = useState(''); // Initialize email state

  const API_URL =
    import.meta.env.MODE === 'development'
      ? import.meta.env.VITE_LOCAL_URL
      : import.meta.env.VITE_URL;

  const subscribe = async () => {
    try {
      const response = await axios.post(`${API_URL}/users/subscribe`, {
        email: email, // Use the email state value
      });
      setSub(response.data.message);
      handleOpen();
    } catch (error) {
      console.error(error); // Handle the error as needed
    }
  };

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Blogs', href: 'blogs' },
  ];

  return (
    <>
      <nav>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={image} className="h-12" alt="Flowbite Logo" />
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                onClick={handleOpen}
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Get started
              </button>
              <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
                responsive
              >
                <Card className="mx-auto w-full max-w-[24rem]">
                  <CardBody className="flex flex-col gap-4">
                    <Typography variant="h4" color="blue-gray">
                      Be the first who see the news
                    </Typography>
                    <Typography
                      className="mb-3 font-normal"
                      variant="paragraph"
                      color="gray"
                    >
                      Your company may not be in the software business, but
                      eventually, a software company will be in your business.{' '}
                    </Typography>

                    <Input
                      label="Email"
                      value={email} // Set the value of the input field to the email state
                      onChange={(e) => setEmail(e.target.value)} // Update the email state on input change
                      size="lg"
                    />
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button variant="gradient" onClick={subscribe} fullWidth>
                      Subscribe
                    </Button>
                  </CardFooter>
                </Card>
              </Dialog>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>{' '}
            </div>
            <div
              className={`navbar-sticky ${
                isMenuOpen
                  ? 'block items-center justify-between w-full md:flex md:w-auto md:order-1'
                  : 'hidden  items-center justify-between w-full md:flex md:w-auto md:order-1"'
              }`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    {link.href ? (
                      <Link
                        to={link.href}
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        aria-current="page"
                      >
                        {link.title}
                      </Link>
                    ) : (
                      <link.component />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </nav>
      {sub ? <AlertComp message={sub} /> : null}
    </>
  );
};

export default Navbar;
