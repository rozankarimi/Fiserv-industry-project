import "./LoadingPage.scss";
const LoadingPage = () => {
  return (
    <>
      <section className="loading-page">
        {/* SHADE */}
        <section className="loading-page__shade"></section>

        <section className="loading-page__loader-container">
          <div>
            <div className="loading-page__loader-container--loader"></div>
            <p className="loading-page__loader-container--text">
              Loading... Please wait
            </p>
          </div>
        </section>
      </section>
    </>
  );
};
export default LoadingPage;
