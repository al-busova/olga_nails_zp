import price from '../../static_images/price.png';

const ServicesPage: React.FC = () => {
  return (
    <>
      <main>
      <section>
        <div>
            <h2>Послуги та ціни </h2> 
            <img src={price} alt="ціни" />
        </div>
      </section>
    </main>

    </>
  );
};
export default ServicesPage;