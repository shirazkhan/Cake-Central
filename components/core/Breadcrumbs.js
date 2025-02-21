import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';

const BreadcrumbNav = styled.nav`
  font-size: 0.9em;
`;

const BreadcrumbList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 8px;
  align-items: center;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  color: #333;

  a {
    text-decoration: none;
    color: #0070f3;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Separator = styled.span`
  margin: 0 8px;
  color: #666;
`;

const Breadcrumbs = () => {
  const router = useRouter();

  // Remove query parameters and hash fragments
  const pathSegments = router.asPath
    .split('?')[0]
    .split('#')[0]
    .split('/')
    .filter(segment => segment);

  // Special cases for capitalization
  const specialCases = {
    faq: "FAQ",
    "our-story": "Our Story",
  };

  // Capitalization function
  const capitalize = (text) => {
    return specialCases[text.toLowerCase()] || 
      text.split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
  };

  // Build correct hrefs for the segments
  const buildHref = (segments, index) => {
    return '/' + segments.slice(0, index + 1).join('/');
  };

  return (
    <BreadcrumbNav aria-label="breadcrumb">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        {pathSegments.map((segment, index) => {
          if (segment.toLowerCase() === 'shop') return null; // Skip "shop"

          const href = buildHref(pathSegments, index);
          const formattedText = capitalize(segment);
          const isLast = index === pathSegments.length - 1;

          return (
            <React.Fragment key={href}>
              <Separator>›</Separator>
              <BreadcrumbItem>
                {isLast ? (
                  <span aria-current="page">{formattedText}</span>
                ) : (
                  <Link href={href}>{formattedText}</Link>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbNav>
  );
};

export default Breadcrumbs;
