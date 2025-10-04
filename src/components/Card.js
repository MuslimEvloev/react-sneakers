function Card() {
  return (
    <div className="card">
      <img className="btn-unliked" src="/img/btn-unliked.svg" alt="Unliked" />
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
  );
}

export default Card;
