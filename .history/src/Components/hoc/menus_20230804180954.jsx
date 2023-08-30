import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ContactButtons from "./ContactButtons";
import {
  FiShoppingCart,
  FiSearch,
  FiPhone,
  FiMenu,
  FiHome,
  FiX,
} from "react-icons/fi";
import {Link} from 'react-router-dom';
import {ActivityIcon, CategoryI, CgMenuRoundI, FlashIcon, MaintenanceI, NewI, QuestionI, ReplaceI, ToolsI, UserIcon, WarrantyI} from '../hoc/iconsR';

const FloatingBottomNav = () => {
  const [open, setOpen] = useState(false);

  return (

      <motion.nav
        animate={open ? "open" : "closed"}
        initial="closed"
        className="fixed w-full flex px-[10vw] items-center text-black justify-between top-8 left-[50%] -translate-x-[50%] z-50">
          <MenuButton setOpen={setOpen} open={open} />
            <div className="z-10 flex items-center w-screen py-4">

              <div className="relative w-1/3">
              </div>

              <div className='items-center w-1/3 text-center bg-transparent place-content-center'>
                  <img className='z-50 w-2/2 md:w-4/4 lg:w-5/6 xl:w-5/8' src='https://grell.s3.us-east-2.amazonaws.com/grell/W-Tag.svg' alt='Logo' />
              </div>

              <div className='w-1/3'>
                <ContactButtons />
              </div>
            </div>
            
          <Menu />
      </motion.nav>

  );
};

const Links = ({ text, Icon, to }) => {
  return (
    <Link to={to}>
    <a
      href="#"
      rel="nofollow"
      className="flex flex-col items-center w-12 gap-1 text-3xl transition-colors text-l1 hover:text-r"
    >
      <Icon />
      <span className="text-xs">{text}</span>
    </a>
    </Link>
  );
};

const MenuButton = ({ open, setOpen }) => {
  return (
    <div
      onClick={() => setOpen((pv) => !pv)}
      className="h-full text-4xl font-bold text-l1"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="icon-1"
              className="block"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.125, ease: "linear" }}
            >
              <FiX />
            </motion.span>
          ) : (
            <motion.span
              key="icon-2"
              className="block"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.125, ease: "linear" }}
            >
              <FiMenu />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

const MenuItem = ({to, title, icon}) => (
	<Link to={to}>
        <motion.a
      variants={menuLinkVariants}
      href="#"
      rel="nofollow"
      className="flex items-center gap-2 text-lg transition-colors hover:text-r"
    >
			<button className='flex items-center px-5 py-2 cursor-pointer md:py-4 rounded-xl bg-custom/30 hover:border-s-2'>
				<span className='col-span-1'>{icon}</span>
				<span className='text-xs text-l1 md:text-lg'>{title}</span>
			</button></motion.a>
	</Link>
);

const Menu = () => {
  return (
    <motion.div
      variants={menuVariants}
      style={{ transformOrigin: "top", x: "-50%" }}
      className="p-6 shadow-lg bg-d6 text-l1 absolute top-[125%] left-[50%] flex w-[calc(100vw_-_48px)] max-w-2xl rounded-xl"
    >
      <div className="flex flex-col w-1/3 gap-2">
      <SectionTitle text="Services" />
        <MenuItem Link to='/repair' title='Repair' icon={<ToolsI />} />
        <MenuItem Link to='/replacement' title='Replace' icon={<ReplaceI />} />
        <MenuItem Link to='/new-roof' title='Building New' icon={<NewI />} />
        <MenuItem Link to='/maintenance' title='Maintenance' icon={<MaintenanceI />} />
      </div>
      <div className="flex flex-col w-1/3 gap-2">
        <SectionTitle title="More Info" />
          <MenuItem Link to='/warranty' title='Warranty' icon={<WarrantyI />} />
          <MenuItem Link to='/products' title='Products' icon={<CgMenuRoundI />} />
          <MenuItem Link to='/faq' title='FAQ' icon={<QuestionI />} />
      </div>
      <div className="flex flex-col w-1/3 gap-2">
        <SectionTitle title="About" />
          <MenuItem Link to='/about' title='About' icon={<UserIcon />} />
          <MenuItem Link to='/projects' title='Projects' icon={<FlashIcon />} />
          <MenuItem Link to='/press' title='Press' icon={<ActivityIcon />} />
      </div>
      <div className="fixed bottom-0 right-0">
        <MenuItem Link to='/' title='Home' icon={<FiHome />} />
        </div>
    </motion.div>
  );
};

const SectionTitle = ({ text }) => {
  return (
    <motion.h4
      variants={menuLinkVariants}
      className="mb-2 text-sm font-black"
    >
      {text}
    </motion.h4>
  );
};

export default FloatingBottomNav;

const iconVariants = {
  initial: { rotate: 180, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  exit: { rotate: -180, opacity: 0 },
};

const menuVariants = {
  open: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  closed: {
    scale: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -15,
    opacity: 0,
  },
};