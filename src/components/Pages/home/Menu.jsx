const Menu = ({ children, label, onClick }) => (
  <div className="flex flex-col items-center">
    <button type="button" className="menu" onClick={onClick}>
      {children}
    </button>
    <p className="body-s text-purple pt-2">{label}</p>
  </div>
);

export default Menu;
