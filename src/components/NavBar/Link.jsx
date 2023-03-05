import { Children, cloneElement } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

const Link = ({ children, href, pushRoute, ...props }) => {
  const { pathname, push, replace, query } = useRouter();
  const child = Children.only(children);
  const className = `w-8 h-8 ${
    pathname.includes(href)
      ? 'transition ease-in-out stroke-dark-purple-1 fill-white scale-125'
      : 'stroke-white'
  }`;
  const handleChangePage = (e) => {
    e.preventDefault();
    if (pushRoute) {
      push(href);
    } else {
      replace(`${href}/${query.id}`);
    }
  };

  return (
    <NextLink
      href={href}
      legacyBehavior={false}
      onClick={(e) => handleChangePage(e)}
      {...props}
    >
      {cloneElement(child, { className: className || null })}
    </NextLink>
  );
};

export default Link;
