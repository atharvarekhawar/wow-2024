import FirstPartInSights from "../../components/insights/FirstPartInSights ";
import SecondPartInsights from "../../components/insights/SecondPartInsights";

const Insights = () => {
  return (
    <div id="insights" className="w-full h-full bg-no-repeat bg-cover bg-[url('images/insights/Insights_bg.png')]">
      <h2 className="font-semibold mb-2 text-[#545454] text-6xl text-center">INSIGHTS</h2>

      <div className="flex flex-wrap">
        {/* Content for the first box */}
        <FirstPartInSights/>

        {/* Content for the line */}
        <div className="w-[4px] min-h-[718px] mt-2 p-2 bg-no-repeat bg-[url('images/insights/line.png')] hidden lg:block "></div>

        {/* Content for the third box */}
        <SecondPartInsights />
      </div>
    </div>
  );
};

export default Insights;
