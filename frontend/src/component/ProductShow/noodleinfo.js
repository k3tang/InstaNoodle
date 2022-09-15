import ScrollThree from "../HomePage/scrollthree";
import { noodlePath } from "../HomePage/scrolltwo";
import check from "../../assets/noodle-info/check-large.png"
import noodleChart from "../../assets/noodle-info/noodle-chart.png";
import noodleLift from "../../assets/noodle-info/noodle-good-lift.png";
import packetLift from "../../assets/noodle-info/noodle-packet-lift.png";


const NoodleInfo = () => {
    return (
        <>
            <div className="noodle-headlines">
                <h1 className="headlines-header">The Headlines</h1>
                <div>{noodlePath()}</div>
                <ul className="headlines-grid">
                    <li><img src={check} alt="checkmark"/>100% vegan</li>
                    <li><img src={check} alt="checkmark" />26 vitamins & minerals</li>
                    <li><img src={check} alt="checkmark" />fully recyclable</li>
                    <li><img src={check} alt="checkmark" />no artificial flavours</li>
                    <li><img src={check} alt="checkmark" />high in protein</li>
                    <li><img src={check} alt="checkmark" />no palm oil</li>
                    <li><img src={check} alt="checkmark" />no gmo</li>
                    <li><img src={check} alt="checkmark" />no msg</li>
                </ul>
            </div>
            <div className="noodle-chart">
                <div className="noodle-chart-text">
                    <div className="noodle-chart-title">SO, WHAT IS NUTRITIONALLY COMPLETE?</div>
                    <div className="noodle-chart-desc">We’ve worked with expert nutritionists to make sure Future Noodles have everything you need to thrive - with the right balance of essential nutrients, protein, fibre, carbs, fats, vitamins and minerals for a healthy lifestyle. The ultimate balanced meal in a pot, so you can eat one for lunch and/or dinner alongside a healthy breakfast.</div>
                </div>
                <img id="noodle-chart-img" src={noodleChart} alt="noodle-chart"/>
            </div>
            <div className="noodle-lifts">
                <div className="first-lift">
                    <img src={noodleLift} alt="noodles-lifted-on-chopsticks"/>
                    <div className="first-lift-text">
                        <div className="first-lift-title">WHOLE WHEAT NOODLES, SLURP.</div>
                        <div className="first-lift-desc">Our noodles are made with whole wheat and are a great source of protein, fibre, iron and calcium. Carl is already working on our next generation noodz and he won't stop innovating until we reach noodle nirvana.</div>
                    </div>
                </div>
                <div className="second-lift">
                    <div className="second-lift-text">
                        <div className="second-lift-title">FROM A TO ZINC</div>
                        <div className="second-lift-desc">Our special nutrient blend has been created by a team of scientists in Cambridge to deliver all 26 key vitamins and minerals you need to live a balanced and healthy life.</div>
                    </div>
                    <img src={packetLift} alt="packet-lifted-by-chopsticks"/>
                </div>
                <div className="vita-text">VITAMIN A, VITAMIN B12, VITAMIN B6, VITAMIN C, VITAMIN D, VITAMIN E, VITAMIN K, BIOTIN, CALCIUM, CHLORIDE, CHROMIUM, COPPER, FOLIC ACID, IODINE, IRON, MAGNESIUM, MANGANESE, MOLYBDENUM, NIACIN, PANTOTHENIC, PHOSPHORUS, POTASSIUM, RIBOFLAVIN, SELENIUM, THIAMIN, ZINC.</div>
            </div>
        </>
    )
}

export default NoodleInfo;