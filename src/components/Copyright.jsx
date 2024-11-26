'use client'

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import Header from './Header';
import {
  Container,
  BreadcrumbNav,
  MainContent,
  ContentCard,
  PolicyTitle,
  PolicyText,
  Advertisement,
  StartHereSection,
  StartHereButton,
  Sidebar,
  InterviewAd,
  QuickLinks,
  SectionTitle,
  LinksContainer,
  CategorySection,
  CategoryTitle,
  LinksList,
  LinkItem,
  Footer,
  CurrentAffairs,
  AdBanner
} from '../styles/Copyright.styled';

const advertisements = [
  {
    id: 1,
    image: '/img1.png',
    link: '#'
  },
  {
    id: 2,
    type: 'start-here',
    title: 'Start Here',
    step: 'Step 1: Click Here',
    subtitle: 'Esseps',
    link: '#'
  },
  {
    id: 3,
    image: '/img3.png',
    link: '#'
  },
  {
    id: 4,
    image: '/img3.png',
    link: '#'
  },
  {
    id: 5,
    image: '/img4.png',
    link: '#'
  },
  {
    id: 6,
    image: '/img5.png',
    link: '#'
  }
];

const sidebarAds = [
  { id: 1, image: '/img6.jpg', link: '#' },
  { id: 2, image: '/img7.jpg', link: '#' },
  { id: 3, image: '/img8.jpg', link: '#' },
  { id: 4, image: '/img9.jpg', link: '#' },
  { id: 5, image: '/img10.jpg', link: '#' }
];

const Copyright = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [currentSidebarAd, setCurrentSidebarAd] = useState(0);

  useEffect(() => {
    const mainAdTimer = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % advertisements.length);
    }, 5000); // Change main ad every 5 seconds

    const sidebarAdTimer = setInterval(() => {
      setCurrentSidebarAd((prevAd) => (prevAd + 1) % sidebarAds.length);
    }, 5000); // Change sidebar ad every 5 seconds

    return () => {
      clearInterval(mainAdTimer);
      clearInterval(sidebarAdTimer);
    };
  }, []);

  const renderAdContent = (ad) => {
    if (ad.type === 'start-here') {
      return (
        <div className="start-here-ad">
          <div className="start-here-content">
            <h2>{ad.title}</h2>
            <p>{ad.step}</p>
            <div className="ad-footer">
              <span>{ad.subtitle}</span>
              <a href={ad.link} className="open-link">
                Open →
              </a>
            </div>
          </div>
        </div>
      );
    }

    return (
      <a href={ad.link}>
        <img 
          src={ad.image} 
          alt={ad.alt || "Advertisement"}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </a>
    );
  };

  return (
    <>
      <Header />
      <Container>
        <BreadcrumbNav>
          <a href="/">Home</a> » Copyright
        </BreadcrumbNav>

        <Advertisement className="main-ad">
          <div className="ad-wrapper">
            {renderAdContent(advertisements[currentAd])}
          </div>
        </Advertisement>

        <MainContent>
          <div>
            <ContentCard>
              <PolicyTitle>Copyright Policy</PolicyTitle>
              <PolicyText>
                All pages, data and graphics presented on this website are the property of www.IndiaBIX.com.
              </PolicyText>
              <PolicyText>
                The pages may not be redistributed or reproduced in any way, shape, or form without the written permission of www.IndiaBIX.com.
              </PolicyText>
              <PolicyText>
                www.IndiaBIX.com respects the copyrights, trademarks and intellectual property of others and also we expect this from other users. In this site, if you found any information that is owned by you or any content that violates your intellectual property rights, please contact to us with all necessary documents/information that authenticate your authority on your property.
              </PolicyText>
              <PolicyText>
                For all other policies, terms and conditions, please read our <a href="#">Terms of Service</a>.
              </PolicyText>
            </ContentCard>

            <StartHereSection>
              <StartHereButton href="#">START HERE</StartHereButton>
              <div>
                <div>Step 1: Click Here</div>
                <div>Esseps</div>
              </div>
              <a href="#" style={{ color: '#28a745', textDecoration: 'none' }}>Open →</a>
            </StartHereSection>
          </div>

          <Sidebar>
            <CurrentAffairs>
              <Clock className="w-6 h-6 text-[#4CAF50]" />
              <div>
                <h2>Current Affairs</h2>
                <p>Check out the latest current affairs questions and answers.</p>
              </div>
            </CurrentAffairs>

            <AdBanner>
              <a href={sidebarAds[currentSidebarAd].link}>
                <img 
                  src={sidebarAds[currentSidebarAd].image}
                  alt={`Advertisement ${currentSidebarAd + 1}`}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </a>
            </AdBanner>

            <QuickLinks>
              <SectionTitle>Quick links</SectionTitle>
              <LinksContainer>
                <CategorySection>
                  <CategoryTitle>Quantitative Aptitude</CategoryTitle>
                  <LinksList>
                    <LinkItem><a href="#">Arithmetic</a></LinkItem>
                    <LinkItem><a href="#">Data Interpretation</a></LinkItem>
                  </LinksList>

                  <CategoryTitle style={{ marginTop: '20px' }}>Verbal (English)</CategoryTitle>
                  <LinksList>
                    <LinkItem><a href="#">Verbal Ability</a></LinkItem>
                    <LinkItem><a href="#">Verbal Test</a></LinkItem>
                  </LinksList>

                  <CategoryTitle style={{ marginTop: '20px' }}>Reasoning</CategoryTitle>
                  <LinksList>
                    <LinkItem><a href="#">Logical</a></LinkItem>
                    <LinkItem><a href="#">Verbal</a></LinkItem>
                    <LinkItem><a href="#">Nonverbal</a></LinkItem>
                  </LinksList>
                </CategorySection>

                <CategorySection>
                  <CategoryTitle>Programming</CategoryTitle>
                  <LinksList>
                    <LinkItem><a href="#">Python Programming</a></LinkItem>
                    <LinkItem><a href="#">C Programming</a></LinkItem>
                    <LinkItem><a href="#">C++, C#</a></LinkItem>
                    <LinkItem><a href="#">Java</a></LinkItem>
                  </LinksList>

                  <CategoryTitle style={{ marginTop: '20px' }}>Interview</CategoryTitle>
                  <LinksList>
                    <LinkItem><a href="#">GD</a></LinkItem>
                    <LinkItem><a href="#">HR</a></LinkItem>
                    <LinkItem><a href="#">Technical Interview</a></LinkItem>
                  </LinksList>

                  <CategoryTitle style={{ marginTop: '20px' }}>Placement Papers</CategoryTitle>
                  <LinksList>
                    <LinkItem><a href="#">Placement Papers</a></LinkItem>
                    <LinkItem><a href="#">Submit Paper</a></LinkItem>
                  </LinksList>
                </CategorySection>
              </LinksContainer>
            </QuickLinks>
          </Sidebar>
        </MainContent>
      </Container>
    </>
  );
}

export default Copyright;

