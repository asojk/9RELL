import React from "react";
import { IconContext } from "react-icons";

import { BsTools, BsShieldCheck, BsBuildingGear } from "react-icons/bs";
import { VscNewFile, VscArrowSwap } from "react-icons/vsc";
import { CgProfile, CgMenuRound } from "react-icons/cg";
import { FaQuestionCircle } from "react-icons/fa";
import { IconlyProvider, Category } from "react-iconly";

const CgMenuRoundI = () => {
	return (
		<IconContext.Provider
			value={{ color: "#fff", className: "iconR", size: "40", cursor: "pointer" }}>
			<CgMenuRound />
		</IconContext.Provider>
	);
};

const CategoryI = () => {
	return (
		<IconlyProvider
			primaryColor="#fff"
			size='large'
			set="two-tone"
			stroke="light"
		>
		<Category />
		</IconlyProvider>
	);
};


const ToolsI = () => {
	return (
		<IconContext.Provider
			value={{color: 'var(--red)', className: 'iconR', size: '30'}}
		>
			<BsTools />
		</IconContext.Provider>
	);
};

const NewI = () => {
	return (
		<IconContext.Provider
			value={{ color: "var(--green)", className: "iconR", size: "30" }}
		>
			<VscNewFile />
		</IconContext.Provider>
	);
};

const ReplaceI = () => {
	return (
		<IconContext.Provider
			value={{
				color: "var(--yellow)",
				className: "iconR",
				size: "30"
			}}
		>
			<VscArrowSwap />
		</IconContext.Provider>
	);
};

const ProfileI = () => {
	return (
		<IconContext.Provider
			value={{ color: "blue", className: "iconR", size: "30" }}
		>
			<CgProfile />
		</IconContext.Provider>
	);
};

const QuestionI = () => {
	return (
		<IconContext.Provider
			value={{ color: "var(--blue)", className: "iconR", size: "30" }}
		>
			<FaQuestionCircle />
		</IconContext.Provider>
	);
};

const WarrantyI = () => {
	return (
		<IconContext.Provider
			value={{ color: "var(--blue)", className: "iconR", size: "30" }}
		>
			<BsShieldCheck />
		</IconContext.Provider>
	);
};

const MaintenanceI = () => {
	return (
		<IconContext.Provider
			value={{
				color: "var(--nextui-colors-error)",
				className: "iconR",
				size: "30"
			}}
		>
			<BsBuildingGear />
		</IconContext.Provider>
	);
};

export { CgMenuRoundI, CategoryI, ToolsI, NewI, ReplaceI, ProfileI, QuestionI, WarrantyI, MaintenanceI };
