import PropTypes from 'prop-types';
import {
  ActivityIcon,
  CategoryI,
  CgMenuRoundI,
  FlashIcon,
  MaintenanceI,
  NewI,
  QuestionI,
  ReplaceI,
  ToolsI,
  UserIcon,
  WarrantyI,
} from "../hoc/iconsR";

const MenuItem = React.memo(({ to, title, icon }) => (
  <Link to={to}>
    <button className="flex items-center px-6 py-2 cursor-pointer md:py-4 rounded-xl">
      <span className="col-span-1 pr-4">{icon}</span>
      <span className="text-xs text-l1 md:text-lg">{title}</span>
    </button>
  </Link>
));

const services = [
  { to: "/repair", title: "Repair", icon: <ToolsI /> },
  { to: "/replacement", title: "Replace", icon: <ReplaceI /> },
  { to: "/new-roof", title: "Building New", icon: <NewI /> },
  { to: "/maintenance", title: "Maintenance", icon: <MaintenanceI /> },
  { to: "/warranty", title: "Warranty", icon: <WarrantyI /> },
];
const information = [
  { to: "/products", title: "Products", icon: <CgMenuRoundI /> },
  { to: "/faq", title: "FAQ", icon: <QuestionI /> },
  { to: "/projects", title: "Projects", icon: <FlashIcon /> },
];
const about = [
  { to: "/about", title: "About", icon: <UserIcon /> },
  { to: "/press", title: "Press", icon: <ActivityIcon /> },
];

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

function SideBar({ isOpen, onClose }) {
  const node = useRef();

  const handleClickOutside = useCallback(e => {
    if (node.current.contains(e.target)) {
      return;
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={node}
          className="fixed top-0 left-0 z-50 w-64 h-full px-4 py-12 overflow-auto text-base bg-d7 text-l1"
          variants={sidebarVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
        <nav className="flex flex-col flex-wrap w-full p-6">
          <div className="w-full pl-3 text-sm text-[var(--gray-3)]">
            Services
          </div>
          {services.map((item) => (
            <MenuItem
              key={item.to}
              to={item.to}
              title={item.title}
              icon={item.icon}
            />
          ))}

          <div className="w-full pl-3 text-sm text-[var(--gray-3)]">
            Information
          </div>
          {information.map((item) => (
            <MenuItem
              key={item.to}
              to={item.to}
              title={item.title}
              icon={item.icon}
            />
          ))}

          <div className="w-full pl-3 text-sm text-[var(--gray-3)]">
            About
          </div>
          {about.map((item) => (
            <MenuItem
              key={item.to}
              to={item.to}
              title={item.title}
              icon={item.icon}
            />
          ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SideBar;