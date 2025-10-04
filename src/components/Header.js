{
  /* eslint-disable */
}

function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className=" d-flex  align-center">
        <img className="mr-15" width={40} height={40} src="/img/logo.png" />
        <div className="header-info">
          <h3 className="text-uppercase">REACT SNEAKERS</h3>

          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li className="mr-30 cu-p">
          <img className="mr-10" width={18} height={18} src="/img/Group.svg" />
          <span>1205</span>
        </li>
        <li className="d-flex flex-row mr-30 cu-p">
          <img
            className="mr-10"
            width={18}
            height={18}
            src="/img/zmdi_favorite-outline.svg"
          />
          <p>Закладки</p>
        </li>
        <li className="d-flex flex-row cu-p">
          <img className="mr-10" width={18} height={18} src="/img/Union.svg" />
          <p className="ml-8">Профиль</p>
        </li>
      </ul>
    </header>
  );
}

export default Header;
