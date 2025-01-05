import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./not-found.scss";

const Notfound = () => {
  return (
    <>
      <Header />
      <div className="not_found">
        <div className="not_found_message">このページは存在しません</div>
      </div>
      <Footer />
    </>
  );
};

export default Notfound;
