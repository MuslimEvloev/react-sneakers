function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className=" d-flex  align-center">
          <img className="mr-15" width={40} height={40} src="/img/logo.png" />
          <div className="header-info">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>

            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className="mr-30">
            <img
              className="mr-10"
              width={18}
              height={18}
              src="/img/Group.svg"
            />
            <span>1205</span>
          </li>
          <li className="d-flex flex-row mr-30">
            <img
              className="mr-10"
              width={18}
              height={18}
              src="/img/zmdi_favorite-outline.svg"
            />
            <p>Закладки</p>
          </li>
          <li className="d-flex flex-row ">
            <img
              className="mr-10"
              width={18}
              height={18}
              src="/img/Union.svg"
            />
            <p className="ml-8">Профиль</p>
          </li>
        </ul>
      </header>
      <div className="p-40">
        <h1>Все кроссовки</h1>
        <div className="d-flex">
          <div className="card">
            <img width={133} height={113} src="/img/sneakers/1.jpg" />
            <h5 className="mb-15 ">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>

                <b>12 999 руб.</b>
              </div>
              <div>
                <button className="button">
                  <img width={11} height={11} src="/img/Plus.svg" alt="Plus" />
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <img width={133} height={113} src="/img/sneakers/2.jpg" />
            <h5 className="mb-15 ">Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>

                <b>12 999 руб.</b>
              </div>
              <div>
                <button className="button">
                  <img width={11} height={11} src="/img/Plus.svg" alt="Plus" />
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <img width={133} height={113} src="/img/sneakers/3.jpg" />
            <h5 className="mb-15 ">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>

                <b>8 499 руб.</b>
              </div>
              <div>
                <button className="button">
                  <img width={11} height={11} src="/img/Plus.svg" alt="Plus" />
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <img width={133} height={113} src="/img/sneakers/4.jpg" />
            <h5 className="mb-15 ">Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>

                <b>8 999 руб.</b>
              </div>
              <div>
                <button className="button">
                  <img width={11} height={11} src="/img/Plus.svg" alt="Plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>Muslim blog</p>
    </div>
  );
}

export default App;
