import { useGlobalContextProvider } from "@/app/context-api";
import { color } from "@/color";
import { Cell, Pie, PieChart } from "recharts";

export default function MainStatistics() {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  const stats = [
    { id: 1, num: 7, subTitle: "Best Streaks" },
    { id: 2, num: 10, subTitle: "Perfect Days" },
  ];

  return (
    <div
      style={{
        color: isDarkMode ? "white" : "",
        backgroundColor: isDarkMode ? color.myGrey : "",
      }}
      className="flex flex-col items-center justify-center mt-4 xl:mt-7 bg-slate-50 rounded-xl p-3 gap-4"
    >
      <span className="font-bold text-xl cursor-pointer hover:text-myGreen">
        Statistics
      </span>

      <div className="relative">
        <CircularProgressBar progress={89} />
        <div className="flex flex-col justify-center items-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[54%]">
          <span className="font-bold text-xl text-myGreen">89%</span>
          <span className="text-[11px]">{`Today's Progress`}</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 w-full my-3 px-2">
        {stats.map((item, itemIndex) => (
          <div className="flex items-center gap-3" key={itemIndex}>
            <div className="w-2 h-2 bg-myGreen rounded-full" />
            <div className="text-[12px]">
              <span className="flex flex-col font-bold">{item.num}</span>
              <span
                className={`${isDarkMode ? "text-white" : "text-gray-400"}`}
              >
                {item.subTitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CircularProgressBarProps {
  progress: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress,
}) => {
  const data = [
    { name: "Completed", value: progress },
    { name: "Remaining", value: 100 - progress },
  ];

  const colour = ["#47cf76", "#f5f5ff"];

  return (
    <PieChart
      width={200}
      height={160}
      margin={{ top: -20, right: 0, bottom: 40, left: 0 }}
    >
      <Pie
        data={data}
        dataKey="value"
        cx={100}
        cy={100}
        startAngle={180}
        endAngle={-180}
        innerRadius={66}
        outerRadius={progress === 100 ? 80 : 78}
        fill="blue"
        paddingAngle={0}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colour[index % colour.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};
