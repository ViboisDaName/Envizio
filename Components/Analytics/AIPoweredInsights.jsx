import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";
import { Percent, Eye, ArrowDownRight, ArrowUpRight, Clock5, ArrowUpWideNarrow, CloudCog, Clock } from "lucide-react";


const INSIGHTS = [
	{
		icon: CloudCog,
		color: "text-green-500",
		insight: "Add more diverse training data (different waste items, contamination levels, and edge cases) to further improve the model's confidence and reduce ambiguities.",
	},
	{
		icon: Percent,
		color: "text-blue-500",
		insight: "Integrate a feedback system where manual sorting or expert input can help flag and correct misclassifications, then use this data to retrain the model.",
	},
	{
		icon: Clock5,
		color: "text-purple-500",
		insight: 'Set up an automated retraining pipeline that triggers based on performance metrics, such as a sudden increase in false positives or negatives, without requiring manual intervention.',
	},
	{
		icon: Users,
		color: "text-yellow-500",
		insight: "Encourage better segregation of waste at the source (e.g., households, businesses). Provide clear instructions and incentives for users to sort their waste more accurately.",
	},
];

const AIPoweredInsights = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.0 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>AI-Powered Insights</h2>
			<div className='space-y-4'>
				{INSIGHTS.map((item, index) => (
					<div key={index} className='flex items-center space-x-3'>
						<div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
							<item.icon className={`size-6 ${item.color}`} />
						</div>
						<p className='text-gray-300'>{item.insight}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
};
export default AIPoweredInsights;