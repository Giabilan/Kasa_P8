import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import logements from "../../data/logements.json";
import Rating from "../../components/Rating/Rating";
import Carousel from "../../components/Carousel/Carousel";

const Housing = ({ id }) => {
  const house = logements.find((house) => house.id === id);
  const tags = house.tags;
  const rating = house.rating;

  return (
    <>
      <div className="housingPage">
      <Header />
        <div className="containerHouse">
          <Carousel pictures={house.pictures} />

          <div className="infos">
            <div className="location">
              <h2 className="houseTitle">{house.title}</h2>
              <p className="place">{house.location}</p>

              <div className="tags">
                {tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </div>
            </div>

            <div className="host">
              <div className="containerHost">
                <img
                  className="hostPicture"
                  src={house.host.picture}
                  alt={house.host.name}
                />
                <p className="hostName">{house.host.name}</p>
              </div>

              <div className="rating">
                <Rating rating={rating} />
              </div>
            </div>
          </div>

          <div className="housingCollapse">
            <div className="displayCollapse">
              <Collapse title="Description" desc={house.description} />
            </div>

            <div className="displayCollapse">
              <Collapse title="Équipements" desc={house.equipments} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Housing;
