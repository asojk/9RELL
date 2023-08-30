import React from 'react';
import {IconContext} from 'react-icons';

import {BsTools, BsShieldCheck, BsBuildingGear} from 'react-icons/bs';
import {VscNewFile, VscArrowSwap} from 'react-icons/vsc';
import {CgProfile, CgMenuRound} from 'react-icons/cg';
import {FaQuestionCircle} from 'react-icons/fa';
import {IconlyProvider, Category} from 'react-iconly';
import {AiOutlineQuestionCircle} from 'react-icons/ai';

const PhoneIcon = () => (
	<svg width='19' height='18' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg' style={{marginRight: '3px'}}>
		<path
			d='M13.941 17.0625C13.0935 17.0625 12.201 16.86 11.2785 16.47C10.3785 16.0875 9.47102 15.5625 8.58602 14.925C7.70852 14.28 6.86102 13.56 6.05852 12.7725C5.26352 11.97 4.54352 11.1225 3.90602 10.2525C3.26102 9.3525 2.74352 8.4525 2.37602 7.5825C1.98602 6.6525 1.79102 5.7525 1.79102 4.905C1.79102 4.32 1.89602 3.765 2.09852 3.2475C2.30852 2.715 2.64602 2.22 3.10352 1.7925C3.68102 1.2225 4.34102 0.9375 5.04602 0.9375C5.33852 0.9375 5.63852 1.005 5.89352 1.125C6.18602 1.26 6.43352 1.4625 6.61352 1.7325L8.35352 4.185C8.51102 4.4025 8.63102 4.6125 8.71352 4.8225C8.81102 5.0475 8.86352 5.2725 8.86352 5.49C8.86352 5.775 8.78102 6.0525 8.62352 6.315C8.51102 6.5175 8.33852 6.735 8.12102 6.9525L7.61102 7.485C7.61852 7.5075 7.62602 7.5225 7.63352 7.5375C7.72352 7.695 7.90352 7.965 8.24852 8.37C8.61602 8.79 8.96102 9.1725 9.30602 9.525C9.74852 9.96 10.116 10.305 10.461 10.59C10.8885 10.95 11.166 11.13 11.331 11.2125L11.316 11.25L11.8635 10.71C12.096 10.4775 12.321 10.305 12.5385 10.1925C12.951 9.9375 13.476 9.8925 14.001 10.11C14.196 10.1925 14.406 10.305 14.631 10.4625L17.121 12.2325C17.3985 12.42 17.601 12.66 17.721 12.945C17.8335 13.23 17.886 13.4925 17.886 13.755C17.886 14.115 17.8035 14.475 17.646 14.8125C17.4885 15.15 17.2935 15.4425 17.046 15.7125C16.6185 16.185 16.1535 16.5225 15.6135 16.74C15.096 16.95 14.5335 17.0625 13.941 17.0625ZM5.04602 2.0625C4.63352 2.0625 4.25102 2.2425 3.88352 2.6025C3.53852 2.925 3.29852 3.2775 3.14852 3.66C2.99102 4.05 2.91602 4.4625 2.91602 4.905C2.91602 5.6025 3.08102 6.36 3.41102 7.14C3.74852 7.935 4.22102 8.76 4.82102 9.585C5.42102 10.41 6.10352 11.2125 6.85352 11.97C7.60352 12.7125 8.41352 13.4025 9.24602 14.01C10.056 14.6025 10.8885 15.0825 11.7135 15.4275C12.996 15.975 14.196 16.1025 15.186 15.69C15.5685 15.5325 15.906 15.2925 16.2135 14.9475C16.386 14.76 16.521 14.5575 16.6335 14.3175C16.7235 14.13 16.7685 13.935 16.7685 13.74C16.7685 13.62 16.746 13.5 16.686 13.365C16.6635 13.32 16.6185 13.2375 16.476 13.14L13.986 11.37C13.836 11.265 13.701 11.19 13.5735 11.1375C13.4085 11.07 13.341 11.0025 13.086 11.16C12.936 11.235 12.801 11.3475 12.651 11.4975L12.081 12.06C11.7885 12.345 11.3385 12.4125 10.9935 12.285L10.791 12.195C10.4835 12.03 10.1235 11.775 9.72602 11.4375C9.36602 11.13 8.97602 10.77 8.50352 10.305C8.13602 9.93 7.76852 9.5325 7.38602 9.09C7.03352 8.6775 6.77852 8.325 6.62102 8.0325L6.53102 7.8075C6.48602 7.635 6.47102 7.5375 6.47102 7.4325C6.47102 7.1625 6.56852 6.9225 6.75602 6.735L7.31852 6.15C7.46852 6 7.58102 5.8575 7.65602 5.73C7.71602 5.6325 7.73852 5.55 7.73852 5.475C7.73852 5.415 7.71602 5.325 7.67852 5.235C7.62602 5.115 7.54352 4.98 7.43852 4.8375L5.69852 2.3775C5.62352 2.2725 5.53352 2.1975 5.42102 2.145C5.30102 2.0925 5.17352 2.0625 5.04602 2.0625ZM11.316 11.2575L11.196 11.7675L11.3985 11.2425C11.361 11.235 11.331 11.2425 11.316 11.2575Z'
			fill='#fff'
		/>
	</svg>
);

const EmailIcon = () => (
	<svg height='22' width='22' id='Layer_1' style={{marginRight: '3px'}} version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' fill='none'>
		<path
			d='M64,128v256h384V128H64z M256,267.9L93.2,144h325.6L256,267.9z M80,368V154.1l115.1,87.6L127,319l2,2l78.9-69.6L256,288  l48.1-36.6L383,321l2-2l-68.1-77.4L432,154.1V368H80z'
			stroke='#fff'
			strokeWidth={14}
		/>
	</svg>
);

const SmsIcon = () => (
	<svg width='18' height='18' data-name='Livello 1' id='Livello_1' viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg' fill='none'>
		<path
			d='M113,0H15A15,15,0,0,0,0,15V79.57a15,15,0,0,0,15,15H38.28a1,1,0,0,1,1,1V121a7,7,0,0,0,11.95,4.95L82.31,94.87a1,1,0,0,1,.71-.29h30a15,15,0,0,0,15-15V15A15,15,0,0,0,113,0Zm9,79.57a9,9,0,0,1-9,9H83a7,7,0,0,0-4.95,2L47,121.7a1,1,0,0,1-1.71-.71V95.57a7,7,0,0,0-7-7H15a9,9,0,0,1-9-9V15a9,9,0,0,1,9-9h98a9,9,0,0,1,9,9Z'
			stroke='#fff'
			strokeWidth={6}
		/>
	</svg>
);

const ActivityIcon = () => (
	<svg data-name='Iconly/Curved/Activity' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
		<g fill='none' stroke='var(--blue-500)' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit={10} strokeWidth={1.5}>
			<path d='M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78' />
			<path d='M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z' />
			<path d='M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187' />
		</g>
	</svg>
);

const FlashIcon = () => (
	<svg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z'
			stroke='var(--m3)'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={10}
			strokeWidth={1.5}
		/>
	</svg>
);

const UserIcon = () => (
	<svg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z'
			stroke='var(--m3)'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={10}
			strokeWidth={1.5}
		/>
		<path
			d='M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26'
			stroke='var(--m3)'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
		/>
	</svg>
);

const CgMenuRoundI = () => (
	<IconContext.Provider value={{color: 'var(--m3)', className: 'iconR', size: '24', cursor: 'pointer'}}>
		<CgMenuRound />
	</IconContext.Provider>
);

const CategoryI = () => (
	<IconlyProvider primaryColor='var(--m3)' size='24' set='two-tone' stroke='bold'>
		<Category />
	</IconlyProvider>
);

const ToolsI = () => (
	<IconContext.Provider value={{color: 'var(--y2)', className: 'iconR', size: '24'}}>
		<BsTools />
	</IconContext.Provider>
);

const NewI = () => (
	<IconContext.Provider value={{color: 'var(--y2)', className: 'iconR', size: '24'}}>
		<VscNewFile />
	</IconContext.Provider>
);

const ReplaceI = () => (
	<IconContext.Provider
		value={{
			color: 'var(--y2)',
			className: 'iconR',
			size: '24',
		}}>
		<VscArrowSwap />
	</IconContext.Provider>
);

const ProfileI = () => (
	<IconContext.Provider value={{color: 'var(--m3)', className: 'iconR', size: '24'}}>
		<CgProfile />
	</IconContext.Provider>
);

const QuestionI = () => (
	<IconContext.Provider value={{color: 'var(--m3)', className: 'iconR', size: '24'}}>
		<FaQuestionCircle />
	</IconContext.Provider>
);

const WarrantyI = () => (
	<IconContext.Provider value={{color: 'var(--m3)', className: 'iconR', size: '24'}}>
		<BsShieldCheck />
	</IconContext.Provider>
);

const MaintenanceI = () => (
	<IconContext.Provider
		value={{
			color: 'var(--m3)',
			className: 'iconR',
			size: '24',
		}}>
		<BsBuildingGear />
	</IconContext.Provider>
);

const ProductsI = () => (
	<svg width='24' height='24'
  fill="var(--m3)" 
  xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd'>
		<path d='M21.62 20.196c1.055-.922 1.737-2.262 1.737-3.772 0-1.321-.521-2.515-1.357-3.412v-6.946l-11.001-6.066-11 6v12.131l11 5.869 5.468-2.917c.578.231 1.205.367 1.865.367.903 0 1.739-.258 2.471-.676l2.394 3.226.803-.596-2.38-3.208zm-11.121 2.404l-9.5-5.069v-10.447l9.5 4.946v10.57zm1-.001v-10.567l5.067-2.608.029.015.021-.04 4.384-2.256v5.039c-.774-.488-1.686-.782-2.668-.782-2.773 0-5.024 2.252-5.024 5.024 0 1.686.838 3.171 2.113 4.083l-3.922 2.092zm6.833-2.149c-2.219 0-4.024-1.808-4.024-4.026s1.805-4.025 4.024-4.025c2.22 0 4.025 1.807 4.025 4.025 0 2.218-1.805 4.026-4.025 4.026zm-.364-3.333l-1.306-1.147-.66.751 2.029 1.782 2.966-3.12-.725-.689-2.304 2.423zm-16.371-10.85l4.349-2.372 9.534 4.964-4.479 2.305-9.404-4.897zm9.4-5.127l9.404 5.186-3.832 1.972-9.565-4.98 3.993-2.178z' />
	</svg>
);
const MaintI = () => (
<svg
fill="var(--m3)" 
xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 20 20">
        <path d="M11.69 11.36l1-1.73c.06-.11.04-.24-.06-.32l-1.06-.83c.03-.15.04-.32.04-.48 0-.16-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.36-.84-.49l-.19-1.32C9.09 3.09 8.98 3 8.86 3h-2c-.12 0-.23.09-.25.21l-.19 1.33c-.3.13-.59.29-.84.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.1-.03.24.06.32l1.06.83c-.03.15-.04.32-.04.48 0 .16.01.33.04.49l-1.06.83c-.09.08-.12.22-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.36.84.49l.19 1.32c.02.12.13.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.24.5c.12.03.24-.01.31-.12ZM7.86 9.5c-.83 0-1.5-.68-1.5-1.5 0-.83.67-1.5 1.5-1.5 .82 0 1.5.67 1.5 1.5 0 .82-.68 1.5-1.5 1.5Z"></path>
        <path d="M16.81 14.79l-.64-.5c.01-.1.02-.19.02-.29 0-.1-.01-.2-.02-.29l.64-.5c.05-.05.07-.13.04-.19l-.6-1.04c-.04-.07-.11-.09-.19-.07l-.74.3c-.16-.12-.32-.22-.51-.29l-.11-.79c-.02-.08-.09-.13-.16-.13h-1.2c-.07 0-.14.05-.15.13l-.11.79c-.18.08-.35.17-.51.29l-.74-.3c-.07-.02-.14 0-.19.07l-.6 1.04c-.04.07-.02.14.04.19l.64.5c-.01.1-.02.19-.02.29 0 .1.01.2.02.29l-.64.5c-.05.05-.07.13-.04.19l.6 1.04c.04.07.11.09.19.07l.74-.3c.16.12.32.22.51.29l.11.79c.01.08.07.13.15.13h1.2c.07 0 .14-.05.15-.13l.11-.79c.18-.08.35-.17.5-.29l.75.3c.07.02.14 0 .19-.07l.6-1.04c.04-.06.02-.14-.03-.19ZM14 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1 -.45 1-1 1Z"></path>
</svg>
);

const CogI = () => (
  <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M20.8066 7.62358L20.1842 6.54349C19.6576 5.62957 18.4907 5.31429 17.5755 5.83869V5.83869C17.1399 6.09531 16.6201 6.16812 16.1307 6.04106C15.6413 5.91399 15.2226 5.59749 14.9668 5.16134C14.8023 4.88412 14.7139 4.56836 14.7105 4.24601V4.24601C14.7254 3.72919 14.5304 3.22837 14.17 2.85764C13.8096 2.48691 13.3145 2.27783 12.7975 2.27805H11.5435C11.037 2.27804 10.5513 2.47988 10.194 2.83891C9.83667 3.19795 9.63716 3.68456 9.63959 4.19109V4.19109C9.62458 5.23689 8.77246 6.07678 7.72655 6.07667C7.4042 6.07332 7.08844 5.98491 6.81122 5.82038V5.82038C5.89605 5.29598 4.7291 5.61126 4.20252 6.52519L3.53433 7.62358C3.00839 8.53636 3.31938 9.70258 4.22998 10.2323V10.2323C4.82189 10.574 5.18652 11.2056 5.18652 11.889C5.18652 12.5725 4.82189 13.204 4.22998 13.5458V13.5458C3.32054 14.0719 3.00921 15.2353 3.53433 16.1453V16.1453L4.16591 17.2346C4.41263 17.6798 4.82659 18.0083 5.31618 18.1474C5.80577 18.2866 6.33062 18.2249 6.77461 17.976V17.976C7.21106 17.7213 7.73117 17.6515 8.21932 17.7822C8.70748 17.9128 9.12322 18.233 9.37415 18.6716C9.53868 18.9489 9.62709 19.2646 9.63044 19.587V19.587C9.63044 20.6435 10.4869 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9089 18.6 15.2681 18.2407C15.6274 17.8814 16.1155 17.6806 16.6236 17.6831C16.9452 17.6917 17.2596 17.7797 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8066 16.1453C21.0617 15.7075 21.1318 15.186 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6717 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8873 19.1602 11.3658 19.4153 10.9279C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70286 21.3264 8.54346 20.8066 7.63274V7.63274V7.62358Z" fillRule="evenodd" stroke="var(--m3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<circle cx="12.1751" cy="11.889" r="2.63616" stroke="var(--m3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</svg>
);

const Question = () => (
  <IconContext.Provider value={{color: 'var(--m3)', className: 'iconR', size: '24'}}>
    <AiOutlineQuestionCircle />
  </IconContext.Provider>
);

export {
	FlashIcon,
	PhoneIcon,
	EmailIcon,
	SmsIcon,
	ActivityIcon,
	UserIcon,
	CgMenuRoundI,
	CategoryI,
	ToolsI,
	NewI,
	ReplaceI,
	ProfileI,
	QuestionI,
	WarrantyI,
	MaintenanceI,
	ProductsI,
  MaintI,
  CogI,
  Question,
};
