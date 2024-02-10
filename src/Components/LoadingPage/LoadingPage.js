import "./LoadingPage.scss";
const LoadingPage = () => {
  return (
    <>
      <section className="loading-page">
        {/* SHADE */}
        <section className="loading-page__shade"></section>
        <div className="loading-page__nav">
          <p>{`<`}</p>
          <p className="loading-page__nav--text">loading</p>
        </div>
        <section className="loading-page__loader-container">
          <div className="loading-page__loader-container--loader"></div>
        </section>
      </section>
    </>
  );
};
export default LoadingPage;
