/* eslint-disable jsx-a11y/anchor-is-valid */
import { Children, cloneElement } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const Link = ({ children, href, ...props }) => {
  const { pathname } = useRouter();
  const child = Children.only(children);
  const className = `w-8 h-8 ${
    href === pathname
      ? 'transition ease-in-out stroke-dark-purple-1 fill-white scale-125'
      : 'stroke-white'
  }`;

  return (
    <NextLink href={href} legacyBehavior {...props}>
      <a>{cloneElement(child, { className: className || null })}</a>
    </NextLink>
  );
};

export default Link;
