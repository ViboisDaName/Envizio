import { motion } from "framer-motion";
import { Percent, Users, ShoppingBag, Eye, ArrowDownRight, ArrowUpRight, Clock5, ArrowUpWideNarrow, CloudCog, Clock } from "lucide-react";

const overviewData = [
	{ name: "False Positive Rate (FPR) ", value: "7%", change: 12.5, icon: Percent },
	{ name: "Model Confidence Level", value: "0.8 - 0.9", icon: CloudCog },
	{ name: "Sorting Accuracy", value: "86% - 90%", icon: ArrowUpWideNarrow },
	{ name: "False Negative Rate (FNR)", value: "5%", change: 15.7, icon: Percent },
	{ name: "Retraining Frequency", value: "2 Weeks", change: 15.7, icon: Clock5 },
	{ name: "Latency", value: "0.3 Seconds", change: 15.7, icon: Clock
	 },
	{ name: "Landfill Diversion Rate", value: "72%", change: 15.7, icon: Percent },
	{ name: "Contamination Rate", value: "9%", change: 15.7, icon: Percent },
];

const OverviewCards = () => {
	return (
		<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
			{overviewData.map((item, index) => (
				<motion.div
					key={item.name}
					className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg
            rounded-xl p-6 border border-gray-700
          '
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }}
				>
					<div className='flex items-center justify-between'>
						<div>
							<h3 className='text-sm font-medium text-gray-400'>{item.name}</h3>
							<p className='mt-1 text-xl font-semibold text-gray-100'>{item.value}</p>
						</div>

						<div
							className={`
              p-3 rounded-full bg-opacity-20 bg-green-500
              `}
						>
							<item.icon className={`size-6 text-green-500`} />
						</div>
					</div>
					<div
						className={`
            `}
					>
					</div>
				</motion.div>
			))}
		</div>
	);
};
export default OverviewCards;