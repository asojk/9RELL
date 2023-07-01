import * as React from "react";
import { Link } from "react-router-dom";
import { icons } from "./icons.js";
import "./nav.css";

import {
	Navbar,
	Dropdown,
	Button,
	createTheme,
	NextUIProvider,
	Modal
} from "@nextui-org/react";

import {
	ToolsI,
	NewI,
	ReplaceI,
	QuestionI,
	WarrantyI,
	MaintenanceI
} from "./iconsR.js";

import Book from "./ContactUs.js";

function NextNav() {
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
	const closeHandler = () => {
		setVisible(false);
		console.log("closed");
	};
	const collapseItems = [
		"Roof Repair",
		"Roof Replacement",
		"New Construction",
		"Warranties",
		"Maintenance",
		"Glossary",
		"About Grell",
		"Projects",
		"Products",
		"Contact"
	];
	const logoRef = React.useRef(null);
	const navbarRef = React.useRef(null);

	React.useEffect(() => {
		const logoObserver = new ResizeObserver(entries => {
			for (let entry of entries) {
				if (entry.contentRect.height > 130) {
					if (navbarRef.current) {
						navbarRef.current.style.paddingTop = '3.5rem';
					}
				} else {
					if (navbarRef.current) {
						navbarRef.current.style.paddingTop = '1rem';
					}
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
	}, []);

	const Gtheme = createTheme({
		type: "dark",
		theme: {
			colors: {
				gradient: "linear-gradient(45deg, #2461ff 0%, blue 100%)",
				myColor: "#2461ff",
				background: "transparent",
				secondary: "#2461ff",
				primaryLight: "#ffcc33",
				primaryLightHover: "$green300",
				primaryLightActive: "$green400",
				primaryLightContrast: "$green600",
				primaryBorder: "$green500",
				primaryBorderHover: "$green600",
				primarySolidHover: "$green700",
				primarySolidContrast: "$white",
				primaryShadow: "$green500"
			},
			space: {},
			sizes: {
				xxs: "0.25rem",
				xs: "0.5rem",
				sm: "0.75rem",
				md: "1rem",
				lg: "1.25rem",
				xl: "1.5rem",
				xxl: "1.75rem",
				xxxl: "2rem"
			},
			fontSizes: {},
			fonts: { fontFamily: "Poppins, sans-serif" },
			fontWeights: {},
			lineHeights: {},
			letterSpacings: {},
			radii: {},
			shadows: {},
			zIndices: {},
			transitions: {}
		}
	});

	return (
		<NextUIProvider
			theme={Gtheme}
			disableBaseline
			css={{ overflow: "visible", zIndex: "999" }}
		>
			<Navbar
			isCompact
				ref={navbarRef}
				variant={"floating"}
				className="Navbar"
				css={{
					background: "transparent",
					transition: "all 0.5s ease",
					maxWidth: "100%",
					position: "fixed",
					overflow: "visible",
					alignContent: "center",
					justifyContent: "center",
					alignSelf: "center",
					alignItems: "center",
					justifyItems: "space-between",
					justifySelf: "center",
				}}
			>
			<div className="navbarLeft">
				<Navbar.Toggle showIn="xs" css={{  }}/>
				<Navbar.Content hideIn="xs">
					<Dropdown isBordered>
						<Navbar.Item>
							<Dropdown.Button
								auto
								light
								css={{
									px: 0,
									dFlex: "left",
									svg: { pe: "none" }
								}}
								iconRight={icons.chevron}
								ripple={false}
							>
								Services
							</Dropdown.Button>
						</Navbar.Item>
						<Dropdown.Menu
							aria-label="ACME features"
							css={{
								$$dropdownMenuWidth: "340px",
								$$dropdownItemHeight: "70px",
								"& .nextui-dropdown-item": {
									py: "$4",
									// dropdown item left icon
									svg: {
										color: "$secondary",
										mr: "$4"
									},
									// dropdown item title
									"& .nextui-dropdown-item-content": {
										w: "100%",
										fontWeight: "$semibold"
									}
								}
							}}
						>
							<Dropdown.Item
								key="Roof Repair"
								href="/views/repair"
								icon={<ToolsI />}
							>
								<Link to="/repair">
									<div className="dropdownItemStyle">
										{" "}
										Roof Repair
										<div className="dropdownItemDescription">
											{" "}
											For leaks, cracks, emergency repairs & more.
										</div>
									</div>
								</Link>
							</Dropdown.Item>
							<Dropdown.Item
								key="Roof Replacement"
								icon={<ReplaceI />}
								href="/views/replacement"
							>
								<Link to="/replacement">
									<div className="dropdownItemStyle">
										{" "}
										Roof Replacement
										<div className="dropdownItemDescription">
											{" "}
											We'll help you find the right solution.
										</div>
									</div>
								</Link>
							</Dropdown.Item>
							<Dropdown.Item
								key="New Construction"
								icon={<NewI />}
								href="/views/new-roof"
							>
								<Link to="/new-roof">
									<div className="dropdownItemStyle">
										{" "}
										New Construction
										<div className="dropdownItemDescription">
											{" "}
											We work with builders & contractors.
										</div>
									</div>
								</Link>
							</Dropdown.Item>
							<Dropdown.Item
								key="Waranties"
								icon={<WarrantyI />}
								href="/views/warranty"
							>
								<Link to="/warranty">
									<div className="dropdownItemStyle">
										{" "}
										Warranty Information
										<div className="dropdownItemDescription">
											{" "}
											We stand behind our work.
										</div>
									</div>
								</Link>
							</Dropdown.Item>
							<Dropdown.Item
								key="Maintenance"
								icon={<MaintenanceI />}
								href="/views/maintenance"
							>
								<Link to="/maintenance">
									<div className="dropdownItemStyle">
										{" "}
										Maintenance
										<div className="dropdownItemDescription">
											{" "}
											Extend the life of your roof.
										</div>
									</div>
								</Link>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown isBordered>
						<Navbar.Item>
							<Dropdown.Button
								auto
								light
								css={{
									px: 0,
									dflex: "left",
									svg: { pe: "none" }
								}}
								iconRight={icons.chevron}
								ripple={false}
							>
								Company
							</Dropdown.Button>
						</Navbar.Item>
						<Dropdown.Menu
							aria-label="ACME features"
							css={{
								$$dropdownMenuWidth: "340px",
								$$dropdownItemHeight: "70px",
								"& .nextui-dropdown-item": {
									py: "$4",
									// dropdown item left icon
									svg: {
										color: "$secondary",
										mr: "$4"
									},
									// dropdown item title
									"& .nextui-dropdown-item-content": {
										w: "100%",
										fontWeight: "$semibold"
									}
								}
							}}
						>
							<Dropdown.Item key="About Grell" icon={icons.user} href="/about">
								<Link to="/about">
									<div className="dropdownItemStyle">
										{" "}
										About Grell
										<div className="dropdownItemDescription">
											Proudly roofing for over 30 years.
										</div>
									</div>
								</Link>
							</Dropdown.Item>
							<Dropdown.Item
								key="Products"
								icon={icons.activity}
								href="/views/duro-last"
							>
								<Link to="/duro-last">
									<div className="dropdownItemStyle">
										{" "}
										Duro-Last
										<div className="dropdownItemDescription">
											{" "}
											We use only the highest quality products.
										</div>
									</div>
								</Link>
							</Dropdown.Item>
							<Dropdown.Item
								key="Projects"
								icon={icons.flash}
								href="/views/projects"
							>
								<Link to="/projects">
									<div className="dropdownItemStyle">
										{" "}
										Projects
										<div className="dropdownItemDescription">
											{" "}
											See some of our recent projects.
										</div>
									</div>
								</Link>
							</Dropdown.Item>
							<Dropdown.Item key="Glossary" icon={<QuestionI />} href="/views/glossary">
								<Link to="/glossary">
									<div className="dropdownItemStyle">
										{" "}
										Glossary
										<div className="dropdownItemDescription">
											{" "}
											Questions? We have answers.
										</div>
									</div>
								</Link>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Navbar.Content>
				</div>
				<div className="navbarCenter">
				<Navbar.Brand
					style={{

					}}
				>
					<Link to="/">
						<img
						ref={logoRef}
							src="/assets/grell/Tagged.png"
							alt="grell logo"
							style={{
								p: "$1",
								m: "$1",
								display: "flex",
								flexShrink: 1,
								flexGrow: 1,
								maxWidth: "100%",
								maxHeight: "12rem",
								width: "auto",
								height: "auto",
								paddingBottom: "1rem",
							}}
						></img>
					</Link>
				</Navbar.Brand>
				</div>
				<div className="navbarRight">
				<Button
					bordered
					color="#fff"
					onPress={handler}
					auto
					css={{
						borderWidth: "0",
						borderRadius: "0",
						m: "0",
						p: "0",
						marginLeft: "1rem",
						borderBottom: ".15rem outset $colors$red",
						background: "transparent",
						height: "$10",
						boxShadow: "$md",
						"&:hover": {
							borderBottom: ".19rem outset $colors$yellow"
						}
					}}
				>
					Contact
				</Button>
				</div>
				<Modal
					blur
					closeButton
					aria-labelledby="modal-title"
					open={visible}
					onClose={closeHandler}
					width="50%"
				>
					<Modal.Body css={{ margin: "0", padding: "0", textAlign: "center" }}>
						<Book />
					</Modal.Body>
					<Modal.Footer>
						<Button
							auto
							onPress={closeHandler}
							css={{ backgroundColor: "#2461ff" }}
							id="Schedule"
							type="submit"
							className="submit"
						>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>

				<Navbar.Collapse className="collapseMenu">
					{collapseItems.map((item, index) => (
						<Navbar.CollapseItem
							key={item}
							activeColor="warning"
							css={{
								p: ".5rem",
								color: index === collapseItems.length - 1 ? "$error" : ""
							}}
							isActive={index === 2}
						>
							<Link
								color="inherit"
								css={{
									maxWidth: "50%"
								}}
								href="#"
							>
								{item}
							</Link>
						</Navbar.CollapseItem>
					))}
				</Navbar.Collapse>
			</Navbar>
		</NextUIProvider>
	);
}

export default NextNav;
