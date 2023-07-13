/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { IconContext } from 'react-icons';

import { BsTools, BsShieldCheck, BsBuildingGear } from 'react-icons/bs';
import { VscNewFile, VscArrowSwap } from 'react-icons/vsc';
import { CgProfile, CgMenuRound } from 'react-icons/cg';
import { FaQuestionCircle } from 'react-icons/fa';
import { IconlyProvider, Category } from 'react-iconly';

const CgMenuRoundI = () => (
  <IconContext.Provider
    value={{ color: '#fff', className: 'iconR', size: '24', cursor: 'pointer' }}
  >
    <CgMenuRound />
  </IconContext.Provider>
);

const CategoryI = () => (
  <IconlyProvider
    primaryColor="#fff"
    size="24"
    set="two-tone"
    stroke="light"
  >
    <Category />
  </IconlyProvider>
);

const ToolsI = () => (
  <IconContext.Provider
    value={{ color: 'var(--red)', className: 'iconR', size: '24' }}
  >
    <BsTools />
  </IconContext.Provider>
);

const NewI = () => (
  <IconContext.Provider
    value={{ color: 'var(--green)', className: 'iconR', size: '24' }}
  >
    <VscNewFile />
  </IconContext.Provider>
);

const ReplaceI = () => (
  <IconContext.Provider
    value={{
      color: 'var(--yellow)',
      className: 'iconR',
      size: '24',
    }}
  >
    <VscArrowSwap />
  </IconContext.Provider>
);

const ProfileI = () => (
  <IconContext.Provider
    value={{ color: 'blue', className: 'iconR', size: '24' }}
  >
    <CgProfile />
  </IconContext.Provider>
);

const QuestionI = () => (
  <IconContext.Provider
    value={{ color: 'var(--blue)', className: 'iconR', size: '24' }}
  >
    <FaQuestionCircle />
  </IconContext.Provider>
);

const WarrantyI = () => (
  <IconContext.Provider
    value={{ color: 'var(--blue)', className: 'iconR', size: '24' }}
  >
    <BsShieldCheck />
  </IconContext.Provider>
);

const MaintenanceI = () => (
  <IconContext.Provider
    value={{
      color: 'var(--nextui-colors-error)',
      className: 'iconR',
      size: '24',
    }}
  >
    <BsBuildingGear />
  </IconContext.Provider>
);

export {
  CgMenuRoundI,
  CategoryI,
  ToolsI,
  NewI,
  ReplaceI,
  ProfileI,
  QuestionI,
  WarrantyI,
  MaintenanceI,
};
