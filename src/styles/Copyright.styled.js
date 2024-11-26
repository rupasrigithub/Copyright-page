import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const BreadcrumbNav = styled.div`
  margin-bottom: 20px;
  color: #666;
  
  a {
    color: #0066cc;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
`;

export const ContentCard = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const PolicyTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const PolicyText = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;

  a {
    color: #0066cc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Advertisement = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  background: #f5f5f5;
  position: relative;

  .ad-wrapper {
    position: relative;
  }

  .start-here-ad {
    background: #0088cc;
    padding: 30px;
    color: white;
    min-height: 200px;
    display: flex;
    align-items: center;
  }

  .start-here-content {
    width: 100%;

    h2 {
      font-size: 32px;
      margin-bottom: 20px;
      font-weight: bold;
    }

    p {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .ad-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      span {
        color: white;
        opacity: 0.9;
      }

      .open-link {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 4px;
        font-weight: 500;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const StartHereSection = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StartHereButton = styled.a`
  background: #28a745;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background: #218838;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InterviewAd = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  display: flex;
  gap: 15px;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  h3 {
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #666;
    margin: 0;
  }
`;

export const QuickLinks = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  color: #333;
  margin: 0;
  padding: 12px 20px;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
  font-weight: normal;
`;

export const LinksContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const CategorySection = styled.div``;

export const CategoryTitle = styled.h3`
  font-size: 14px;
  color: #4CAF50;
  margin: 0 0 10px 0;
  font-weight: 500;
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkItem = styled.li`
  margin: 8px 0;
  padding-left: 12px;
  position: relative;

  &:before {
    content: "›";
    position: absolute;
    left: 0;
    color: #666;
  }

  a {
    color: #0066cc;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  display: flex;
  gap: 20px;
  color: #666;

  a {
    color: #0066cc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CurrentAffairs = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);

  h2 {
    color: #4CAF50;
    font-size: 18px;
    margin: 0;
  }

  p {
    color: #666;
    margin: 5px 0 0 0;
    font-size: 14px;
  }
`;

export const AdBanner = styled.div`
  margin: 20px 0;
  img {
    width: 100
%;
    height: auto;
    border-radius: 8px;
  }
`;

