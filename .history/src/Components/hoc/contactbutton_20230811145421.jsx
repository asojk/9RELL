function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button 
      className="ml-12 cursor-pointer btn md:hidden text-l1 bg-r group" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      Contact
      {isOpen && (
        <ul className="absolute p-2 m-0 mt-2 w-fit h-fit top-12 right-2 text-l1">
          <li className="flex items-center gap-2 py-2 btn text-l1 bg-d9">
            <FiPhone className="w-6 h-6" />
            <a href="tel:1-800-555-5555">Call 1-800-555-5555</a>
          </li>
          <li className="flex items-center gap-2 py-2 btn text-l1 bg-d9">
            <FiSend className="w-6 h-6" />
            <a href="mailto:roof@grell.pro">Email roof@grell.pro</a>
          </li>
          <li className="flex items-center gap-2 py-2 btn text-l1 bg-d9">
            <FiMessageCircle className="w-6 h-6" />
            <a href="text:5152276367">Text Us (515)227-6367</a>
          </li>
        </ul>
      )}
    </button>
  );
}

export default ContactButton;