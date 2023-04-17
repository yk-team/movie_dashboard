import React from "react";
import { Typography } from "@material-tailwind/react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { IconButton } from "@mui/material";

type FooterProps = {};

const Footer = (props: FooterProps) => {
  return (
    <footer className="w-full px-8 py-14">
      <div className="flex flex-row flex-wrap items-center justify-center gap-8  md:justify-evenly">
        <div className="">
          <Logo />
        </div>
        <ul className="flex flex-wrap gap-5 items-center">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-[--color-primary] focus:text-[--color-primary]"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-[--color-primary] hover:text-[--color-primary]"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-[--color-primary] hover:text-[--color-primary]"
            >
              Contribute
            </Typography>
          </li>

        </ul>
        <ul className="flex gap-2">
          <li>
            <IconButton>
              <Telegram />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <Linkedin />
            </IconButton>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023
      </Typography>
    </footer>
  );
};

export default Footer;
