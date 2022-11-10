import { Children, cloneElement } from 'react';
import { useRouter } from 'next/router';

const Link = ({ children, href, pushRoute, ...props }) => {
  const { pathname, push, replace } = useRouter();
  const child = Children.only(children);
  const className = `w-8 h-8 ${
    href === pathname
      ? 'transition ease-in-out stroke-dark-purple-1 fill-white scale-125'
      : 'stroke-white'
  }`;
  const handleChangePage = (e) => {
    e.preventDefault();
    if (pushRoute) {
      push(href);
    } else {
      replace(href);
    }
  };

  return (
    <a href={href} onClick={(e) => handleChangePage(e)} {...props}>
      {cloneElement(child, { className: className || null })}
    </a>
  );
};

export default Link;
