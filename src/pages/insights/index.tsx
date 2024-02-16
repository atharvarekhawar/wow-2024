import FirstPartInSights from "../../components/insights/FirstPartInSights ";
import SecondPartInsights from "../../components/insights/SecondPartInsights";

const Insights = () => {
  return (
    <div id="insights" className="w-full h-full min-h-[700px] flex flex-col  bg-white ">
      <h2 className="font-semibold mb-10 text-black text-6xl text-center">INSIGHTS</h2>

      <div className="w-full h-full flex flex-col-reverse lg:flex-row">
        {/* Content for the first box */}
        <FirstPartInSights/>

        {/* Content for the third box */}
        <SecondPartInsights />
      </div>
    </div>
  );
};

export default Insights;
