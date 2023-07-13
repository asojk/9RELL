import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Dropdown,
  createTheme,
  NextUIProvider,
  Modal,
} from '@nextui-org/react';
import { icons } from './icons.js';

import {
  CategoryI,
  ToolsI,
  NewI,
  ReplaceI,
  QuestionI,
  WarrantyI,
  MaintenanceI,
} from './iconsR.js';

import Contact from './contact.js';

function Nav() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  const collapseItems = [
    'Home',
    'Repair',
    'Replacement',
    'New',
    'Warranty',
    'Maintenance',
    'About',
    'Duro-Last',
    'Projects',
    'Glossary',
  ];
  const logoRef = React.useRef(null);
  const navbarRef = React.useRef(null);

  React.useEffect(() => {
    const logoObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        console.log(entry.contentRect.height);
        if (entry.contentRect.height > 190) {
          if (navbarRef.current) {
            navbarRef.current.style.paddingTop = '4.25rem';
          }
        } else if (entry.contentRect.height > 130) {
          if (navbarRef.current) {
            navbarRef.current.style.paddingTop = '3.5rem';
          }
        } else if (navbarRef.current) {
          navbarRef.current.style.paddingTop = '2.25rem';
        }
      }
    });

    if (logoRef.current) {
      logoObserver.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        logoObserver.unobserve(logoRef.current);
      }
    };
  }, [navbarRef, logoRef]);

  const Gtheme = createTheme({
    type: 'dark',
    theme: {
      colors: {
        gradient: 'linear-gradient(45deg, #2461ff 0%, blue 100%)',
        myColor: '#2461ff',
        background: 'transparent',
        secondary: '#2461ff',
        primaryLight: '#ffcc33',
        primaryLightHover: '#ffcc33',
        primaryLightActive: '#ffcc33',
        primaryLightContrast: '$green600',
        primaryBorder: '#ffcc33',
        primaryBorderHover: '$green600',
        primarySolidHover: '$green700',
        primarySolidContrast: '$white',
        primaryShadow: '#ffcc33',
      },
      space: {},
      sizes: {
        xxs: '0.25rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        xxl: '1.75rem',
        xxxl: '2rem',
      },
      fontSizes: {},
      fonts: { fontFamily: 'Poppins, sans-serif' },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      radii: {},
      shadows: {},
      zIndices: {},
      transitions: {},
    },
  });

  return (
    <div className="navContainer">
      <NextUIProvider
        theme={Gtheme}
        disableBaseline
        css={{ overflow: 'visible', zIndex: '9999' }}
      >
        <Navbar
          ref={navbarRef}
          variant="sticky"
          height="10vh"
          containerCss={{ backgroundColor: 'transparent' }}
          css={{
            $$navbarBackgroundColor: 'transparent',
            $$navbarBlurBackgroundColor: 'transparent',
            transition: 'all 0.5s ease',
            position: 'fixed',
            overflow: 'visible',
            zIndex: '999',
          }}
        >
          <div className="navbarLeft">
            <Navbar.Content enableCursorHighlight>
              <Dropdown animated ripple>
                <Dropdown.Button
                  icon={<CategoryI />}
                  light
                  size="xl"
                  transition="all 0.5s ease"
                  animated
                  ripple={{ color: 'var(--blue)' }}
                />
                <Dropdown.Menu
                  aria-label="Menu"
                  css={{
                    $$dropdownMenuPositionL: 'fixed',
                    $$dropdownMenuPositionT: '0',
                    $$dropdownMenuPositionR: '0',
                    $$dropdownMenuPositionB: '0',
                    $$dropdownMenuWidth: '100vw',
                    $$dropdownMenuHeight: '100vh',
                    $$dropdownItemHeight: '4.5rem',
                  }}
                >
                  <Dropdown.Section title="Services">
                    <Dropdown.Item
                      key="Repair"
                      href="/Pages/repair"
                      icon={<ToolsI />}
                    >
                      <Link to="/repair">
                        <div className="dropdownItemStyle" style={{ marginLeft: '1rem' }}>
                          Roof Repair
                          <div className="dropdownItemDescription" style={{ color:"rgba(250,250,250, .6)" }}>
                            For leaks, cracks, emergency repairs & more.
                          </div>
                        </div>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      key="Replacement"
                      icon={<ReplaceI />}
                      href="/Pages/replacement"
                    >
                      <Link to="/replacement">
                      <div className="dropdownItemStyle" style={{ marginLeft: '1rem' }}>
                          Roof Replacement
                          <div className="dropdownItemDescription" style={{ color:"rgba(250,250,250, .6)" }}>
                            We'll help you find the right solution.
                          </div>
                        </div>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      key="New"
                      icon={<NewI />}
                      href="/Pages/new-roof"
                    >
                      <Link to="/new-roof">
                      <div className="dropdownItemStyle" style={{ marginLeft: '1rem' }}>
                          New Construction
                          <div className="dropdownItemDescription" style={{ color:"rgba(250,250,250, .6)" }}>
                            We work with builders & contractors.
                          </div>
                        </div>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      key="Waranty"
                      icon={<WarrantyI />}
                      href="/Pages/warranty"
                    >
                      <Link to="/warranty">
                      <div className="dropdownItemStyle" style={{ marginLeft: '1rem' }}>
                          Warranty Information
                          <div className="dropdownItemDescription" style={{ color:"rgba(250,250,250, .6)" }}>
                            We stand behind our work.
                          </div>
                        </div>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      key="Maintenance"
                      icon={<MaintenanceI />}
                      href="/Pages/maintenance"
                    >
                      <Link to="/maintenance">
                      <div className="dropdownItemStyle" style={{ marginLeft: '1rem' }}>
                          Maintenance
                          <div className="dropdownItemDescription" style={{ color:"rgba(250,250,250, .6)" }}>
                            Extend the life of your roof.
                          </div>
                        </div>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Section>
                  <Dropdown.Section title="More">
                    <Dropdown.Item key="About" icon={icons.user} href="/about">
                      <Link to="/about">
                      <div className="dropdownItemStyle" style={{ marginLeft: '1rem' }}>
                          About Grell
                          <div className="dropdownItemDescription" style={{ color:"rgba(250,250,250, .6)" }}>
                            Proudly roofing for over 30 years.
                          </div>
                        </div>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      key="DuroLast"
                      icon={icons.activity}
                      href="/Pages/duro-last"
                    >
                      <Link to="/duro-last">
                      <div className="dropdownItemStyle" style={{ marginLeft: '1rem' }}>
                          Duro-Last
                          <div className="dropdownItemDescription" style={{ color:"rgba(250,250,250, .6)" }}>
                            We use only the highest quality products.
                          </div>
                        </div>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      key="Projects"
                      icon={icons.flash}
                      href="/Pages/projects"
                    >
                      <Link to="/projects">
                      <div className="dropdownItemStyle" style={{ marginLeft: '1rem' }}>
                          Projects
                          <div className="dropdownItemDescription" style={{ color:"rgba(250,250,250, .6)" }}>
                            See some of our recent projects.
                          </div>
                        </div>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      key="Glossary"
                      icon={<QuestionI />}
                      href="/Pages/glossary"
                    >
                      <Link to="/glossary">
                      <div className="dropdownItemStyle" style={{ marginLeft: '1rem' }}>
                          Glossary
                          <div className="dropdownItemDescription" style={{ color:"rgba(250,250,250, .6)" }}>
                            Questions? We have answers.
                          </div>
                        </div>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Section>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Content>
          </div>
          <div className="navbarCenter">
            <Navbar.Brand key="Home">
              <Link to="/">
                <img
                  ref={logoRef}
                  src="/assets/grell/Tagged.png"
                  alt="grell logo"
                  style={{
                    p: '$1',
                    m: '$1',
                    display: 'flex',
                    flexShrink: 1,
                    flexGrow: 1,
                    maxWidth: '100%',
                    maxHeight: '12rem',
                    width: 'auto',
                    height: 'auto',
                    marginBottom: '2rem',
                  }}
                />
              </Link>
            </Navbar.Brand>
          </div>
          <div className="navbarRight">
            <div className="comic-button" onClick={handler}>
              Contact
            </div>
          </div>
          <Modal
            blur
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
            width="75%"
          >
            <Modal.Body
              css={{ margin: '0', padding: '0', textAlign: 'center' }}
            >
              <Contact />
            </Modal.Body>
            <Modal.Footer />
          </Modal>

          <Navbar.Collapse
            transitionTime="100"
            className="collapseMenu"
            css={{}}
          >
            {collapseItems.map((item, index) => (
              <Navbar.CollapseItem
                key={item}
                activeColor="warning"
                isActive={index === 2}
              >
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </NextUIProvider>
    </div>
  );
}

export default Nav;
