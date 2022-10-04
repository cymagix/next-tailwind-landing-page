import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Container } from '../../atoms/Container';
import Link from 'next/link';
import { Paragraph } from '../../atoms/Typography';
import { useLocale } from '../../../hooks/useLocale';

export const Header: React.FC = () => {
  const { t } = useLocale();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navStyle = useSpring({
    opacity: isOpen ? 0.9 : 0,
    right: isOpen ? 0 : -270,
  });
  const hamburgerStyle2 = useSpring({
    opacity: isOpen ? 0 : 1,
  });
  const hamburgerStyle1 = useSpring({
    y: isOpen ? 8 : 0,
    rotate: isOpen ? 225 : 0,
  });
  const hamburgerStyle3 = useSpring({
    y: isOpen ? -8 : 0,
    rotate: isOpen ? -225 : 0,
  });
  return (
    <>
      <header className="fixed z-20 flex h-24 w-full items-center  overflow-hidden">
        <Container>
          <div className="flex items-start text-2xl font-black text-primary-900">
            <Link href="/">Company</Link>
          </div>

          <div className="z-20 flex items-end">
            <button
              className="ml-4 flex flex-col"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <animated.span
                style={hamburgerStyle1}
                className="mb-1 h-1 w-6 rounded-full bg-primary-800"
              />
              <animated.span
                style={hamburgerStyle2}
                className="mb-1 h-1 w-6 rounded-full bg-primary-800"
              />
              <animated.span
                style={hamburgerStyle3}
                className="mb-1 h-1 w-6 rounded-full bg-primary-800"
              />
            </button>
          </div>
          <animated.nav
            style={navStyle}
            className="fixed top-0 z-10 flex h-full flex-col bg-primary-50 p-6 text-lg text-primary-900"
          >
            <ul className="mt-24 flex flex-col">
              <li>
                <Paragraph className="flex cursor-pointer py-2 px-8 hover:text-primary-500">
                  <Link href="/">{t.LandingPage.title}</Link>
                </Paragraph>
              </li>
              <li>
                <Paragraph className="flex cursor-pointer py-2 px-8 hover:text-primary-500">
                  <Link href="/contact">{t.ContactPage.title}</Link>
                </Paragraph>
              </li>
              <li>
                <Paragraph className="flex cursor-pointer py-2 px-8 hover:text-primary-500">
                  <Link href="/privacy-policy">
                    {t.PrivacyPolicyPage.title}
                  </Link>
                </Paragraph>
              </li>
              <li>
                <Paragraph className="flex cursor-pointer py-2 px-8 hover:text-primary-500">
                  <Link href="/terms-conditions">
                    {t.TermsConditionsPage.title}
                  </Link>
                </Paragraph>
              </li>
            </ul>
          </animated.nav>
        </Container>
      </header>
      <div className="relative h-24 w-full" />
    </>
  );
};
