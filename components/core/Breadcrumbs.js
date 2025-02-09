import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

const BreadcrumbNav = styled.nav`
`;

const BreadcrumbList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 8px;
  font-size: 0.9em;
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

  &:not(:last-child)::after {
    content: '>';
    margin: 0 8px;
    color: #666;
  }
`;

const Breadcrumbs = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment);

  // Function to capitalize each word
  const capitalize = (text) => {
    return text
      .split('-') // Handle kebab-case (e.g., "custom-cakes")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
      .join(' '); // Join words back together
  };

  // Build the correct hrefs for the segments
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
          // Skip "shop" in the breadcrumbs
          if (segment.toLowerCase() === 'shop') {
            return null;
          }

          const href = buildHref(pathSegments, index);
          const formattedText = capitalize(segment);

          return (
            <BreadcrumbItem key={href}>
              {index !== pathSegments.length - 1 ? (
                <Link href={href}>{formattedText}</Link>
              ) : (
                <span>{formattedText}</span>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbNav>
  );
};

export default Breadcrumbs;
